function Login({username,userpass,handleChange}){


 return (
        <div className="login-div-1">
            <h1>Login</h1>
        <input name='name' type="text" value={username} onChange={handleChange}  placeholder="Name"/>
        <input name='password' type="password" value={userpass} onChange={handleChange}  placeholder="Password"/>
        </div>
    )
}

export default Login;