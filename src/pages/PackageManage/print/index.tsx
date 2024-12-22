import { ProCard } from '@ant-design/pro-components';
import { List } from 'antd';
import { useState } from 'react';

const data = [
  {
      title: new Date().getTime(),
      content:'后端返回的数据1'
  },
  {
      title: new Date().getTime(),

      content:'后端返回的数据2'
  },
  {
      title: new Date().getTime(),

      content:'后端返回的数据3'
  },
  {
      title: new Date().getTime(),

      content:'后端返回的数据4'
  },
  {
    title: new Date().getTime(),

    content:'后端返回的数据3'
},
{
    title: new Date().getTime(),

    content:'后端返回的数据4'
},
{
  title: new Date().getTime(),

  content:'后端返回的数据3'
},
{
  title: new Date().getTime(),

  content:'后端返回的数据4'
},
];
export default () => {
  const [responsive, setResponsive] = useState(false);

  return (
    <ProCard
      title="包装补印"
      extra={new Date().toLocaleString()}
      bordered
      headerBordered
      split={responsive ? 'horizontal' : 'vertical'}
    >
      <ProCard split="horizontal">
        <ProCard split="horizontal">
          <ProCard split="vertical">
            <ProCard title="条码">12/56</ProCard>
            <ProCard title="编号">zcxdfqwqe</ProCard>
          </ProCard>
          <ProCard split={responsive ? 'horizontal' : 'vertical'}>
            <ProCard title="产品名称">数控</ProCard>
            <ProCard title="已扫码数量">234</ProCard>
            <ProCard title="需扫码数量">345</ProCard>
          </ProCard>
        </ProCard>
        <ProCard title="扫描结果">
        <svg style={{ width: '100%' }} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7911" width="128" height="128"><path d="M512 97.52381c228.912762 0 414.47619 185.563429 414.47619 414.47619s-185.563429 414.47619-414.47619 414.47619S97.52381 740.912762 97.52381 512 283.087238 97.52381 512 97.52381z m129.29219 233.447619l-129.267809 129.29219-129.316571-129.29219-51.736381 51.736381 129.316571 129.267809-129.316571 129.316571 51.736381 51.736381L512 563.687619l129.29219 129.316571 51.736381-51.73638L563.687619 512l129.316571-129.29219-51.73638-51.736381z" p-id="7912" fill="#9b1807"></path></svg>
        </ProCard>
      </ProCard>
      <ProCard title="编码信息">
          <List
                    itemLayout="horizontal"
                    dataSource={data}
                    renderItem={(item, index) => (
                        <List.Item>
                            <List.Item.Meta
                                description={'标识:'+item.title+"\t返回数据:"+item.content}
                            />
                        </List.Item>
                    )}
                />
      </ProCard>
    </ProCard>
  );
};