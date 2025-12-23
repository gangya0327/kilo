import request from "@/utils/request"

// 获取留言列表
export function getMessage({ page = 1, limit = 10 }) {
  return request.get("/api/message", { params: { page, limit } })
}

// 添加留言
export function postMessage(message) {
  return request.post("/api/message", message)
}
