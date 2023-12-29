import classNames from "classnames";
import Count from "../Count";
import "./index.scss";

const Cart = () => {
  const cart = [];

  return (
    <div className="cartContainer">
      {/* Overlay Layer - Add the 'visible' class to display */}
      <div className={classNames("cartOverlay")} />
      <div className="cart">
        {/* Shopping Cart Icon */}
        <div className={classNames("icon")}>
          {true && <div className="cartCornerMark">{0}</div>}
        </div>
        {/* Cart Price */}
        <div className="main">
          <div className="price">
            <span className="payableAmount">
              <span className="payableAmountUnit">¥</span>
              {0.0}
            </span>
          </div>
          <span className="text">Estimated Delivery Fee: ¥5</span>
        </div>
        {/* Checkout or Minimum Order */}
        {false ? (
          <div className="goToPreview">Proceed to Checkout</div>
        ) : (
          <div className="minFee">Minimum Order: ¥20</div>
        )}
      </div>
      {/* Cart Panel - Add the 'visible' class to make the div visible */}
      <div className={classNames("cartPanel")}>
        <div className="header">
          <span className="text">Shopping Cart</span>
          <span className="clearCart">Clear Cart</span>
        </div>

        {/* Cart Item List */}
        <div className="scrollArea">
          {cart.map((item) => {
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
                  <Count count={item.count} />
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
