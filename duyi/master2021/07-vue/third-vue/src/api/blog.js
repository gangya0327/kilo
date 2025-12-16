import request from "@/utils/request"

// 获取博客列表
export async function getBlogList({ page = 1, limit = 10, categoryId = -1 }) {
  return await request.get("/api/blog", {
    params: { page, limit, categoryId },
  })
}

// 获取博客分类
export function getBlogCategory() {
  return request.get("/api/blogCategory")
}

// 获取博客详情
export async function getBlog(id) {
  return await request.get(`/api/blog/${id}`)
}

// 添加评论
export async function addComment(commentInfo) {
  return await request.post("/api/comment", commentInfo)
}

// 获取评论列表
export async function getCommentList({ page = 1, limit = 10, blogId }) {
  return await request.get("/api/comment", {
    params: { page, limit, blogId },
  })
}
