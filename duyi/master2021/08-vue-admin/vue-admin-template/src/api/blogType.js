import request from '@/utils/request'

export function getBlogType(params) {
  return request({
    url: '/api/blogtype',
    method: 'get',
    params,
  })
}

export function delBlogType(id) {
  return request({
    url: '/api/blogtype/' + id,
    method: 'delete',
  })
}

export function addBlogType(data) {
  return request({
    url: '/api/blogtype',
    method: 'post',
    data,
  })
}

export function editBlogType(data) {
  return request({
    url: '/api/blogtype/' + data.id,
    method: 'put',
    data,
  })
}
