import { SettingOutlined, UserOutlined } from '@ant-design/icons';
import { useModel } from '@umijs/max';
import { Layout, Popover, Avatar } from 'antd';

function content() {
  const user = useModel("@@initialState")
  return <>
    <div style={{ margin: "5px 0" }}>用户&nbsp;:&nbsp;<strong style={{margin: "0 5px"}}>{user.initialState?.name}</strong></div>
    <div style={{ cursor: "pointer", color: 'red' }}>退出登录</div>
  </>
}
export default function Settings() {
  return <>
    <Popover placement="bottom" content={content}>
      <UserOutlined style={{ fontSize: 24, cursor: 'pointer', margin: 5 }} />
    </Popover>

    {/* <ConfigSetter></ConfigSetter> */}
  </>
}