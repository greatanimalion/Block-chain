// 运行时配置

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://umijs.org/docs/api/runtime-config#getinitialstate
import logo from './assets/logo.png';
// app.ts
import { RuntimeAntdConfig } from 'umi';
import { theme } from 'antd';
import RightContentRender from './components/layout/RightContentRender';

type RuntimeAntdConfig = (memo: any) => any;
export const antd: RuntimeAntdConfig = (memo:any) => {
  memo.theme ??= {};
  memo.theme.algorithm = theme.defaultAlgorithm; // 配置 antd5 的预设 dark 算法

  memo.appConfig = {
    message: {
      // 配置 message 最大显示数，超过限制时，最早的消息会被自动关闭
      maxCount: 3,
    }
  }

  return memo;
};


export async function getInitialState(): Promise<{ name: string }> {  
  return { name: '农产品溯源' };
}

export const layout = () => {
  return {
    logo: logo,
    rightContentRender: () => <RightContentRender />,
    // footerRender: () =><h1>111</h1>,
    menu: {
      locale: false,
    },
  };
};
