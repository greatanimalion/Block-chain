import services from '@/services/demo';
import {
  ActionType,
  FooterToolbar,
  PageContainer,
  ProDescriptionsItemProps,
  ProTable,
} from '@ant-design/pro-components';
import { Button, Divider, message } from 'antd';
import React, { useRef, useState } from 'react';
import { getUserList } from '@/services/demo/UserList';

const TableList: React.FC<unknown> = () => {

  const actionRef = useRef<ActionType>();
  const [selectedRowsState, setSelectedRows] = useState<API.UserInfo[]>([]);
  const columns: (ProDescriptionsItemProps<API.UserInfo>&{tip?: string})[] = [
    {
      title: '工号',
      dataIndex: 'id',
      tip: '工号是唯一',
      formItemProps: {
        rules: [
          {
            required: true,
            message: '工号为必填项',
          },
        ],
      },
    },
    {
      title: '名称',
      dataIndex: 'name',
      valueType: 'text',
    },
    {
      title: '性别',
      dataIndex: 'gender',
      hideInForm: true,
      valueEnum: {
        0: { text: '男', status: 'MALE' },
        1: { text: '女', status: 'FEMALE' },
      },
    },
    {
      title: '操作',
      dataIndex: 'option',
      valueType: 'option',
      render: (_, record) => (
        <>
        <a>
          详情
        </a>
        <Divider type="vertical" />
          <a
          >
            修改
          </a>
          <Divider type="vertical" />
          <a style={{ 'color':'red'}}>删除</a>
        </>
      ),
    },
  ];

  return (
    <PageContainer
      header={{
        title: '用户管理',
      }}
    >
      <ProTable<API.UserInfo>
        headerTitle="查询名单"
        actionRef={actionRef}
        rowKey="id"
        search={{
          labelWidth: 120,
        }}
        toolBarRender={() => [
          <Button key="1" type="primary">添加</Button>,
        ]}
        request={async (params, sorter, filter) => {
          const { data, success } = await getUserList();
          return {
            data: data?.list || [],
            success,
            tatal: data?.total || 0,
          };
        }}
        columns={columns}
        rowSelection={{
          onChange: (_, selectedRows) => setSelectedRows(selectedRows),
        }}
      />
      {selectedRowsState?.length > 0 && (
        <FooterToolbar
          extra={
            <div>
              已选择{' '}
              <a style={{ fontWeight: 600 }}>{selectedRowsState.length}</a>{' '}
              项&nbsp;&nbsp;
            </div>
          }
        >
          <Button

            danger
          >
            批量删除
          </Button>
        </FooterToolbar>
      )}
    </PageContainer>
  );
};

export default TableList;
