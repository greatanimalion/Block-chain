import './index.css'
import { login } from '@/services/user/getUserInfro';
import { useModel } from '@umijs/max';
import { message } from 'antd';
import { useState } from "react";
declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    text?: string;
  }
}
export default function Login() {
  const {initialState,setInitialState}=useModel('@@initialState')
  const account = useState("")
  const password = useState("")
  const loginA = (e: any) => {
    e.preventDefault()
    login(account[0], password[0]).then(async res => {
      console.log(res)
      if (res.code === 200) {
       await setInitialState(res.data)
        window.location.href = "/home"
      }
      else if (res.code === 400)message.error("用户名或密码错误")
    })
  }

  // serveice.goods().then(res=>{
  //   console.log(res)
  // })
  return (
    <div className="login" style={{zIndex:-1}}>
      <div className="loginBox" >
        <h2 >Login</h2>
        <form>
          <div className="item">
            <input type="text" required id="account" onChange={(e) => { account[1](e.target.value) }} />
            <label htmlFor="account">用户名</label>
          </div>
          <div className="item">
            <input type="password" required id="password" onChange={(e) => { password[1](e.target.value) }} />
            <label htmlFor="password">密码</label>
          </div>
          <button className="btn" type="submit" onClick={loginA}>登录
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </form>
      </div>
    </div>
  )
}