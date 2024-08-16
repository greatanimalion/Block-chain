declare module 'umi';
declare module 'mockjs';
declare module '@ant-design/charts';
declare namespace API {
   export type UserInfo={
        id?: number;
        name: string;
        password?: string;
        roles: string;
    }
    export type Goods={
        id: number;
        name: string;
        value: number;
        type: string;
        time: string;
      }
}