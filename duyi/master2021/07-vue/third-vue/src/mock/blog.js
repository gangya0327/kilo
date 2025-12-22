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
          title: "@ctitle(1, 20)",
          description: "@cparagraph(5,20)",
          category: {
            "id|1-10": 0,
            name: "分类@id",
          },
          "scanNumber|0-300": 0,
          "commentNumber|0-300": 30,
          // "thumb|1": [
          //   Mock.Random.image("400x280", "#4A7", "#fff", "文章封面"),
          //   "",
          // ],
          "thumb|1": [
            Mock.Random.image("400x280", "#4A7", "#fff", "@natural(10,99)"),
            // "",
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
    title: "@ctitle(1, 20)",
    category: {
      "id|1-5": 1,
      name: "分类@id",
    },
    description: "@cparagraph(1,10)",
    "scanNumber|0-30": 0,
    "commentNumber|0-30": 0,
    createDate: "@date('T')",
    toc: [
      { name: "前言", anchor: "article-title-0" },
      { name: "事件分析", anchor: "article-title-1" },
      {
        name: "关键人物",
        anchor: "article-title-2",
        children: [
          { name: "特朗普", anchor: "article-title-3" },
          { name: "泽连斯基", anchor: "article-title-4" },
        ],
      },
      { name: "尾声", anchor: "article-title-5" },
    ],
    thumb: Mock.Random.image("400x280", "#4A7", "#fff", "文章封面"),
    htmlContent: `<h3 id="article-title-0" style="text-align: justify; line-height: 2;">前言</h3><p style="text-align: justify; line-height: 2;">据新华社报道，美国总统特朗普周二下午（23日）表示，他现在认为乌克兰在欧盟和北约支持下，有望从俄罗斯手中“赢回全部乌克兰”，“边界恢复原状”。</p><h3 id="article-title-1" style="text-align: justify; line-height: 2;">事件分析</h3><p style="text-align: justify; line-height: 2;"><strong> &nbsp; &nbsp;这一发言代表着特朗普的立场发生重大转变。</strong>此前，特朗普曾多次表示，放弃一些土地将是解决乌克兰与俄罗斯战争的关键组成部分。</p><p style="text-align: justify; line-height: 2;">当天，特朗普在其社交媒体平台Truth Social上发布长文称，在充分了解乌克兰和俄罗斯的军事、经济状况，以及这给俄罗斯造成的经济困境后，<strong>“我认为乌克兰在欧盟的支持下，完全有能力战胜一切，最终恢复原状”。</strong></p><p style="text-align: justify; line-height: 2;"> &nbsp; &nbsp;他认为，在欧盟财政支持，特别是北约军事支持下，加上时间和耐心，<strong>回到“这场战争开始时的原有边界是一个完全可行的选择”。</strong></p><h3 id="article-title-2" style="text-align: justify; line-height: 2;"><strong>关键人物</strong></h3><h4 id="article-title-3" style="text-align: justify; line-height: 2;">特朗普</h4><p style="text-align: justify; line-height: 2;"> &nbsp; &nbsp;特朗普还表示，当莫斯科以及全俄罗斯各大城市、乡镇和地区的居民了解到这场战争的真相，了解到他们几乎不可能通过排着的长队获得汽油，以及了解他们的战时经济中正在发生的所有其他事情时，他们的大部分资金都花在了与乌克兰的战争上。而乌克兰拥有伟大的精神，而且只会越来越好。</p><p style="text-align: justify; line-height: 2;"> &nbsp; &nbsp;“乌克兰将能够以原有的形式夺回他们的国家，谁知道呢，也许会走得更远！普京和俄罗斯正面临巨大的经济困境，现在是乌克兰采取行动的时候了。无论如何，我祝愿两国一切安好。<strong>我们将继续向北约提供武器，让北约做他们想做的事。</strong>祝大家好运！”他写道。</p><h4 id="article-title-4" style="text-align: justify; line-height: 2;">泽连斯基</h4><p style="text-align: justify; line-height: 2;"> &nbsp; &nbsp;当被问及特朗普的帖子时，乌克兰总统泽连斯基告诉记者：“这是一个很大的转变。这篇文章是一个很大的转变。非常积极的。”</p><p style="text-align: justify; line-height: 2;"> &nbsp; &nbsp;在周二发布上述帖子之前，特朗普早些时候在纽约联合国大会期间与泽连斯基举行了第二任期的第五次会晤。在闭门会谈之前，特朗普对记者说，他支持北约国家击落任何侵犯其领空的俄罗斯飞机。当被问及美国是否会支持北约盟国时，他说这将“取决于”具体情况。</p><p style="text-align: justify; line-height: 2;">特朗普还向媒体表示，这场冲突似乎看不到结束的迹象。他说：“看起来很长一段时间都不会结束。”</p><h3 id="article-title-5" style="text-align: justify; line-height: 2;">尾声</h3><p style="text-align: justify; line-height: 2;"> &nbsp; &nbsp;上个月，特朗普曾在白宫表示，已经就俄罗斯和乌克兰可能“交换”领土进行了谈判，作为停火协议的一部分。</p>`,
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
