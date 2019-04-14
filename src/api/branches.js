import request from '@/utils/request'

export function fetchBranches() {
  return request({
    url: '/branches/list',
    method: 'get'
  })
}
