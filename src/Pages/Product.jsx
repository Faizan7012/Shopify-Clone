import {useState, useEffect} from 'react';
import {useSearchParams,Link} from 'react-router-dom';

function getCurrentPageUrl(value){
value = Number(value);
if(typeof(value)==='number' && value <1){
    value = 1;
}
if(!value){
    value = 1;
}

return value;
}

function getUrl(url,sort,orderBy,filterBy){
    if(sort && filterBy && orderBy){
        url = `${url}&_sort=${sort}&_order=${orderBy}&category=${filterBy}`;
    }
    else if (sort && orderBy){
        url = `${url}&_sort=${sort}&_order=${orderBy}`;
    }
    else if(filterBy){
        url = `${url}&category=${filterBy}`
    }

    return url;
}

function Product(){
    const [searchParams,setSearchParams] = useSearchParams();
    const [btns,setBtns] = useState(false)
    const [carts,setCarts] = useState('')
    const [data,setData] = useState([]);
    const [count,setCount] = useState(0)
    const [page,setPage] = useState(getCurrentPageUrl(searchParams.get('page'))||1);
    const [orderBy,setOrderBy] = useState('');
    const [filterBy,setFilterBy] = useState('');
    const limit = 6;
    const sort = 'price';

    useEffect(()=>{
        document.title = 'Shopify - Product'
   let apiUrl = getUrl(`https://mock-server-yf9f.onrender.com/products?_page=${page}&_limit=${limit}`,sort,orderBy,filterBy);
   fetch(apiUrl).then((res)=>{
    setCount(Number(res.headers.get('X-Total-Count')));
    return res.json();
   })

   .then((res)=>{
    setData(res);
   })

   setBtns(false)

    },[page,orderBy,filterBy])

    useEffect(()=>{
        let paramObj = { page };
        if(orderBy){
            paramObj.orderBy = orderBy;
        }
        if(filterBy){
            paramObj.filterBy = filterBy;
        }
    setSearchParams(paramObj);
    },[page,orderBy,filterBy])

 function postData(prod){
        fetch('https://mock-server-yf9f.onrender.com/cart',{
            method:'POST',
            body:JSON.stringify(prod),
            headers:{
                'Content-Type':'Application/json',
            }
           })
        alert('Added successfully')
          

 }


    return (<>
    <h5 className='btns' onClick={()=>setBtns(!btns)}>
        Filter & Sort
    </h5>
        <div className='prodHome'>
            <div className='prodDiv'>
                <div style={{left:btns?'0':'-100%'}} className='sort_btn'>
                    <h2>Sort & Filter</h2>
                    <button onClick={()=> setOrderBy("asc")}>Asc Price</button>
                    <button  onClick={()=> setOrderBy("desc")}>Desc Price</button>
                    <button  onClick={()=> setFilterBy("electronics")}>Electronic</button>
                    <button onClick={()=> setFilterBy("men's clothing")}>Men Clothes</button>
                    <button onClick={()=> setFilterBy("women's clothing")}>Women Clothes</button>
                    <button onClick={()=> setFilterBy("jewelery")}>Jewellery</button>
                    <button onClick={()=>{
                        setFilterBy('')
                        setOrderBy('')
                    }}>Reset</button>
                </div>
                <div className='prodDiv'>
                     {data?.map((prod)=>{
                        return <div key={prod.id} className='prod'>
                            <img src={prod.image} alt="prod-img" />
                             <h3>{prod.title}</h3>
                             <h6>Price : {prod.price}</h6>
                             <button className='link'>
                             <Link className='Link1' to={`/product/${prod.id}`}>More Detail</Link>
                             </button>
                             <button className='link2' onClick={()=>postData(prod)}>Add To Cart</button>
                        </div>
                     })}
                </div>
            </div>
        </div>
        <div className='pagi'>
        <button disabled={page===1} onClick={()=>setPage(page-1)}>Prev</button>
         <button>{page}</button>
         <button disabled={page === Math.ceil(count/limit)} onClick={()=>setPage(page+1)}>Next</button>
        </div>
         </>
    )
}

export default Product;