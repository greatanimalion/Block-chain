import { Layout, Space, theme, Switch } from 'antd';
import {useAntdConfigSetter } from 'umi';
const { darkAlgorithm, defaultAlgorithm } = theme;

export default function Page() {
  const setAntdConfig = useAntdConfigSetter();
  // const antdConfig = useAntdConfig();
  return (
    <Layout>
      <Space>
        切换主题
        <Switch
          onChange={(data) => {
            // 此配置会与原配置深合并
            setAntdConfig({
              theme: {
                algorithm: [
                  data ? darkAlgorithm : defaultAlgorithm,
                ],
              },
            });
            // or 
            // setAntdConfig((config:any) => {
            //   const algorithm = config.theme!.algorithm as MappingAlgorithm[];
            //   if (algorithm.includes(darkAlgorithm)) {
            //     config.theme!.algorithm = [defaultAlgorithm]
            //   } else {
            //     config.theme!.algorithm = [darkAlgorithm];
            //   }
            //   return config;
            // });
          }}
        ></Switch>
      </Space>
    </Layout>
  );
}