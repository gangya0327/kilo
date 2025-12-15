import Mock from "mockjs"

Mock.mock("/api/banner", "get", {
  code: 0,
  msg: "",
  data: [
    {
      id: 1,
      title: "[韩剧] 灵指",
      img: "https://cdn.dribbble.com/userupload/43776512/file/original-be8d415930b5052f45f034915c06945a.jpg?resize=1024x768&vertical=center",
      description:
        "根据同名漫画改编的剧集没有大咖主演，甚至因男主患有过敏性大肠综合症（经常要拉粑粑），被一些网友吐槽是太过恶搞的设定。",
    },
    {
      id: 2,
      title: "[美剧] 雷殛元首",
      img: "https://cdn.dribbble.com/userupload/15551902/file/original-f1511abd3ef449e40c5aa9835fcf8253.jpg?resize=1024x1024&vertical=center",
      description:
        "作为美国第 20 位总统，加菲尔德的经历很神奇。神职出身的他从未想过参选，起初上台演讲，也是为了替好友拉票。",
    },
    {
      id: 3,
      title: "[美剧] 圣丹尼斯医院 第二季",
      img: "https://cdn.dribbble.com/userupload/44987651/file/3f1b70eaefafbcd664060bf4861caf41.jpg?resize=1024x768&vertical=center",
      description:
        "伪纪录片的形式走进了医护人员的工作里，不仅记录着每个人工作的模样，更借着他们的搞笑生活。",
    },
    {
      id: 4,
      title: "[国产] 三人行",
      img: "https://cdn.dribbble.com/userupload/44423693/file/47766bdef64bab8405296c75e9067e58.jpg?resize=1024x768&vertical=center",
      description: "三个年龄段，不一样的看待世界的视角，不同的人生历练。",
    },
  ],
})
