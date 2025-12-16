import imgLoading from "@/assets/loading.svg"
import styles from "@/styles/loading.module.less"

function getLoadingImage(el) {
  return el.querySelector('img[data-role="loading"]')
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
      if (!currentImg) {
        const img = createLoadingImage()
        el.appendChild(img)
      }
    }
  },
  // inserted() {},
  update(el, binding) {
    const currentImg = getLoadingImage(el)
    if (!currentImg && binding.value) {
      const img = createLoadingImage()
      el.appendChild(img)
    } else if (currentImg && !binding.value) {
      currentImg.remove()
    }
  },
}
