import { Layout } from "./components/layout/Layout.jsx";
import CartContainer from "./components/pages/cart/CartContainer.jsx";
import ItemDetailsContainer from "./components/pages/itemDetail/ItemDetailsContainer.jsx";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer.jsx";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import CartContextProvider from "./context/CartContext.jsx";
import Checkout from "./components/pages/checkout/Checkout.jsx";
import { Nosotros } from "./components/pages/nosotros/Nosotros.jsx";

function App() {
  return (
    <div>
      <BrowserRouter>
        <CartContextProvider>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/itemDetail/:id" element={<ItemDetailsContainer />} />
              <Route path="/category/:name" element={<ItemListContainer />} />
              <Route path="/checkout" element={<Checkout />}/>
              <Route path="/cart" element={<CartContainer />} />
              <Route path="/nosotros" element={<Nosotros />}/>

              <Route path="*" element={<h1>ERROR</h1>}/>
            </Route>
          </Routes>
        </CartContextProvider>
      </BrowserRouter>
    </div>
  );
}
export default App;
