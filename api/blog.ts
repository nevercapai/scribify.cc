import request from "~/utils/request";
let suffix = 'populate[0]=userInfo.avatar&populate[1]=articleInfo.cover'
const config = useRuntimeConfig();
if (config.public.env !== 'production') {
  suffix += '&status=*'
}
// 用户相关接口
export const blogApi = {
  getBlogs() {
    return new Promise((resolve, reject) => {
      return request(`/strapiServer/api/blogs?${suffix}`, {
        method: "GET",
      })
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },

  getBlogByUrlTitle(urlTitle: string) {
    return new Promise((resolve, reject) => {
      return request(`/strapiServer/api/blogs?${suffix}&filters[urlTitle][$eq]=${encodeURIComponent(urlTitle)}`, {
        method: "GET",
      })
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },

  getBlogById(id: string) {
    return new Promise((resolve, reject) => {
      return request(`/strapiServer/api/blogs/${id.trim()}?populate=*`, {
        method: "GET",
      })
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
};
