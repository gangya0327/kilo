import Mock from "mockjs"

// 文章列表
Mock.mock(/^\/api\/project\/?$/, "get", function (options) {
  return Mock.mock({
    code: 0,
    msg: "",
    "data|10-20": [
      {
        id: "@uuid",
        name: "@ctitle(2, 5)",
        "url|1": ['@url("http")', null],
        "github|1-2": ["@url(https)", null],
        "description|2-4": ["@cparagraph(1, 3)"],
        thumb: "@image(400x280, #4A7, #fff, @natural)",
      },
    ],
  })
})
