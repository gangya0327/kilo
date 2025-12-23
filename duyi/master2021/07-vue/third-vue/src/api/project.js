import request from "@/utils/request"

export function getProject() {
  return request.get("/api/project")
}
