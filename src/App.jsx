import { Layout } from "./components/layout/Layout.jsx";
import CartContainer from "./components/pages/cart/CartContainer.jsx";
import ItemDetailsContainer from "./components/pages/itemDetails/ItemDetailsContainer.jsx";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer.jsx";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<ItemListContainer />} />

            <Route path="/itemDetail/:id" element={<ItemDetailsContainer />} />
            <Route path="/category/:name" element={<ItemListContainer />} />
            <Route path="/cart" element={<CartContainer />} />

            <Route path="*" element={<h1>ERROR</h1>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
