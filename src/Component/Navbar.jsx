import { useState } from "react";
import { Link} from "react-router-dom";

function Navbar(){
    const [isOpen,setIsOpen] = useState(false)
 return (<>
 
 <nav>
        <div>
            <img className="s_logo" src="https://shopify-assets.shopifycdn.com/accounts/production/theme_configuration/logo/oauth_provider/merchant/logo.svg?v=1631025778" alt="" />
        </div>
        <div className="nav">
        <Link to='/'>Home</Link>
        <Link to='/product'>Product</Link>
        <Link to='/contact'>Contact-Us</Link>
        <Link to='/faq'>Faq</Link>
        <Link to='/about'>About-Us</Link>
        <Link to='/login'>Login</Link>
        <Link to='/cart'><i class="fa-solid fa-cart-shopping"></i></Link>
        </div>
    </nav>
    <nav className="nav2">
        <div className="nav_3">
        <div>
            <img className="s_logo" src="https://shopify-assets.shopifycdn.com/accounts/production/theme_configuration/logo/oauth_provider/merchant/logo.svg?v=1631025778" alt="" />
        </div>
        <div className="menu" onClick={()=>setIsOpen(!isOpen)}>
        {

            isOpen?<i class="fa-solid fa-xmark" />: <i class="fa-solid fa-bars" />
        }
        </div>
        </div>
      
      
        <div style={{left:isOpen?'0':'-100%'}} className="nav_link">
        <Link onClick={()=>setIsOpen(false)}  to='/'>Home</Link>
        <Link onClick={()=>setIsOpen(false)} to='/product'>Product</Link>
        <Link onClick={()=>setIsOpen(false)} to='/contact'>Contact-Us</Link>
        <Link onClick={()=>setIsOpen(false)} to='/faq'>Faq</Link>
        <Link onClick={()=>setIsOpen(false)} to='/about'>About-Us</Link>
        <Link onClick={()=>setIsOpen(false)} to='/login'>Login</Link>
        <Link onClick={()=>setIsOpen(false)} to='/cart'><i class="fa-solid fa-cart-shopping"></i></Link>
        </div>
       
    </nav>
       </>

    
 )


}

export default Navbar;