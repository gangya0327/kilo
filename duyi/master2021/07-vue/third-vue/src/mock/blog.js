import Mock from "mockjs"
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
            Mock.Random.image("400x280", "#4A7", "#fff", "文章封面"),
            "",
          ],
          // thumb:
          //   '@pick(["", "http://dummyimage.com/400x280/4A7/fff&text=文章封面"])',
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
  "data|2-4": [
    {
      "id|+1": 1,
      name: "分类@id",
      "articleCount|0-30": 0,
      "order|+1": 1,
    },
  ],
})

// 文章详情
Mock.mock(/^\/api\/blog\/[^/]+$/, "get", {
  code: 0,
  msg: "",
  data: {
    id: 1,
    title: "文章标题",
    category: {
      "id|1-5": 1,
      name: "分类@id",
    },
    description: "@cparagraph(1,10)",
    "scanNumber|0-30": 0,
    "commentNumber|0-30": 0,
    createDate: "@date('T')",
    toc: [
      { name: "概述", anchor: "article-title-1" },
      {
        name: "标题二",
        anchor: "article-title-2",
        children: [
          { name: "标题三", anchor: "article-title-3" },
          { name: "标题四", anchor: "article-title-4" },
        ],
      },
      { name: "结尾", anchor: "article-title-5" },
    ],
    thumb: Mock.Random.image("400x280", "#4A7", "#fff", "文章封面"),
    htmlContent: `<div class="indent" id="link-report-intra">
                    
                        <span property="v:summary">
                                　　故事发生在一座名为“东城”的小城之中，梅尔（凯特·温丝莱特 Kate Winslet 饰）是在那里生活和工作的一名警探，每一天，梅尔都要处理镇子上发生的各种各样的琐事，这些事情堆积到一起，难免令她感到身心疲惫。
                                    <br>
                                　　某日，一起谋杀案的发生打破了小镇的宁静气氛，一位名叫艾琳（卡莉·史派妮 Cailee Spaeny 饰）的少女妈妈被人发现死在了河滩上。一段流出的视频显示，艾琳在死亡当天，曾经遭到过前男友迪伦（杰克·马赫恩 Jack Mulhern 饰）和其现任女友布里安娜（麦肯齐·兰辛 Mackenzie Lansing 饰）的霸凌，梅尔毫不犹豫拘捕了两人。这桩案件带来的影响犹如蝴蝶效应一般迅速席卷了整个小镇，一时之间，梅尔身边的所有人似乎被卷入了案件之中。
                        </span>
                        <span class="pl"><a href="https://movie.douban.com/help/movie#t0-qs">©豆瓣</a></span>
            </div>`,
  },
})

// 添加评论
Mock.mock("/api/comment", "post", {
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

// 评论列表
Mock.mock(/^\/api\/comment\/?(\?.+)/, "get", function (options) {
  const query = qs.parse(options.url)
  return Mock.mock({
    code: 0,
    msg: "",
    data: {
      "total|5-20": 0,
      [`rows|${query.limit || 5}`]: [
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
