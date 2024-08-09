import {request} from "@umijs/max"
export  async function getUserInfo(account: any,password: any) {

  console.log('getUserInfo', account, password)
  return request('/api/user', {
    method: 'POST',
    data: {
        account,
        password
    },
  });
}