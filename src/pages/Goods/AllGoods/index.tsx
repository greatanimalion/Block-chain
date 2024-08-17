import { Link } from "@umijs/max";
import server from "@/services/demo/index";
import { ActionType, FooterToolbar, PageContainer, ProDescriptionsItemProps, ProTable } from "@ant-design/pro-components";
import { Button, Drawer, message } from "antd";
import { useRef, useState } from "react";
export default function AllGoods() {
    const columns: (ProDescriptionsItemProps<API.Goods>)[] = [
        {
            title: '昵称',
            dataIndex: 'id',
            valueType: 'text',
        }, {
            title: '名称',
            dataIndex: 'name',
            valueType: 'text',
        }, {
            title: '价格',
            dataIndex: 'value',
            valueType: 'money',
        }, {
            title: '类型',
            dataIndex: 'type',
        }, {
            title: '时间',
            dataIndex: 'time',
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
    return (
        <PageContainer>
            {/* <div>
                <h1>All Goods</h1>
                <Link to="/goods/all/detail/1">Go to list page</Link>
            </div> */}
            <ProTable<API.Goods>
                headerTitle="查询表格"
                actionRef={actionRef}
                rowKey="id"
                search={{
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
                request={async (params, sorter, filter) => {
                    const { data, success } = await server.goods();
                    return {
                        data: data?.list || [],
                        success,
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