import Home from './components/Home';
import Footer from './components/Footer';
import Products from './components/Products';
import ProductImage1 from './img/prod/img_rain.jpg'
import ProductImage2 from './img/prod/img_puff.jpg'
import ProductImage3 from './img/prod/img_car.jpg'
import ProductImage4 from './img/prod/img_nap.png'
import ProductDetail1 from './img/prod/pufi_rain.png'
import ProductDetail2 from './img/prod/pufi_puff.png'
import ProductDetail3 from './img/prod/pufi_cart.png'
import ProductDetail4 from './img/prod/pufi_nap.png'
import Instagram from './components/Instagram';
import NewsLetter from './components/Newsletter';
import { Toaster } from 'react-hot-toast';


function App() {
  return (
   <div>
    <Toaster 
      position="top-center"
      reverseOrder={false}
    />
      <Home />
      <Products
        image1={ProductImage1}
        image2={ProductDetail1}
        name={"Pufi RAIN"}
        position={"left"}
      />
      <Products
        image1={ProductImage2}
        image2={ProductDetail2}
        name={"Pufi PUFF"}
        position={"right"}
      />
      <Products
        image1={ProductImage3}
        image2={ProductDetail3}
        name={"Pufi CART"}
        position={"left"}
      />
      <Products
        image1={ProductImage4}
        image2={ProductDetail4}
        name={"Pufi NAP"}
        position={"right"}
      />
      <Instagram />
      <NewsLetter />
      <Footer />
   </div>
  );
};

export default App;
