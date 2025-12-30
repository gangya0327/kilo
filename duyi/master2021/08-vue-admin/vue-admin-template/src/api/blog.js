import request from '@/utils/request'

export function getBlog(params) {
  return request({
    url: '/api/blog',
    method: 'get',
    params,
  })
}

export function getBlogInfo(id) {
  return request({
    url: '/api/blog/' + id,
    method: 'get',
  })
}

export function addBlog(data) {
  return request({
    url: '/api/blog',
    method: 'post',
    data,
  })
}

export function delBlog(id) {
  return request({
    url: '/api/blog/' + id,
    method: 'delete',
  })
}

export function editBlog(data) {
  return request({
    url: '/api/blog/' + data.id,
    method: 'put',
    data,
  })
}
