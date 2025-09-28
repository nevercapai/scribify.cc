export const useClickHandler = (func, options = {}) => {
    const {
        moveThreshold = 10,
        longPressThreshold = 500,
    } = options

    let isTouch = false
    let touchTimer = null

    const touchRef = reactive({
        startX: 0,
        startY: 0,
        startTime: 0,
        isMoved: false,
    })

    const handleTouchStart = (e) => {
        isTouch = true
        // 清除之前的定时器
        if (touchTimer) clearTimeout(touchTimer)

        const touch = e.touches[0]
        touchRef.startX = touch.clientX
        touchRef.startY = touch.clientY
        touchRef.startTime = Date.now()
        touchRef.isMoved = false
    }

    const handleTouchMove = (e) => {
        if (!isTouch) return

        const touch = e.touches[0]
        const deltaX = Math.abs(touch.clientX - touchRef.startX)
        const deltaY = Math.abs(touch.clientY - touchRef.startY)

        if (deltaX > moveThreshold || deltaY > moveThreshold) {
            touchRef.isMoved = true
        }
    }

    const handleTouchEnd = (e) => {
        if (!isTouch) return

        const duration = Date.now() - touchRef.startTime

        if (!touchRef.isMoved && duration < longPressThreshold) {
            e.preventDefault()
            func?.(e)
        }

        // 设置延时重置，防止click事件触发
        touchTimer = setTimeout(() => {
            isTouch = false
        }, 300)
    }

    const handleClick = (e) => {
        // 如果刚刚有touch事件，忽略click
        if (isTouch) {
            return
        }
        func?.(e)
    }

    return {
        touchstart: handleTouchStart,
        touchmove: handleTouchMove,
        touchend: handleTouchEnd,
        click: handleClick,
    }
}
