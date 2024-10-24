import { defineConfig } from '@umijs/max';
const logo = 'https://s.cn.bing.net/th?id=OJ.WNm0NiYXMw3UXA&qlt=80&o=6&dpr=1.8&pid=SANGAM';
import routes from './routes';
export default defineConfig({
  antd: {
    // compact: true,紧凑主题
    configProvider: {}
  },
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
    locale: false, // 默认开启，如无需菜单国际化可关闭
  },
  alias: {
    '@': './src',
  },
  routes:routes,
  npmClient: 'pnpm',
});
