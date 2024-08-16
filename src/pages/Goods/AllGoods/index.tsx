import { Link, Outlet } from "@umijs/max";
import server from "@/services/demo/index";
import { ProDescriptionsItemProps } from "@ant-design/pro-components";
export default function AllGoods() {
    server.goods().then(res => {
        console.log(res.data)
    })
    const columns:(ProDescriptionsItemProps<API.Goods>)[] = [
        {
            title: '昵称',
            dataIndex: 'id',
            valueType: 'text',
        },
        {
            title: '名称',
            dataIndex: 'name',
            valueType: 'text',
        }
    ]
    return (
        <div>
            <h1>All Goods</h1>
            <Link to="/goods/all/detail/1">Go to list page</Link>
            <Outlet></Outlet>
        </div>
    )
}