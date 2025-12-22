import bus from "@/bus"
import { debounce } from "@/utils"
import defaultBlog from "@/assets/default_blog.jpeg"

let imgs = []

function setImage(img) {
  img.dom.src = defaultBlog
  const clientHeight = document.documentElement.clientHeight
  const rect = img.dom.getBoundingClientRect()
  const minImageHeight = 100 // 假设图片最小高度为100px
  if (rect.top < -minImageHeight || rect.top > clientHeight) {
    console.log(img.dom, "img 不在视口范围内")
    img.dom.src = defaultBlog
  } else {
    console.log(img.dom, "img 在视口范围内")
    const tempImg = new Image()
    tempImg.src = img.src
    tempImg.onload = function () {
      img.dom.src = img.src
    }
    tempImg.src = img.src
    imgs = imgs.filter((i) => i !== img) // 处理完成后移除
  }
}

function setImages() {
  for (const img of imgs) {
    setImage(img)
  }
}

function handleScroll() {
  setImages()
}

bus.$on("mainScroll", debounce(handleScroll, 500))

export default {
  inserted(el, bindings) {
    const img = {
      dom: el,
      src: bindings.value,
    }
    imgs.push(img)
    // 加载时立即处理
    setImage(img)
  },
  unbind(el) {
    // 移除时同步删除不需要处理的图片
    imgs = imgs.filter((img) => img.dom !== el)
  },
}
