import { useReducer, createContext, useContext, useEffect } from "react";
import cartItem from "./data";
import reducer from "./reducer";

const CartContext = createContext();

const initialState = {
  loading: false,
  cart: cartItem,
  total: 0,
  amount: 0,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = () => {
    dispatch({ type: "ADD_TO_CART" });
  };
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const remove = (id) => {
    dispatch({ type: "REMOVE", payload: id });
  };

  const changeQuantity = (changeObj) => {
    dispatch({ type: "CHANGE_QUANTITY", payload: changeObj });
  };

  useEffect(() => {
    dispatch({ type: "GET_TOTALS" });
  }, [state.cart]);
  return (
    <CartContext.Provider
      value={{ ...state, clearCart, remove, changeQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};
const useCartContext = () => {
  return useContext(CartContext);
};
export { CartProvider, useCartContext };
