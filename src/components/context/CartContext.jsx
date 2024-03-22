import { createContext, useState } from "react";

export const CartContext = createContext();

function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addCart = (product) => {
    let existe = isInCart(product.id);
    if (existe) {
      let newArray = cart.map((e) => {
        if (e.id === product.id) {
          return { ...e, quantity: e.quantity + product.quantity };
        } else {
          return e;
        }
      });
      setCart(newArray);
    } else {
      setCart([...cart, product]);
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  function isInCart(id) {
    let exist = cart.some((p) => {
      return p.id === id;
    });
    return exist;
  }

  const removeById = (id) => {
    let newArray = cart.filter((p) => {
      return p.id !== id;
    });
    setCart(newArray);
  };

  return (
    <CartContext.Provider value={{ cart, addCart, clearCart, removeById }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
