<template>
  <div class="audio-player-demo">
    <h2>自定义音频播放器示例</h2>
    
    <!-- 使用自定义音频播放器组件 -->
    <CustomAudioPlayer v-model="audioSrc" />
    
    <!-- 音频源选择 -->
    <div class="audio-controls">
      <h3>选择音频源:</h3>
      <input 
        v-model="audioSrc" 
        placeholder="输入音频文件URL" 
        class="audio-input"
      />
      <p class="hint">提示: 可以输入任何有效的音频文件URL，例如: https://example.com/audio.mp3</p>
      
      <!-- 示例音频按钮 -->
      <div class="example-buttons">
        <button @click="setExampleAudio(1)">示例音频 1</button>
        <button @click="setExampleAudio(2)">示例音频 2</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CustomAudioPlayer from './CustomAudioPlayer.vue'

// 音频源
const audioSrc = ref('')

// 设置示例音频
const setExampleAudio = (exampleNum: number) => {
  // 注意: 这些只是示例URL，在实际使用中需要替换为真实的音频文件URL
  if (exampleNum === 1) {
    audioSrc.value = 'https://example.com/sample1.mp3'
  } else {
    audioSrc.value = 'https://example.com/sample2.mp3'
  }
}
</script>

<style scoped lang="scss">
.audio-player-demo {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
}

h2 {
  color: #333;
  margin-bottom: 20px;
}

h3 {
  color: #555;
  margin-bottom: 10px;
}

.audio-controls {
  margin-top: 30px;
  padding: 20px;
  background: #f5f5f5;
  border-radius: 8px;
}

.audio-input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  margin-bottom: 15px;
  box-sizing: border-box;
}

.hint {
  color: #777;
  font-size: 14px;
  margin-bottom: 20px;
}

.example-buttons {
  display: flex;
  gap: 10px;
  
  button {
    padding: 8px 16px;
    background: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.2s;
    
    &:hover {
      background: #0056b3;
    }
  }
}
</style>