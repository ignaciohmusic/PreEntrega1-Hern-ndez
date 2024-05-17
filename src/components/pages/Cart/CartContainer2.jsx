import { CartPresentacional } from "./CartPresentacional";
import { CartContext } from "../../../context/CartContext.jsx";
import { useContext } from "react";

export const CartContainer2 = () => {
    const { cart, clearCart, deleteById, getTotalPrice } = useContext(CartContext);
    let total = getTotalPrice();
    return (
      <CartPresentacional
        cart={cart}
        clearCart={clearCart}
        deleteById={deleteById}
        total={total}
      />
    );
}
