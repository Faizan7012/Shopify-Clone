function Signup({username,userpass,handleChange2}){


    return (
           <div>
            <h1>Sign Up</h1>
           <input name="name" type="text" onChange={handleChange2} value={username}  placeholder="Name"/>
           <input name='password' type="password" onChange={handleChange2} value={userpass}  placeholder="Password"/>
           </div>
       )
   }


   export default Signup;