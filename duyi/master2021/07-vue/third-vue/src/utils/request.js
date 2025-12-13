import axios from "axios"
import { showMessage } from "@/utils"

const instance = axios.create()

instance.interceptors.response.use((res) => {
  const { code, data, msg } = res.data
  if (code === 0) {
    return data
  }
  showMessage({
    content: msg || "获取数据失败",
    type: "danger",
  })
  return null
})

export default instance
