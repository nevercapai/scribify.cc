import request from "~/utils/request";
// 订阅计划
export const useSubscription = {
  // 查询是否第一次订阅
  paymentGetUser(id: string) {
    return new Promise((resolve, reject) => {
      return request(`/wapi/payServer/payment/getUser?${id}`, {
        method: "get"
      })
        .then((res) => {
          if (res.code === 0) {
            resolve(res.data);
          } else {
            reject(res);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  // 创建会话接口
  createCheckoutSession(body: { priceType: number }) {
    return new Promise((resolve, reject) => {
      return request(`/wapi/payServer/payment/createCheckoutSession`, {
        method: "post",
        body: { ...body, url: window.location.href }
      })
        .then((res) => {
          if (res.code === 0) {
            resolve(res.data);
          } else {
            reject(res);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  // 再次订阅
  paymentManageUser(body: { userId: string }) {
    return new Promise((resolve, reject) => {
      return request(`/wapi/payServer/payment/manageUser`, {
        method: "post",
        body: { url: window.location.href }
      })
        .then((res) => {
          if (res.code === 0) {
            resolve(res.data);
          } else {
            reject(res);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  // 订阅状态
  statusUserId(id: string) {
    return new Promise((resolve, reject) => {
      return request(`/wapi/payServer/payment/status?userId=${id}`, {
        method: "get"
      })
        .then((res) => {
          if (res.code === 0) {
            resolve(res.data);
          } else {
            reject(res);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  },

  // 今日转录次数
  transcriptionCount() {
    return new Promise((resolve, reject) => {
      return request(
        `/wapi/taskServer/api/v1/transcription/task/today-transcription-count`,
        {
          method: "post",
          body: {}
        }
      )
        .then((res) => {
          if (res.code === 0) {
            resolve(res.data);
          } else {
            reject(res);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  upgradeSubscription(body: { userId: string }) {
    return new Promise((resolve, reject) => {
      return request(`/wapi/payServer/payment/upgradeSubscription`, {
        method: "post",
        body: { url: window.location.href }
      })
        .then((res) => {
          if (res.code === 0) {
            resolve(res.data);
          } else {
            reject(res);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
};
