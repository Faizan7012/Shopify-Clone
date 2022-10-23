import {Routes,Route} from 'react-router-dom';
import LoginPage from './LoginPage';
import Cart from './Cart';
import Faq from './Faq';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Product from './Product';
import SingleProd from './SingleProd';
import Notfound from './Notfound'


  function AllRoutes(){

  return (

   <Routes>
    <Route path='/' element={<Home />}></Route>
    <Route path='/product' element={<Product />}></Route>
    <Route path='/faq' element={<Faq />}></Route>
    <Route path='/contact' element={<Contact />} ></Route>
    <Route path='/cart' element={<Cart />}></Route>
    <Route path='/about' element={<About />}></Route>
    <Route path='/login' element={<LoginPage />}></Route>
    <Route path='/product/:id' element={<SingleProd />}></Route>
    <Route path='/*' element={<Notfound />}></Route>

   </Routes>


  )



  }

  export default AllRoutes;