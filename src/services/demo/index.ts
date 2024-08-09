/* eslint-disable */
// 该文件由 OneAPI 自动生成，请勿手动修改！
import { request } from '@umijs/max';
async function goods() {
  
    return request<API.Result_PageInfo_UserInfo__>(`/api/tags`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      });
}
import * as UserController from './UserController';
import * as UserList from './UserList';
export default {
  UserController,
  UserList,
  goods
};
