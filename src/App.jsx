import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import men_banner from "../../FrontEnd/src/assets/Frontend_Assets/banner_mens.png"
import women_banner from "../../FrontEnd/src/assets/Frontend_Assets/banner_women.png"
import kid_banner from "../../FrontEnd/src/assets/Frontend_Assets/kid_women.png"



import Shop from './Pages/Shop'
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './pages/Cart';
import LoginSignup from './pages/LoginSignup';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/hommes' element={<ShopCategory banner={men_banner} category="homme"/>}/>
          <Route path='/femmes' element={<ShopCategory banner={women_banner} category="femme"/>}/>
          <Route path='/enfants' element={<ShopCategory banner={kid_banner} category="enfant"/>}/>
          
          
          <Route path='/product' element={<Product/>}>
            <Route path=':productId' element={<Product/>}/>
          </Route>

          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<LoginSignup/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;