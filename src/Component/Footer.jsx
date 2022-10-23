import {Link} from 'react-router-dom'
function Footer(){

  return (
      <footer>
        <div className="topfooter">
            <Link to='/about'>About</Link>
            <Link to='/faq'>Careers</Link>
            <Link to='/product'>Product</Link>
            <Link to='/contact'>Shopify Plus</Link>
            <Link to='/cart'>Cart</Link>
           
        </div>
        <div className="footerline"></div>
        <div className="icon">
            <div className="icons_div">
                <label>
                 <a target='_blank' href="https://www.facebook.com/ShopifyInIndia/?brand_redir=20409006880">
                <i class="fa-brands fa-facebook"></i>
                </a>
                </label>
               
                <label>
                 <a target='_blank' href="https://twitter.com/shopify">
                <i class="fa-brands fa-square-twitter"></i>

                 </a>
                    </label>
         

                <label>
                 <a target='_blank' href="https://www.youtube.com/user/shopify">
                <i class="fa-brands fa-youtube"></i>

                </a>
                 </label>

                <label>
                 <a target='_blank' href="https://www.instagram.com/shopify/">
                <i class="fa-brands fa-instagram"></i>

                </a>

                    </label>

                <label>
                 <a target='_blank' href="https://www.linkedin.com/company/shopify">
                <i class="fa-brands fa-linkedin"></i>

                </a>

                    </label>
            

                <label>
                 <a target='_blank' href="https://www.pinterest.com/shopify/">
                <i class="fa-brands fa-pinterest"></i>

                  </a>
                    </label>
            </div>
            <div>
                <h6 className="term">Term of Service  Privacy Policy</h6>
            </div>
        </div>
      </footer>
  )

}

export default Footer;