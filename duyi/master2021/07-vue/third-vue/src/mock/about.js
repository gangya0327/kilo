import Mock from "mockjs"

Mock.mock("/api/about", "get", {
  code: 0,
  msg: "",
  // data: "https://www.strml.net/",
  data: "http://skill.phodal.com/#_am_1_Name",
})
