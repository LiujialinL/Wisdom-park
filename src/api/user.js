import http from '../utils/request'
export default {
  login(params) {
    return http({
      url: '/users/login',
      method: 'post',
      data: params
    })
  },
  getPermissionList() {
    return http({
      url: '/users/getPermissionList',
      method: 'get',
      data: {}
    })
  }
}
