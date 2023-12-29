import NavBar from "./components/NavBar";
import Menu from "./components/Menu";
import Cart from "./components/Cart";
import FoodsCategory from "./components/FoodsCategory";

import "./App.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchFoodsList } from "./store/modules/takeaway";
/* const foodsList = [
  {
    tag: "318569657",
    name: "Single Person Combo",
    foods: [
      {
        id: 8078956697,
        name: "Grilled Lamb Skewers (10 Skewers)",
        like_ratio_desc: "100% Favorable Rating",
        month_saled: 40,
        unit: "10 Skewers",
        food_tag_list: ["Recommended by Reviewers"],
        price: 90,
        picture: "https://zqran.gitee.io/images/waimai/8078956697.jpg",
        description: "",
        tag: "318569657",
      },
      {
        id: 7384994864,
        name: "Waxed Meat Clay Pot Rice",
        like_ratio_desc: "81% Favorable Rating",
        month_saled: 100,
        unit: "1 Serving",
        food_tag_list: [],
        price: 39,
        picture: "https://zqran.gitee.io/images/waimai/7384994864.jpg",
        description: "",
        tag: "318569657",
      },
      {
        id: 2305772036,
        name: "Chicken Leg Carrot Braised Rice",
        like_ratio_desc: "91% Favorable Rating",
        month_saled: 300,
        unit: "1 Serving",
        food_tag_list: [],
        price: 34.32,
        picture: "https://zqran.gitee.io/images/waimai/2305772036.jpg",
        description: "Main Ingredients: Rice, Chicken Leg, Choy Sum, Carrot",
        tag: "318569657",
      },
      {
        id: 2233861812,
        name: "Small Sour Soup Noodles Fish + Roujiamo Combo",
        like_ratio_desc: "73% Favorable Rating",
        month_saled: 600,
        unit: "1 Serving",
        food_tag_list: ["Good Taste, Good Packaging - Thumbs Up"],
        price: 34.32,
        picture: "https://zqran.gitee.io/images/waimai/2233861812.jpg",
        description:
          "Sour Soup Noodles Fish: Main Ingredients - Sour Soup, Noodles. Roujiamo: Main Ingredients - White Pancake, Pork",
        tag: "318569657",
      },
    ],
  },
]; */

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchFoodsList());
  }, [dispatch]);
  const { foodsList } = useSelector((state) => state.foods);
  return (
    <div className="home">
      {/* Navigation */}
      <NavBar />

      {/* Content */}
      <div className="content-wrap">
        <div className="content">
          <Menu />

          <div className="list-content">
            <div className="goods-list">
              {/* Takeaway Product List */}
              {foodsList.map((item) => {
                return (
                  <FoodsCategory
                    key={item.tag}
                    // List Title
                    name={item.name}
                    // List of Products
                    foods={item.foods}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Shopping Cart */}
      <Cart />
    </div>
  );
};

export default App;
