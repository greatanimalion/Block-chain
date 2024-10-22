import { SunOutlined } from "@ant-design/icons";
import { useAntdConfigSetter } from "@umijs/max";
import { MappingAlgorithm, theme, Tooltip } from "antd";
import { getLocalStorage,setLocalStorage } from "@/utils/clientStrore";

export default function ToggleTheme() {
    const setAntdConfig = useAntdConfigSetter();
    const { darkAlgorithm, defaultAlgorithm } = theme;
    const themeValue=getLocalStorage('theme')||"light";
    
    return <>
        <Tooltip placement="bottom" title={'主题切换'} >
            <SunOutlined onClick={() => {
                setAntdConfig({
                    theme: {
                      algorithm: [
                        themeValue=='dark' ? darkAlgorithm : defaultAlgorithm,
                      ],
                    },
                  });
                  setLocalStorage('theme',themeValue=='dark'?'light':'dark');
            }} style={{ fontSize: 24, cursor: 'pointer', margin: 5, color:themeValue=='dark'?'#000000':'#1890ff'}} />
        </Tooltip>
    </>
}