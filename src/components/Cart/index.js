import classNames from "classnames";
import React, { useState } from "react";
import Count from "../Count";
import "./index.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  decreCount,
  increCount,
} from "../../store/modules/takeaway";

const Cart = () => {
  const dispatch = useDispatch();
  const { cartList } = useSelector((state) => state.foods);
  const totalPrice = cartList.reduce((a, c) => a + c.price * c.count, 0);
  const [visible, setVisible] = useState(false);
  const onShow = () => {
    if (cartList.length > 0) {
      setVisible(true);
    }
  };
  return (
    <div className="cartContainer">
      {/* Overlay Layer - Add the 'visible' class to display */}
      <div
        onClick={() => setVisible(false)}
        className={classNames("cartOverlay", visible && "visible")}
      />
      <div className="cart">
        {/* Shopping Cart Icon */}
        <div
          onClick={onShow}
          className={classNames("icon", cartList.length > 0 && "fill")}
        >
          {true && (
            <div className="cartCornerMark">
              {cartList.length > 0 && (
                <div className="cartCornerMark">{cartList.length}</div>
              )}
            </div>
          )}
        </div>
        {/* Cart Price */}
        <div className="main">
          <div className="price">
            <span className="payableAmount">
              <span className="payableAmountUnit">¥</span>
              {totalPrice.toFixed(2)}
            </span>
          </div>
          <span className="text">Estimated Delivery Fee: ¥5</span>
        </div>
        {/* Checkout or Minimum Order */}
        {cartList.length > 0 ? (
          <div className="goToPreview">Checkout</div>
        ) : (
          <div className="minFee">Minimum Order: ¥20</div>
        )}
      </div>
      {/* Cart Panel - Add the 'visible' class to make the div visible */}
      <div className={classNames("cartPanel", visible && "visible")}>
        <div className="header">
          <span className="text">Shopping Cart</span>
          <span className="clearCart" onClick={() => dispatch(clearCart())}>
            Clear Cart
          </span>
        </div>

        {/* Cart Item List */}
        <div className="scrollArea">
          {cartList?.map((item) => {
            return (
              <div className="cartItem" key={item.id}>
                <img className="shopPic" src={item.picture} alt="" />
                <div className="main">
                  <div className="skuInfo">
                    <div className="name">{item.name}</div>
                  </div>
                  <div className="payableAmount">
                    <span className="yuan">¥</span>
                    <span className="price">{item.price}</span>
                  </div>
                </div>
                <div className="skuBtnWrapper btnGroup">
                  <Count
                    count={item.count}
                    onPlus={() => dispatch(increCount({ id: item.id }))}
                    onMinus={() => dispatch(decreCount({ id: item.id }))}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Cart;
