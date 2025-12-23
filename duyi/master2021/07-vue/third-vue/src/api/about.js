import request from "@/utils/request"

export function getAbout() {
  return request.get("/api/about")
}
