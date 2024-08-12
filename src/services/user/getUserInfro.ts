import {request} from "@umijs/max"
import {res} from "@/types/respond"
//登录
export  async function login(account: any,password: any) {
  console.log('getUserInfo', account, password)
  return request('/api/user', {
    method: 'POST',
    data: {
        account,
        password
    },
  });
}
//获取用户信息
export  async function getUserInfo(){
  return request<res<API.UserInfo>>('/api/user/info',{
    method: 'GET'
  });
}