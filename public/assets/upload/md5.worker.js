importScripts('./spark-md5.min.js');
function createFileMd5 (file) {
    const blobSlice = File.prototype.slice || File.prototype.mozSlice || File.prototype.webkitSlice
    console.log('blobSlice', blobSlice)
    if(!blobSlice) {
        // 浏览器不兼容处理
        return ''
    }
    let chunkSize = 10 * 1024 * 1024, // 分割文件大小为1MB
        chunks = Math.ceil(file.size / chunkSize),
        currentChunk = 0,
        spark = new SparkMD5.ArrayBuffer(),
        fileReader = new FileReader()
    return new Promise((resolve)=> {
        const now = new Date()
        fileReader.onload = function (e) {
            spark.append(e.target.result)
            currentChunk++
            console.log('onload')
            if (currentChunk < chunks) {
                loadNext()
            } else {
                const r = {
                    md5: spark.end(),
                    time: `${(new Date().getTime() - now) / 1000}s`,
                }
                resolve(r)
            }
        }
        fileReader.onerror = function () {
            resolve(null)
        }
        function loadNext () {
            let start = currentChunk * chunkSize,
                end = ((start + chunkSize) >= file.size) ? file.size : start + chunkSize
            fileReader.readAsArrayBuffer(blobSlice.call(file, start, end))
        }
        loadNext()
    })
}

onmessage = async function (e) {
    const data = e.data
    const result = await createFileMd5(data.file)
    console.log('result', result)
    postMessage(result) // 返回结果
}
