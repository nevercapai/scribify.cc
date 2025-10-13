import request from "~/utils/request";

export const useCommonApi = {
  // 上报
  async collectEvent(body: any) {
    try {
      body.path = window.location.href
      if (!Array.isArray(body)) {
        body = JSON.stringify([body]);
      }
      const res = await request("/wapi/fileServer/file/collectEvent", {
        method: "POST",
        body
      });
      if (res.code === 0) {
        return res.data;
      }
      return Promise.reject(res);
    } catch (err) {
      return Promise.reject(err);
    }
  }
};
