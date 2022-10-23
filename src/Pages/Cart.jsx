import {useEffect,useState} from 'react';
import {Link} from 'react-router-dom';

function Cart(){
const [arr,setArr] = useState([]);
const [total,setTotal] = useState(0);
const [count,setCount] = useState(0)

useEffect(()=>{
    document.title = 'Shopify - Cart'
    fetch('https://mock-server-yf9f.onrender.com/cart').then((res)=>{
        return res.json();
    })
    .then((res)=>{
        setArr(res)
        const sum = res.reduce((partialSum, a) => partialSum + a.price, 0);
        setTotal(sum)
    })
},[count])


  function DeleteProd(prodid){
    fetch(`https://mock-server-yf9f.onrender.com/cart/${prodid}`,{
        method:'DELETE',
        headers:{
            'Content-Type':'Application/json'
        }
    })
    setCount(count+1)

  


  }
const handleOrder = ()=>{

     alert('Your Order Request Has Been Done')

   
}
return <div className='cart-div-1'>
    <h1>Your Cart</h1>
      <div className="cart">
      {arr.map((prod)=>{
                        return <div key={prod.id} className='prod2'>
                            <img src={prod.image} alt="prod-img" />
                             <h3>{prod.title}</h3>
                             <h6>Price : {prod.price}</h6>
                             <button className='del' onClick={()=>DeleteProd(prod.id)}>Delete</button>
                        </div>
                     })}
      </div>

    
      {
        total>0?<div className='amount'>
        <div>
            <h5>
            Total :  {total} ₹
            </h5>
        </div>

        <div>
            <button onClick={handleOrder}>
                <Link to='/product'>
                <h5>
                Confirm

                </h5>
                </Link>
            
            </button>
        </div>

      </div>:null

      }
     

      </div>

}

export default Cart;