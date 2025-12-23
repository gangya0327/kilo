import Mock from "mockjs"

Mock.mock("/api/setting", "get", {
  code: 0,
  msg: "",
  data: {
    avatar:
      "https://image.woshipm.com/2024/05/12/409d99be-1064-11ef-b3fd-00163e142b65.png",
    // "https://image.woshipm.com/2023/08/11/038990a6-380f-11ee-8f7d-00163e0b5ff3.jpg",
    siteTitle: "白银帝国",
    icp: "ICP 12345678号",
    phone: "138-0013-8000",
    tencent: "https://qq.com",
    taobao: "https://taobao.com",
    favicon: "https://lhcdn.lanhuapp.com/web/static/favicon.ico?v=2",
  },
})
