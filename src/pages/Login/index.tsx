import  './index.css'
import serveice from '@/services/demo/index';

declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    text?: string;
  }
}
export default  function Login() {
  const login=(e:any)=>{
    e.preventDefault()
    window.location.href="/home"
  }
serveice.goods().then(res=>{
  console.log(res)
})
  return (
    <div className="login">
    <div className="loginBox" >
        <h2 >Login</h2>
        <form>
            <div className="item">
                <input type="text" required id="account" />
                <label htmlFor="account">用户名</label>
            </div>
            <div className="item">
                <input type="password" required id="password"/>
                <label htmlFor="password">密码</label>
            </div>
            <button className="btn" type="submit" onClick={login}>登录
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