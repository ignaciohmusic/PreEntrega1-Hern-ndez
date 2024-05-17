import { useContext } from "react";
import Cart from "./Cart.jsx";
import { CartContext } from "../../../context/CartContext.jsx";

const CartContainer = () => {
  const { cart, clearCart, deleteById, getTotalPrice } = useContext(CartContext);
  let total = getTotalPrice();
  return (
    <Cart
      cart={cart}
      clearCart={clearCart}
      deleteById={deleteById}
      total={total}
    />
  );
};

export default CartContainer;
