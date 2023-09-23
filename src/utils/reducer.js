const reducer = (state, action) => {
  switch (action.type) {
    case "CLEAR_CART": {
      return { ...state, cart: [] };
    }

    case "UPDATE_CART" :{
      // console.log(payload)
      return {...state, cart: action.payload}
    }

    case "REMOVE": {
      console.log(action.payload);
      console.log(state.cart);
      return {
        ...state,
        cart: state.cart.filter((item) => item.productId !== action.payload),
      };
    }
    case "CHANGE_QUANTITY": {
      const tempCart = state.cart.map((item) => {
        if (item.id === action.payload.id && action.payload.quantity > 0) {
          return { ...item, quantity: action.payload.quantity };
        }
        return item;
      });

      return { ...state, cart: tempCart };
    }
    case "GET_TOTALS": {
      let { total, quantity } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, quantity } = cartItem;
          const itemTotal = price * quantity;
          cartTotal.total += itemTotal;
          cartTotal.quantity += quantity;
          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );

      return { ...state, total, quantity };
    }
    case "ADD_TO_CART" :{
      if(state.cart.filter(item => item.id === action.payload.id).length === 0){
        return {...state, cart:[...state.cart, action.payload]}
      } else{
        const tempCart = state.cart.map((item) => {
          if (item.id === action.payload.id && action.payload.quantity > 0) {
            return { ...item, quantity: item.quantity+1 };
          }
          return item;
        });
        console.log(tempCart);
        return { ...state, cart: tempCart };
      }
    }
    case "DEDUCTION" :{
      if(action.payload.quantity === 1){
        return {...state, cart: state.cart.filter(item => item.id !== action.payload.id)}
      } 
      else{
        const tempCart = state.cart.map((item) => {
          if (item.id === action.payload.id && action.payload.quantity > 0) {
            return { ...item, quantity: item.quantity-1 };
          }
          return item;
        });
        return { ...state, cart: tempCart };
      }
    }
  }
  
};

export default reducer;
