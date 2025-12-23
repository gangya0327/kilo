import Mock from "mockjs"
import qs from "querystring"

// 文章列表
Mock.mock(/^\/api\/message\/?(\?.+)?$/, "get", function (options) {
  const query = qs.parse(options.url)
  return Mock.mock({
    code: 0,
    msg: "",
    data: {
      "total|100-300": 0,
      [`rows|${query.limit || 10}`]: [
        {
          id: "@guid",
          nickname: "@cname",
          content: "@cparagraph(1,10)",
          createDate: Date.now(),
          "avatar|1": [
            "https://picsum.photos/200/200?random=1",
            "https://picsum.photos/200/200?random=2",
            "https://picsum.photos/200/200?random=3",
            "https://picsum.photos/200/200?random=4",
            "https://picsum.photos/200/200?random=5",
          ],
        },
      ],
    },
  })
})

// 添加评论
Mock.mock("/api/message", "post", {
  code: 0,
  msg: "",
  data: {
    id: "@guid",
    nickname: "@cname",
    content: "@cparagraph(1,10)",
    createDate: Date.now(),
    "avatar|1": [
      "https://picsum.photos/200/200?random=1",
      "https://picsum.photos/200/200?random=2",
      "https://picsum.photos/200/200?random=3",
      "https://picsum.photos/200/200?random=4",
      "https://picsum.photos/200/200?random=5",
    ],
  },
})
