import styles from './index.module.css'
import { login } from '@/services/user/getUserInfro';
import { useModel } from '@umijs/max';
import { message } from 'antd';
import { useState } from "react";

export default function Login() {
  const {initialState,setInitialState}=useModel('@@initialState')
  const [account,setCount] = useState("lb")
  const [password,setPassword] = useState("123")
  const loginA = (e: any) => {
    login(account, password).then(async res => {
      console.log(res)
      if (res.code === 200) {
       await setInitialState(res.data)
        window.location.href = "/home"
      }
      else if (res.code === 400)message.error("用户名或密码错误")
    })
  }
  return (
    <div className={styles.login} style={{zIndex:-1}}>
      <div className={styles.loginBox} >
        <h2 >Login</h2>
        <div>
          <div className={styles.item}>
            <input type="text" required id="account" value={account} onChange={(e) => { setCount(e.target.value) }} />
            <label htmlFor="account">用户名</label>
          </div>
          <div className={styles.item}>
            <input type="password" required id="password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
            <label htmlFor="password">密码</label>
          </div>
          <button className={styles.btn} type="submit" onClick={loginA}>登录
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </div>
  )
}