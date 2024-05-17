import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addToCart = (product) =>{
      let existent = isInCart(product.id)
      if (existent) {
        let newArray = cart.map((element) => {
          if (element.id) {
            return {...element, quantity: product.quantity};
          } else {
            return element
          }
        });
        setCart(newArray)
      } else {
        setCart([...cart, product]);  
      }
    };

    const clearCart = () => {
      setCart([])
    }

    const deleteById = (id) => {
      const newArray = cart.filter(products => products.id !== id)
      setCart(newArray)

    }

    const isInCart = (id) => {
      let bool = cart.some((product) => product.id === id);
      return bool;
    };

    const getQuantityById = (id) => {
      let product = cart.find((el) => el.id)
      return product?.quantity;
    }

    const getTotalPrice = () => {
      let total = cart.reduce((acc, element) => {
        return acc + element.quantity * element.price;
      },0);
      return total;
    };

    const getTotalItems = ()=>{
      let total = cart.reduce((acc, element)=>{
        return acc + element.quantity
      }, 0)
      return total
    }


    let datos = {
      cart, 
      addToCart, 
      clearCart, 
      deleteById,
      getQuantityById,
      getTotalPrice,
      getTotalItems
    }
  return <CartContext.Provider value={ datos }> {children} </CartContext.Provider>;
};

export default CartContextProvider;
