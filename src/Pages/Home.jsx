import {useState} from 'react';
import { Link } from 'react-router-dom';
let arr = [

'https://cdn.shopify.com/shopifycloud/brochure/assets/home/desktop-refresh/store-builder-desktop-small-a514a51da7a2a9e645ccceb479538f326c490bc8d36b0555b3248d7e4c579c8f.png',
'https://cdn.shopify.com/shopifycloud/brochure/assets/home/desktop-refresh/sense-desktop-small-b78e5eb27373e527dba35b147124b432bbbaf54fb2c712fba5ba5f31d2209174.png',
'https://cdn.shopify.com/shopifycloud/brochure/assets/home/desktop-refresh/crave-desktop-small-b7b589ca7d4c48946538c8a4d1ff95b77cb648b605e14b548224d1b5fb9832a3.png',
'https://cdn.shopify.com/shopifycloud/brochure/assets/home/desktop-refresh/sense-desktop-small-b78e5eb27373e527dba35b147124b432bbbaf54fb2c712fba5ba5f31d2209174.png',
'https://cdn.shopify.com/shopifycloud/brochure/assets/home/desktop-refresh/app-store-desktop-small-174232c50e27da8ef165d480bf85e1116d855852334b13c42076e78f30d12e24.png',

]
function Home(){
    const [src,setSrc] = useState(arr[0])
const [count,setCount] = useState(0)
   
     function get(){
        if(count===4){
            setCount(0)
        }
        else{
            setCount(count+1)
        }
 
        setSrc(arr[count])

     }

     setInterval(get,3000)

    return <>
     <div className="home1">
        <div>
            <h1>If you can dream it, you</h1>
            <h1>can sell it with Shopify</h1>
            <h3>Build your business here. Take it anywhere.</h3>
            <input type="text" placeholder="Enter your email address"/><br></br>
            <button className="cont_btn">
                <Link to='/login'>
                Start free trial
                </Link>
              </button>
            <p>Try Shopify free for 14 days, no credit card required. By entering your email, you agree to receive marketing emails from Shopify.</p>
        </div>
        <img className='slideImg' src='https://cdn.shopify.com/shopifycloud/brochure/assets/home/desktop-refresh/hero-small-fb5c6e3ede460f1cc7c19b5066f086cf59a5f68ea42ac778602a8486bf66be3f.png' alt='img'/>
    </div>
    <h1>
    Discover why millions of entrepreneurs choose Shopify to build their business—from Hello World to IPO.
    </h1>
  <img className='slide_image' src={src} alt="slide" />

  <div className='homeGrid'>
    <div>
        <h3>Store builder</h3>
        <h6>
        Bring your vision to life with our easy-to-use store creator. No coding expertise required—just your next big idea.
        </h6>
        <div className='arrow'>
        <h5 className='greenarrow'>Build the brand you want</h5>
        <h5>➔</h5>
       </div>
    </div>
    <div>
        <h3>Themes</h3>
        <h6>Select from hundreds of customizable templates crafted by a community of world-class designers.</h6>
        <div className='arrow'>
        <h5 className='greenarrow'>Explore more Themes</h5>
        <h5>➔</h5>
       </div>
       </div>
    <div>
        <h3>App store</h3>
        <h6>Add more features and functionality to your online store with app extensions from trusted Shopify partners.</h6>
        <div className='arrow'>
        <h5 className='greenarrow'>There’s an app for that</h5>
        <h5>➔</h5>
        </div>
    </div>
  </div>
  </>
}

export default Home;