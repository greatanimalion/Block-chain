import mockjs from 'mockjs';

export default {
  // 使用 mockjs 等三方库
  'GET /api/tags': mockjs.mock({
    'list|10': [{ "id|+1": 1,name: '@ctitle(5, 10)', 'value|1-100': 50, 'type|0-2': 1 }],
  }),
};