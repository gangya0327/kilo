import request from '@/utils/request'

export function getProject(params) {
  return request({
    url: '/api/project',
    method: 'get',
    params,
  })
}

// export function getProjectInfo(id) {
//   return request({
//     url: '/api/project/' + id,
//     method: 'get',
//   })
// }

export function addProject(data) {
  return request({
    url: '/api/project',
    method: 'post',
    data,
  })
}

export function delProject(id) {
  return request({
    url: '/api/project/' + id,
    method: 'delete',
  })
}

export function editProject(data) {
  return request({
    url: '/api/project/' + data.id,
    method: 'put',
    data,
  })
}
