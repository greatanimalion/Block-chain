import { SunOutlined } from "@ant-design/icons";
import { useAntdConfigSetter} from "@umijs/max";
import { theme, Tooltip } from "antd";
import { getLocalStorage,setLocalStorage } from "@/utils/clientStrore";
import { useEffect, useState } from "react";

export default function ToggleTheme() {
    const setAntdConfig = useAntdConfigSetter();
    const { darkAlgorithm, defaultAlgorithm } = theme;
    const themeValue=getLocalStorage('theme')||false;
    const [checked, setChecked] = useState(themeValue);
    useEffect(() => {
      setAntdConfig({
          theme: {
            algorithm: [
              checked ?  darkAlgorithm: defaultAlgorithm,
            ],
          },
      })
      setLocalStorage('theme',checked);
    },[checked])
    return <>
        <Tooltip placement="bottom" title={'主题切换'} >
            <SunOutlined onClick={() => {
                setChecked(!checked);
            }} style={{ fontSize: 24, cursor: 'pointer', margin: 5, color:checked?'#ffffff':'#1890ff'}} />
        </Tooltip>
    </>
}