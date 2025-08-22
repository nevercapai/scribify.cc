const useJumpPage = (url: string) => {
  const config = useRuntimeConfig();
  const jumpUrl = config.public.jumpUrl as string;
  const localePath = useLocalePath();
  const path = localePath(url);
  alert('跳出项目了')
  window.open(`${jumpUrl}${path}`, "_parent")
  // window.location.href = route;
};
export default useJumpPage
