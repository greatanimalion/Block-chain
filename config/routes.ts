export default [
    {
        path: '/',
        redirect: '/login',
    },
    {
        name: '登录',
        path: '/login',
        component: './Login',
        layout: false,
    },
    {
        name: '首页',
        path: '/home',
        component: './Home',
        icon: 'home',
    },
    // {
    //     name: '特殊工艺',
    //     path: '/access',
    //     component: './Access',
    //     access: 'super',
    //     icon: 'lock',
    // },
    // {
    //     name: '货物示例',
    //     path: '/table',
    //     component: './Table',
    //     icon: 'LineChart',
    // },
    // {
    //     name: ' 商品管理',
    //     path: '/goods',
    //     icon: 'table',
    //     routes: [
    //         {
    //             path: '/goods',
    //             redirect: '/goods/all',
    //         },
    //         {
    //             name: '全部商品',
    //             path: '/goods/all',
    //             routes: [
    //                 {
    //                     path: '/goods/all',
    //                     component: './Goods/AllGoods',
    //                 },
    //                 {
    //                     component: './Goods/Detail',
    //                     path: '/goods/all/detail/:id',
    //                     name: '商品详情',
    //                     hideInMenu: true,
    //                 }
    //             ]
    //         },
    //         {
    //             name: '溯源商品',
    //             path: '/goods/address',
    //             component: './Goods/Map',
    //         },
    //     ],
    // },
    {
        name: ' 包装管理',
        path: '/packageManage',
        icon: 'table',
        routes: [

            {
                name: '包装扫描',
                path: '/packageManage/scan',
                component: './PackageManage/scan',
            },
            {
                name: '包装打印',
                path: '/packageManage/print',
                component: './PackageManage/print',

            },
        ],
    },
    // {
    //     name: '用户管理',
    //     path: '/user',
    //     component: './Users',
    //     icon: 'user',
    // },
    {
        name: '404',
        path: '/*',
        component: './404',
        layout: false
    },
]