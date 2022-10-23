import {useState} from 'react';
import {AuthContext} from '../Context/AuthContext';
import {useContext} from 'react';
import Login from '../Component/Login';
import { Navigate} from 'react-router-dom';
import Signup from '../Component/Signup';

function LoginPage(){
    const [login,setLogin] = useState(false)
    const {isAuth,toggleAuth} = useContext(AuthContext);
    const [arr,setArr] = useState([])

    const [info,setInfo] = useState({
        name:'',
        password:'',
    })
    const [data,setData] = useState({
        name:'',
        password:'',
    })

    const handleChange = (e)=>{
       let value =e.target.value;

       setInfo({ ...info, [e.target.name]: value })
    }
    const handleChange2 = (e)=>{
        let value =e.target.value;
        setData({ ...data, [e.target.name]: value })
    }


  function handleClick(){
  
    for (let i=0;i<arr.length;i++){
        if (arr[i].password===info.password && arr[i].name === info.name){
            alert('Login SuccessFull')
            toggleAuth();
          return <Navigate to='/product'></Navigate>
        }
    }
    alert('Enter Correct Detail Or Signup first')

  }
  
  function handleClick2(){
    setArr([...arr,data]);
    alert('Signup Successfull')
    setData(info.name='',info.password='')
    setLogin(!login)
  }
  if(isAuth){
    return <Navigate to='/product'></Navigate>
  }

    return(
        <div className='auth'>
          {
          login? <div>
          <Login username={info.Loginname} userpass={info.Loginpassword} handleChange={handleChange}/>
          <button className='logbtn' onClick={handleClick}>Login</button>
           </div>: <div>
            <Signup username={data.name} userpass={data.password} handleChange2={handleChange2}/>
             <button className='logbtn' onClick={handleClick2}>SignUp</button>

        </div>

          }

         <center>
         <h6 style={{color:'#f06'}} onClick={()=>setLogin(!login)}>
           
           For {login?'Signup':'Login'} Click here

         </h6>
         </center>
        
       

       
        </div>
     
    )

}

export default LoginPage;