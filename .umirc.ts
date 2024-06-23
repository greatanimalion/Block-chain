import { defineConfig } from '@umijs/max';
const logo =
  'https://s.cn.bing.net/th?id=OJ.WNm0NiYXMw3UXA&qlt=80&o=6&dpr=1.8&pid=SANGAM';
export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  favicons: [logo],

  /**
   * @name 开启 hash 模式
   * @description 让 build 之后的产物包含 hash 后缀。通常用于增量发布和避免浏览器加载缓存。
   * @doc https://umijs.org/docs/api/config#hash
   */
  hash: true,
  layout: {
    title: '农产品溯源管理系统',
  },
  alias: {
    '@': './src',
  },
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
    },
    {
      name: '权限演示',
      path: '/access',
      component: './Access',
    },
    {
      name: ' CRUD 示例',
      path: '/table',
      component: './Table',
    },
  ],
  npmClient: 'pnpm',
});
