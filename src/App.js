import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import CartContainer from './Components/CartContainer/CartContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import NavBar from './Components/NavBar/NavBar';
import { CartProvider } from './Context/CartContext';
import CheckOut from './Components/CheckOut/CheckOut';

function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer title={"Welcome to iHardware"} />} />
            <Route path='/category/:categoryId' element={<ItemListContainer title='Filtered section' />} />
            <Route path='/detail/:itemId' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<CartContainer />} />
            <Route path='/checkout' element={<CheckOut />} />
          </Routes>
        </BrowserRouter>
      </CartProvider >
    </div>
  );
}

export default App;
