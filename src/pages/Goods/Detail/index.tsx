import { PageContainer } from "@ant-design/pro-components";
import { Card, Collapse, CollapseProps } from "antd";

function DefineCard() {
  return (
    <Card title="产品信息" bordered={false} style={{ width: 300, margin: 10 }}>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
  )
}


const items: CollapseProps['items'] = [
  {
    key: '1',
    label: ' 农产品信息',
    children: <>
      <p>产品名称</p>
      <p>产品类型</p>
      <p>产品规格</p>
      <p>产品品牌</p>
      <p>产品价格</p>
    </>,
  },
  {
    key: '2',
    label: '工厂信息',
    children: <>
      <p>工厂信息: 北京颐和园</p>
      <p>工厂地址: 北京市海淀区西二旗</p>
      <p>工厂联系方式: 13811111111</p>
    </>,
  },
  {
    key: '3',
    label: '物流轨迹',
    children: <>
    <p>当前地点：北京</p>
      <a>查看详情</a>
      </>,
  },

];
export default function Detail() {

  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  return <PageContainer>
    <Collapse items={items} defaultActiveKey={['1']} onChange={onChange} />
  </PageContainer>;
}