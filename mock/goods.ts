import mockjs from 'mockjs';
import { Random } from'mockjs';
export default {
  // 使用 mockjs 等三方库
  'GET /api/tags': mockjs.mock({
    data:{
      'list|5': [{ "id|+1": 1,name: '@ctitle(5, 10)', 'value|1-100': 50, 'type|0-2': 1,time:Random.datetime() }],
    }
  }),
};