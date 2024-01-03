import NavBar from "./components/NavBar";
import Menu from "./components/Menu";
import Cart from "./components/Cart";
import FoodsCategory from "./components/FoodsCategory";

import "./App.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchFoodsList } from "./store/modules/takeaway";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchFoodsList());
  }, [dispatch]);
  const { foodsList, activeIndex } = useSelector((state) => state.foods);

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
              {foodsList.map((item, index) => {
                return (
                  activeIndex === index && (
                    <FoodsCategory
                      key={item.tag}
                      // List Title
                      name={item.name}
                      // List of Products
                      foods={item.foods}
                    />
                  )
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
