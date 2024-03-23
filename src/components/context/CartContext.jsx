import { createContext, useState } from "react";

export const CartContext = createContext();

function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addCart = (product) => {
    let existe = isInCart(product.id);
    if (existe) {
      let newArray = cart.map((e) => {
        if (e.id === product.id) {
          return { ...e, quantity: product.quantity };
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

  const getTotalItem = () => {
    let total = cart.reduce((acc, e) => {
      return acc + e.quantity;
    }, 0);
    return total;
  };

  const getTotalQuantityById = (id) => {
    let total = cart.find((e) => {
      return e.id === id;
    });
    if (total) {
      return total.quantity;
    } else {
      return total;
    }
  };

  const getTotalPrice = () => {
    let total = cart.reduce((acc, elemento) => {
      return acc + elemento.quantity * elemento.price;
    }, 0);

    return total;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addCart,
        clearCart,
        removeById,
        getTotalItem,
        getTotalQuantityById,
        getTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
