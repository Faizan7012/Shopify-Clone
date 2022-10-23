import {Link} from 'react-router-dom'

function Contact(){


return <>
 <div className='cont-div-top'>
      <div>
        <h3 className="red_para">SHOPIFY INBOX</h3>
      <h1>Turn browsers into buyers using the power of chat</h1>
      <h4>Manage customer conversations, create automated messages, and get insights to focus on chats that convert, all from Shopify Inbox.</h4>
       <button className="cont_btn"><Link to='/login'>Login To get start</Link></button>
      </div>
      <div>
      <video muted="muted" playsinline="playsinline" data-autoplay="true" type="video/webm" src="https://cdn.shopify.com/shopifycloud/brochure/assets/inbox/hero-animation-7a13d48e08c8cc789a8b779aa89516bac0fb14a1c37d2c09465d0fbfa5b20112.webm"></video>
      </div>
      <h1>How Shopify Inbox works</h1>
      <div className="cont_inbox">
   <div>
    <h2>Set it up in admin</h2>
    <p>Add Shopify Inbox for free. Then customize online store and Shop chat, saved responses, and more from your admin.</p>
   </div>
   <div>
    <h2>Chat anytime from anywhere</h2>
    <p>Talk to customers and manage conversations with ease from the mobile app or web.</p>
   </div>
   <div>
    <h2>Get insights</h2>
    <p>Use metrics in your admin to understand how chat is performing so you can plan for growth with confidence.</p>
   </div>
      </div>
      <div className="line"></div>
</div>
  <video className="video2" src="https://cdn.shopify.com/shopifycloud/brochure/assets/inbox/insights-animation-76b0b0dd4fa41e3b8c14aabc19acec877a30cc1e57eb2a187cb5f23fe9425a82.webm"></video>
 
 <div className="about_div2">
    <div>
        <div>
            <h3 className="red_para">HARNESS POWERFUL INSIGHTS</h3>
            <h2>Make conversations become checkouts</h2>
        </div>
        <div>
            <h3>Cart actions</h3>
            <p>Get insights into what customers have in their cart when you talk to them using online store chat.</p>
        </div>
        <div>
            <h3>Discount codes</h3>
            <p>Share custom discount codes over chat to close sales and turn a one-time shopper into a loyal customer.</p>
        </div>
        <div>
            <h3>Message classification</h3>
            <p>Identify conversations that are likely to lead to a sale with automatic message classification.</p>
        </div>
        </div>
    <div>
        <img src="https://cdn.shopify.com/shopifycloud/brochure/assets/inbox/index/insights-small-832cb4c8b16b2b1ed5fbd1fe677229dbe0ebb76bf346fae61e5f08283051befb.jpg" alt="img5" />
    </div>
 </div>
 
 
 </>
}

export default Contact;