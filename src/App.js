
import About from './components/About';
import Navbar from './components/Navbar';
import ProductsList from './components/ProductsList';
import Slider from './components/Slider';
import { Routes , Route } from 'react-router-dom';
import ProductDetails from './components/productDetails';

function App() {
  return (
    <div className="App">
      
      <Navbar/>
      <Routes>
        <Route path="/" element= {
        <>
        <Slider/>
      <ProductsList/>
          </>
        }/>
        <Route path="about" element={<About/>} />
        <Route path="product/:productId"  element={  <ProductDetails/> }/>
      </Routes>
      
    
    </div>
  );
}

export default App;