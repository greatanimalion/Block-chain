import { CheckOutlined } from '@ant-design/icons';
import { ProFormTextArea } from '@ant-design/pro-components';
import { Col, Input, List, Row, Table } from 'antd';
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
];

export default () => {
    return (<>
        <Row gutter={[8, 8]}>
            <Col span={16}>
                <Row gutter={[16, 16]}>
                    <Col span={16}>
                    <p style={{ margin: '5px 0' }}>条码:</p>
                    <Input disabled />
                    </Col>
                    <Col span={8}>
                    <p style={{ margin: '5px 0' }}>编号:</p>
                    <Input disabled />
                    </Col>
                </Row>
                <Row gutter={[16, 16]}>
                    <Col span={8}>
                        <p style={{ margin: '5px 0' }}>产品名称:</p>
                        <Input disabled />
                    </Col>
                    <Col span={8}>
                        <p style={{ margin: '5px 0' }}>已扫码数量:</p>
                        <Input disabled />
                    </Col>
                    <Col span={8}>
                        <p style={{ margin: '5px 0' }}>需扫码总数:</p>
                        <Input disabled />
                    </Col>
                </Row>
            </Col>
            <Col span={8}>
                <div style={{ margin: '10px 0',transform:'translateY(-10px)'}}>
                    <div>结果显示:</div>
                    <svg style={{ width: '100%' }} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7911" width="104" height="104"><path d="M512 97.52381c228.912762 0 414.47619 185.563429 414.47619 414.47619s-185.563429 414.47619-414.47619 414.47619S97.52381 740.912762 97.52381 512 283.087238 97.52381 512 97.52381z m129.29219 233.447619l-129.267809 129.29219-129.316571-129.29219-51.736381 51.736381 129.316571 129.267809-129.316571 129.316571 51.736381 51.736381L512 563.687619l129.29219 129.316571 51.736381-51.73638L563.687619 512l129.316571-129.29219-51.73638-51.736381z" p-id="7912" fill="#9b1807"></path></svg>
                    {/* <svg style={{ width: '100%' }} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7311" width="128" height="128"><path d="M512 97.52381c228.912762 0 414.47619 185.563429 414.47619 414.47619s-185.563429 414.47619-414.47619 414.47619S97.52381 740.912762 97.52381 512 283.087238 97.52381 512 97.52381z m193.194667 218.331428L447.21981 581.315048l-103.936-107.812572-52.662858 50.761143 156.379429 162.230857 310.662095-319.683047-52.467809-50.956191z" p-id="7312" fill="#0e8316"></path></svg> */}
                </div>
            </Col>
        </Row>
        <p style={{ margin: '5px 0' }}>编码信息:</p>
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


    </>
    );
};