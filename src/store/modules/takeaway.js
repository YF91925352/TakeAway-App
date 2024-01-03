import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const foodsStore = createSlice({
  name: "foods",
  initialState: { foodsList: [], activeIndex: 0, cartList: [] },
  reducers: {
    setFoodsList(state, action) {
      state.foodsList = action.payload;
    },
    changeActiveIndex(state, action) {
      state.activeIndex = action.payload;
    },
    addCart(state, action) {
      const item = state.cartList.find((item) => item.id === action.payload.id);
      if (item) {
        item.count++;
      } else {
        state.cartList.push(action.payload);
      }
    },
    increCount(state, action) {
      const item = state.cartList.find((item) => item.id === action.payload.id);
      item.count++;
    },
    decreCount(state, action) {
      const item = state.cartList.find((item) => item.id === action.payload.id);
      if (item.count === 0) {
        return;
      }
      item.count--;
    },
    clearCart(state) {
      state.cartList = [];
    },
  },
});
const {
  setFoodsList,
  changeActiveIndex,
  clearCart,
  addCart,
  increCount,
  decreCount,
} = foodsStore.actions;
const fetchFoodsList = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get("http://localhost:3004/takeaway");

      dispatch(setFoodsList(res.data));
    } catch (error) {
      console.error("Error fetching foods list:", error);
    }
  };
};
export {
  fetchFoodsList,
  changeActiveIndex,
  clearCart,
  addCart,
  increCount,
  decreCount,
};
const reducer = foodsStore.reducer;
export default reducer;
