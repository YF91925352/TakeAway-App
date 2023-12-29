import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const foodsStore = createSlice({
  name: "foods",
  initialState: { foodsList: [], activeIndex: 0 },
  reducers: {
    setFoodsList(state, action) {
      state.foodsList = action.payload;
    },
  },
});
const { setFoodsList } = foodsStore.actions;
const fetchFoodsList = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get("http://localhost:3004/takeaway");
      console.log("API Response:", res.data);
      dispatch(setFoodsList(res.data));
    } catch (error) {
      console.error("Error fetching foods list:", error);
    }
  };
};
export { fetchFoodsList };
const reducer = foodsStore.reducer;
export default reducer;
