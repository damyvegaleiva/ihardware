import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartProvider } from "./Context/CartContext";
import NavBar from "./Components/NavBar/NavBar";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import CartContainer from "./Components/CartContainer/CartContainer";
import CheckOutContainer from "./Components/CheckOutContainer/CheckOutContainer";
import "./App.scss";
import { HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <div className="App">
      <HelmetProvider>
        <CartProvider>
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route
                path="/"
                element={<ItemListContainer title={"Welcome to iHardware"} />}
              />
              <Route
                path="/category/:categoryId"
                element={<ItemListContainer title="Filtered section" />}
              />
              <Route path="/detail/:itemId" element={<ItemDetailContainer />} />
              <Route path="/cart" element={<CartContainer />} />
              <Route path="/checkout" element={<CheckOutContainer />} />
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </HelmetProvider>
    </div>
  );
}

export default App;
