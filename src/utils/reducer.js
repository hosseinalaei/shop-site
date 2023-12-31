const reducer = (state, action) => {
  switch (action.type) {
    case "CLEAR_CART": {
      return { ...state, cart: [] };
    }

    case "UPDATE_CART": {
      return { ...state, cart: action.payload };
    }

    case "REMOVE": {
      // console.log(action.payload);
      // console.log(state.cart);
      return {
        ...state,
        cart: state?.cart?.filter((item) => item.productId !== action.payload),
      };
    }
    case "CHANGE_QUANTITY": {
      // console.log(state.cart);
      const tempCart = state?.cart?.map((item) => {
        if (item.id === action.payload.id && action.payload.quantity > 0) {
          return { ...item, count: action.payload.quantity };
        }
        return item;
      });

      return { ...state, cart: tempCart };
    }
    case "GET_TOTALS": {
      // console.log(state.cart);
      if (state.cart) {
        console.log(state.cart);
        let { totalPrice, count } = state?.cart?.reduce(
          (cartTotal, cartItem) => {
            // console.log("cart item", cartItem);
            const { productPrice, count } = cartItem;
            // console.log(productPrice, count);
            const itemTotal = productPrice * count;
            cartTotal.totalPrice += itemTotal;
            cartTotal.count += count;
            // console.log(cartTotal);
            return cartTotal;
          },
          {
            totalPrice: 0,
            count: 0,
          }
        );
        return { ...state, totalPrice, count };
      } else {
        let totalPrice = 0;
        let count = 0;
        return { ...state, totalPrice, count };
      }
    }
    case "ADD_TO_CART": {
      // console.log(state.cart);
      // console.log(action.payload);
      if (
        state.cart.filter((item) => item.productId === action.payload.productId)
          .length === 0
      ) {
        return { ...state, cart: [...state.cart, action.payload] };
      } else {
        const tempCart = state.cart.map((item) => {
          if (
            item.productId === action.payload.productId &&
            action.payload.count > 0
          ) {
            return { ...item, count: item.count + 1 };
          }
          return item;
        });
        // console.log(tempCart);
        return { ...state, cart: tempCart };
      }
    }
    case "DEDUCTION": {
      if (action.payload.count === 1) {
        return {
          ...state,
          cart: state.cart.filter(
            (item) => item.productId !== action.payload.productId
          ),
        };
      } else {
        const tempCart = state?.cart?.map((item) => {
          if (
            item.productId === action.payload.productId &&
            action.payload.count > 0
          ) {
            return { ...item, count: item.count - 1 };
          }
          return item;
        });
        return { ...state, cart: tempCart };
      }
    }
  }
};

export default reducer;
