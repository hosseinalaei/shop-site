import {
  useReducer,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import cartItem from "../data";
import reducer from "../utils/reducer";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch(
        "http://138.201.167.230:5050/Products/getLastProduct"
      );
      const resData = await response.json();
      if (response.status === 200) {
        setData(resData.data);
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const initialState = {
    loading: false,
    cart: [],
    total: 0,
    amount: 0,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (newItem) => {
    dispatch({ type: "ADD_TO_CART", payload: newItem });
  };

  const deduction = (item) => {
    dispatch({ type: "DEDUCTION", payload: item });
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
      value={{
        ...state,
        clearCart,
        remove,
        changeQuantity,
        addToCart,
        deduction,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
const useCartContext = () => {
  return useContext(CartContext);
};
export { CartProvider, useCartContext };