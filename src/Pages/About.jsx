import {useEffect} from 'react'
function About(){
   useEffect(()=>{
      document.title = 'Shopify - About'
   })
    return <div style={{marginTop:'100px'}} className="about">
      <div>
     <h1>Build anything.Reimagine commerce.</h1>
     <p>Millions of merchants trust Shopify to run their business—but they need developers to build the tools that help them achieve independence. Access powerful APIs to bring your ideas to life on the platform that makes commerce better for everyone.</p>
     <div>
        <h2>Develop apps that solve complex merchant problems</h2>
        <p>Expansive GraphQL and REST APIs let you integrate into Shopify's admin, online store, checkout, and more.</p>
     </div>
     <div>
        <h2>Integrate seamlessly into existing workflows</h2>
        <p>Embed your app’s features with App Bridge. Create high quality experiences with the ready-to-build Polaris component library.</p>
     </div>
     <div>
        <h2>Help merchants express themselves</h2>
        <p>Use Liquid to build beautiful theme templates. Get started with Dawn, our blazingly fast, accessible reference theme.</p>
     </div>
      <div>
        <h2>Ship custom shopping experiences</h2>
        <p>Add Shopify to any web, mobile, or gaming experience with the powerful Storefront API and SDKs, plus any front-end stack you want. Use Marketplace Kit to connect your platform and its users to millions of Shopify merchants and their products.</p>
      </div>
    </div>

    <div>
   <img src="https://cdn.shopify.com/s/files/1/0070/7032/files/Screen_Shot_2020-07-17_at_12.04.36_PM.png?format=webp&v=1596137581" alt="img1" />
   <img src="https://cdn.shopify.com/s/files/1/0070/7032/files/1._Uppercase.png?format=webp&v=1596139193" alt="img2" />
   <img src="https://cdn.shopify.com/s/files/1/0070/7032/files/Screen_Shot_2020-07-15_at_11.23.00_AM.png?format=webp&v=1596139534" alt="img3" />
   <img src="https://cdn.shopify.com/s/files/1/0070/7032/files/Screen_Shot_2020-07-14_at_11.45.29_AM.png?format=webp&v=1596139696" alt="img4" />
   </div>
    </div>
}


export default About;