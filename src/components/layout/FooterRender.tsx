import { GithubOutlined } from "@ant-design/icons";
import { DefaultFooter } from "@ant-design/pro-components";

export default function FooterRender() {
    return (<>
            <DefaultFooter
                copyright="开发阶段"
                links={[
                    {
                        key: '区块链',
                        title: 'mes',
                        href: 'https://github.com/greatanimalion/Block-chain',
                        blankTarget: true,
                    },
                    {
                        key: 'github',
                        title: <GithubOutlined />,
                        href: 'https://github.com/greatanimalion/Block-chain',
                        blankTarget: true,
                    },
                 
                ]}
            />

    </>)
};