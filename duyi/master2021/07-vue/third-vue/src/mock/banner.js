import Mock from "mockjs"

Mock.mock("/api/banner", "get", {
  code: 0,
  msg: "",
  data: [
    {
      id: 1,
      title: "[韩剧] 灵指",
      img: "https://nenya.doubanio.com/view/photo/xl/public/p2925518724.jpg?sa_cv=c7920e60f012c3faed064fe1b3729894&sa_ct=693d7923",
      description:
        "根据同名漫画改编的剧集没有大咖主演，甚至因男主患有过敏性大肠综合症（经常要拉粑粑），被一些网友吐槽是太过恶搞的设定。",
    },
    {
      id: 2,
      title: "[美剧] 雷殛元首",
      img: "https://nenya.doubanio.com/view/photo/xl/public/p2927010912.jpg?sa_cv=737127b3c8abe05e128b5695a342822b&sa_ct=693d7965",
      description:
        "作为美国第 20 位总统，加菲尔德的经历很神奇。神职出身的他从未想过参选，起初上台演讲，也是为了替好友拉票。",
    },
    {
      id: 3,
      title: "[美剧] 圣丹尼斯医院 第二季",
      img: "https://nenya.doubanio.com/view/photo/xl/public/p2927893616.jpg?sa_cv=edb89276ac9b4beb5063700d9a471d80&sa_ct=693d797d",
      description:
        "伪纪录片的形式走进了医护人员的工作里，不仅记录着每个人工作的模样，更借着他们的搞笑生活。",
    },
    {
      id: 4,
      title: "[国产] 三人行",
      img: "https://nenya.doubanio.com/view/photo/xl/public/p2926823497.jpg?sa_cv=2065670eb3732aae7a65c5bf39971199&sa_ct=693d79c1",
      description: "三个年龄段，不一样的看待世界的视角，不同的人生历练。",
    },
  ],
})
