import React, { useState } from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import { getMenuStyles } from "../../utils/common";
import useHeaderColor from "../../hooks/useHeaderColor";
import OutsideClickHandler from "react-outside-click-handler";
import Logo from "/logo.png";
import { Link, NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {

  const {loginWithRedirect} = useAuth0();
  
  {/*Use state to track whether the menu is open or closed*/}
  const [menuOpened, setMenuOpened] = useState(false);

  {/*Custom hook to get the header background color*/}
  const headerColor = useHeaderColor();
  
  return (
    <section className="h-wrapper" style={{ background: headerColor }}>
      <div className="flexCenter innerWidth paddings h-container">
        {/*
       Logo image
      */}
      <Link to="/">
        <img src={Logo} alt="logo" width={100} />
      </Link>
        {/*
        Menu with click handler to close when clicked outside
      */}
        <OutsideClickHandler
          onOutsideClick={() => {
            setMenuOpened(false);
          }}
        >
          <div className="flexCenter h-menu" style={getMenuStyles(menuOpened)}>
            <NavLink to="/properties">Properties</NavLink>
            <button className="button" onClick={loginWithRedirect}>
              Log In
            </button>
          </div>
        </OutsideClickHandler>

        {/*
        Menu icon for small screens
      */}
        <div
          className="menu-icon"
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;
