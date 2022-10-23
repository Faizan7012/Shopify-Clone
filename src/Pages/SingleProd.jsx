import {useParams,Link} from 'react-router-dom';
import {useEffect,useState} from 'react';

function SingleProd(){
  const {id} = useParams();
  const [obj,setObj] = useState({})

  useEffect(()=>{
    document.title = 'Shopify - Product Detail'

    fetch(`https://mock-server-yf9f.onrender.com/products/${id}`).then((res)=>{
        return res.json();
    })
    .then((res)=>{
        setObj(res);
    })
  })


  return <div className='single'>
           <img src={obj.image} alt="img-prod" />
           <h3>{obj.title}</h3>
           <h5>Price : {obj.price}</h5>
            <h6>{obj.description}</h6>
            <button className='link'>
            <Link className='Link1' to='/product'>Go Back</Link>
            </button>
        </div>

}

export default SingleProd;