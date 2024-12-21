// 运行时配置
// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://umijs.org/docs/api/runtime-config#getinitialstate
import logo from './assets/logo.png';
// app.ts
import { RuntimeAntdConfig } from 'umi';
import { theme } from 'antd';
import ToolBar from './components/action/UserAvator';
import FooterRender from './components/layout/FooterRender';
// import { WaterMark } from '@ant-design/pro-components';
import { history } from '@umijs/max';
import {User} from './types/user';
import { getUserInfo } from './services/user/getUserInfro';

//actionsRender
import ToggleTheme from './components/action/ToggleTheme';


type RuntimeAntdConfig = (memo: any) => any;
export const antd: RuntimeAntdConfig = (memo: any) => {
  memo.theme ??= {};
  memo.theme.algorithm = theme.darkAlgorithm; // 配置 antd5 的预设 dark 算法
  memo.appConfig = {
    message: {
      // 配置 message 最大显示数，超过限制时，最早的消息会被自动关闭
      maxCount: 3,
    }
  }
  return memo;
};


// src/app.ts
export async function getInitialState():Promise<User> {
  if(history.location.pathname == '/login'){
    return {
        name: '',
        roles: '',
      } as User
  }
  const user=(await getUserInfo()).data!
  return {
      name: user.name,
      roles: user.roles,
    }
  
}
export const layout = () => {
  return {
    logo: 'https://tse2-mm.cn.bing.net/th/id/OIP-C.JwBgHVTgKmmRE-POFJZv5QHaEE?rs=1&pid=ImgDetMain',
    // favicons:'https://s.cn.bing.net/th?id=OJ.WNm0NiYXMw3UXA&qlt=80&o=6&dpr=1.8&pid=SANGAM',
    actionsRender: () => [<ToggleTheme />,<ToolBar />],
    // avatarProps: {
    //   src: initialState?.currentUser?.avatar,
    //   title: <AvatarName />,
    //   render: (_, avatarChildren) => {
    //     return <AvatarDropdown>{avatarChildren}</AvatarDropdown>;
    //   },
    // },
    // footerRender: () => <FooterRender />,
    // layout: 'side',
    // splitMenus: true,
    // loading:true,
    // menuHeaderRender: undefined,
    menu: {
      locale: true,
      type: 'sub'
    },
    // headerContentRender: () => <h1>headerContentRender</h1>,
    siderWidth:200,
    actionRender: () => <><h1>actionRender</h1></>,
    layout: 'mix',
    contentWidth: 'Fluid',
    fixedHeader: false,
    fixSiderbar: true,
    colorWeak: false,
  };
};
