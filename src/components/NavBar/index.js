import "./index.scss";

const NavBar = () => {
  return (
    <nav className="nav">
      <div className="menu">
        <div className="menu-item active">
          Order<span className="menu-active-bar"></span>
        </div>
        <div className="menu-item">
          Review<span className="menu-comment">1796</span>
        </div>
        <div className="menu-item">Restaurant</div>
      </div>

      <div className="menu-search">
        <div className="menu-form">
          <div className="menu-search-icon"></div>
          <div className="menu-search-text">Search Meal</div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
