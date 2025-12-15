import imgLoading from "@/assets/loading.svg"
import styles from "@/styles/loading.module.less"

function getLoadingImage(el) {
  return el.querySelector('img[data-role="loading')
}

function createLoadingImage() {
  const img = document.createElement("img")
  img.dataset.role = "loading"
  img.src = imgLoading
  img.className = styles.loading
  return img
}

export default {
  bind(el, binding) {
    const currentImg = getLoadingImage(el)
    if (binding.value) {
      if (currentImg) {
        currentImg.remove()
      } else {
        const img = createLoadingImage()
        el.appendChild(img)
      }
    }
  },
  inserted() {},
  update(el, binding) {
    if (!binding.value) {
      const currentImg = getLoadingImage(el)
      currentImg.remove()
    }
  },
}

// export default function (el, binding) {
//   console.log("ok", binding.value)
// }
