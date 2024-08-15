import { Link, Outlet } from "@umijs/max";

export default function AllGoods() {
    return (
        <div>
            <h1>All Goods</h1>
            <Link to="/goods/all/detail/1">Go to list page</Link>
            <Outlet></Outlet>
        </div>
    )
}