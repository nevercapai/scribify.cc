import { onMounted, onUnmounted } from 'vue'
import { useHead, useAppConfig } from '#imports'

export function useScrollTitle(ngTitle?: string) {
  const { title } = useAppConfig()
  ngTitle = ngTitle || title
  useHead({
    title: ngTitle as string
  });
  let scrollTitle = ngTitle + '          '
  let titleTimer: any = null

  onMounted(() => {
    // titleTimer = setInterval(() => {
    //   scrollTitle = scrollTitle.substring(1) + scrollTitle[0]
    //   document.title = scrollTitle
    // }, 300)
  })

  onUnmounted(() => {
    // clearInterval(titleTimer)
  })
} 