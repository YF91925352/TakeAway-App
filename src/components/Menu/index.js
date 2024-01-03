import classNames from "classnames";
import "./index.scss";
import { useDispatch, useSelector } from "react-redux";
import { changeActiveIndex } from "../../store/modules/takeaway";

const Menu = () => {
  const dispatch = useDispatch();
  const { foodsList, activeIndex } = useSelector((state) => state.foods);
  const menus = foodsList.map((item) => ({ tag: item.tag, name: item.name }));

  return (
    <nav className="list-menu">
      {/* Adding the 'active' class will make it the active state */}
      {menus.map((item, index) => {
        return (
          <div
            onClick={() => dispatch(changeActiveIndex(index))}
            key={item.tag}
            className={classNames(
              "list-menu-item",
              activeIndex === index && "active"
            )}
          >
            {item.name}
          </div>
        );
      })}
    </nav>
  );
};

export default Menu;
