export default {
    "POST /api/user": (req: any, res: any) => {
        const { account, password } = req.body;
        console.log(req.body);
        if (account === "lb" && password === "123") {
            res.json({
                code: 200,
                message: "success",
                data: {
                    name: "admin",
                    roles: "admin"
                }
            })
        } else {
            res.json({
                code: 400,
                message: "账号错误",
            })
        }

    },
    "GET /api/user/info": (req: any, res: any) => {
        res.json({
            code: 200,
            message: "success",
            data: {
                name: "LB",
                roles: "admin"
            }
        })
    }
}