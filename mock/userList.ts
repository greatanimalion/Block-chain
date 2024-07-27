const users = [
  { id: 0, name: 'Umi', nickName: 'U', gender: '男' },
  { id: 1, name: 'Fish', nickName: 'B', gender: '女' },
  { id: 2, name: 'Jack', nickName: 'J', gender: '男' },
  { id: 3, name: 'Tom', nickName: 'T', gender: '男' },
  { id: 4, name: 'Jane', nickName: 'J', gender: '女' },
  { id: 5, name: 'Fish', nickName: 'B', gender: '女' },
  { id: 6, name: 'Jack', nickName: 'J', gender: '男' },
  { id: 7, name: 'Tom', nickName: 'T', gender: '男' },
  { id: 8, name: 'Jane', nickName: 'J', gender: '女' },
  { id: 9, name: 'Umi', nickName: 'U', gender: '男' },
];

export default {
  'GET /api/userList': (req: any, res: any) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json({
      success: true,
      data: { list: users },
      errorCode: 0,
    });
  },
  'DELETE /api/user/': (req: any, res: any) => {
    res.json({
      success: true,
      errorCode: 0,
    });
  },
};
