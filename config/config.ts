import { defineConfig } from '@umijs/max';
const logo = 'https://tse2-mm.cn.bing.net/th/id/OIP-C.JwBgHVTgKmmRE-POFJZv5QHaEE?rs=1&pid=ImgDetMain';
import routes from './routes';
export default defineConfig({
  antd: {
    // compact: true,紧凑主题
    configProvider: {},
    dark: false,
  },
  access: {},
  model: {},
  initialState: {},
  request: {},
  favicons: [logo],
  theme:{
    '@primary-color': '#1890ff',
  },
  /**
   * @name 开启 hash 模式
   * @description 让 build 之后的产物包含 hash 后缀。通常用于增量发布和避免浏览器加载缓存。
   * @doc https://umijs.org/docs/api/config#hash
   */
  hash: true,
  layout: {
    title: 'MES管理系统',
    locale: false, // 默认开启，如无需菜单国际化可关闭
  },
  alias: {
    '@': './src',
  },
  routes:routes,
  npmClient: 'pnpm',
});
