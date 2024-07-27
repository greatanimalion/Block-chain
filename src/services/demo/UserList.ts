import { request } from '@umijs/max';
export async function getUserList() {
    return request<API.Result_PageInfo_UserInfo__>(`/api/userList`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      });
}