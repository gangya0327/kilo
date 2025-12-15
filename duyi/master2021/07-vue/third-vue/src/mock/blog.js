import Mock from "mockjs"
import { title } from "process"
import qs from "querystring"

// 文章列表
Mock.mock(/^\/api\/blog(\?.+)?$/, "get", function (options) {
  const query = qs.parse(options.url)
  return Mock.mock({
    code: 0,
    msg: "",
    data: {
      "total|100-300": 0,
      [`rows|${query.limit || 10}`]: [
        {
          id: "@guid",
          title: "@ctitle(1, 50)",
          description: "@cparagraph(1,10)",
          category: {
            "id|1-10": 0,
            name: "分类@id",
          },
          "scanNumber|0-300": 0,
          "commentNumber|0-300": 30,
          "thumb|1": [
            Mock.Random.image("400x280", "#4A7", "#fff", "文章图片"),
            null,
          ],
          createDate: "@date('T')",
        },
      ],
    },
  })
})

// 分类列表
Mock.mock("/api/blogCategory", "get", {
  code: 0,
  msg: "",
  "data|10-20": [
    {
      "id|+1": 1,
      name: "分类@id",
      "articleCount|0-30": 10,
      "order|+1": 1,
    },
  ],
})
