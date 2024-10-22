import { Link } from "@umijs/max";
import server from "@/services/demo/index";
import { ActionType, FooterToolbar, PageContainer, ProDescriptionsItemProps, ProTable, WaterMark } from "@ant-design/pro-components";
import { Button, message } from "antd";
import { useRef, useState } from "react";
import { useModel } from "@umijs/max";
export default function AllGoods() {
    const columns: (ProDescriptionsItemProps<API.Goods>)[] = [
        {
            title: 'id',
            dataIndex: 'id',
            key: 'id',
            formItemProps: {
                rules: [
                  {
                    required: true,
                    message: '名称为必填项',
                  },
                ],
              },
        }, {
            title: '名称',
            dataIndex: 'name',
            valueType: 'text',
        }, {
            title: '价格',
            dataIndex: 'value',
            hideInSearch: true,
            valueType: 'money',
        }, {
            title: '类型',
            dataIndex: 'type',
            hideInSearch: true,
        }, {
            title: '时间',
            dataIndex: 'time',
            hideInSearch: true,
        },
        {
            title: '操作',
            valueType: 'option',
            render: (text, record, _, action) => [
                <Link to={`/goods/all/detail/${record.id}`}>详情</Link>
            ],
        }
    ]
    const actionRef = useRef<ActionType>();
    const [selectedRowsState, setSelectedRows] = useState<API.Goods[]>([]);
    const [selectedRows, setSelectRows] = useState<API.Goods[]>([]);
    function handleRemove(selectedRowsState: API.Goods[]) {
        const hide = message.loading('正在删除');
        if (!selectedRows) return true;
        try {
           setTimeout(hide,1000);
            message.success('删除成功，即将刷新');
            return true;
        } catch (error) {
            hide();
            message.error('删除失败，请重试');
        }
    }
    const userInfo =useModel('@@initialState').initialState!
    return (
        <PageContainer>
              <WaterMark content={userInfo.name} >
                  <ProTable<API.Goods>
                headerTitle="查询表格"
                actionRef={actionRef}
                rowKey='id'
                search={{
                    defaultCollapsed: false,
                    labelWidth: 120,
                }}
                toolBarRender={() => [
                    <Button
                        key="1"
                        type="primary"
                        onClick={() => { }}
                    >
                        新建
                    </Button>,
                ]}
                // @ts-ignore
                request={async (params, sort, filter) => {
                    const { data, success } = await server.goods();
                    return {
                        data: data?.list || [],
                        success,
                    };
                }}
                //@ts-ignore
                columns={columns}
                rowSelection={{
                    onChange: (_, selectedRows) => setSelectedRows(selectedRows),
                }}
            />
              </WaterMark>
          
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
                        onClick={async () => {
                            await handleRemove(selectedRowsState);
                            setSelectedRows([]);
                            // actionRef.current?.reloadAndRest?.();
                        }}
                    >
                        批量删除
                    </Button>
                    <Button type="primary">批量审批</Button>
                </FooterToolbar>
            )}
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
                        onClick={async () => {
                            await handleRemove(selectedRowsState);
                            setSelectedRows([]);
                            actionRef.current?.reloadAndRest?.();
                        }}
                    >
                        批量删除
                    </Button>
                    <Button type="primary">批量审批</Button>
                </FooterToolbar>
            )}
        </PageContainer>

    )
}