import { SettingOutlined, UserOutlined } from '@ant-design/icons';
import { useModel } from '@umijs/max';
import { Layout, Space, theme, Switch, Popover, Divider, Avatar } from 'antd';
import { useAntdConfigSetter } from 'umi';
const { darkAlgorithm, defaultAlgorithm } = theme;

function ConfigSetter() {
  
  const setAntdConfig = useAntdConfigSetter();
  // const antdConfig = useAntdConfig();
  return (
    <Layout>
      <Space style={{ textAlign: "center" }}>
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
      {/* <Divider /> */}
      <div style={{ margin: "20 0", cursor: "pointer",color:'red' }}>退出登录</div>
    </Layout>
  );
}
function content() {
  const user=useModel("@@initialState")
  return <>
    <div style={{ textAlign: "center",margin: "10px 0" }}>
      <Avatar size="large" icon={<UserOutlined />} />
    </div>
    <div style={{ textAlign: "center",margin: "10px 0" }}>当前用户:{user.initialState?.name}</div>
    <ConfigSetter></ConfigSetter>
  </>
}
export default function Settings() {
  return <>
    <Popover placement="rightBottom" title={"设置"} content={content}>
      <SettingOutlined style={{ fontSize: 24, cursor: 'pointer', margin: 10 }} />
    </Popover>

    {/* <ConfigSetter></ConfigSetter> */}
  </>
}