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
                    avatar: "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
                    roles: ["admin"]
                }
            })
        } else {
            res.json({
                code: 400,
                message: "账号错误",
            })
        }

    }
}