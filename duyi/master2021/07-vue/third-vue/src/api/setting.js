import request from "@/utils/request"

export function getSetting() {
  return request.get("/api/setting")
}
