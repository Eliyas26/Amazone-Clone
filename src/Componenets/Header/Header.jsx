import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import "../Header/Header.css";
import { Link } from "react-router-dom";
import { useStateValue } from "../State/StateProvider";
import { auth } from "../../firebase";
import Orders from "../OrderPage/Orders";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header-logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG25.png"
        />
      </Link>

      <div className="header-search">
        <input className="header-searchInput" type="text" />
        <SearchIcon className="header-searchicon" />
      </div>
      <div className="header-nav">
        <Link to={!user && "/login"} className="headr-clearlink">
          <div onClick={handleAuthentication} className="header-option">
            <span className="header-option-linkone">
              Hello {!user ? "Guest" : user.email}
            </span>
            <span className="header-option-linktwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <Link to="/Orders" className="headr-clearlink">
          <div className="header-option">
            <span className="header-option-linkone">Returns</span>
            <span className="header-option-linktwo">& Orders</span>
          </div>
        </Link>

        <div className="header-option">
          <span className="header-option-linkone">Your</span>
          <span className="header-option-linktwo">Prime</span>
        </div>
        <Link to="/Checkout" className="headr-clearlink">
          <div className="header-optionbasket">
            <ProductionQuantityLimitsIcon />
            <span className="header-optionlinktwo header-basketcount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
