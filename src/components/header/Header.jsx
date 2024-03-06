import React, { useState } from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import { getMenuStyles } from "../../utils/common";
import useHeaderColor from "../../hooks/useHeaderColor";
import OutsideClickHandler from "react-outside-click-handler";
import Logo from "/logo.png";

const Header = () => {
  {
    /*    
  Use state to track whether the menu is open or closed
      */
  }
  const [menuOpened, setMenuOpened] = useState(false);

  {
    /*
      Custom hook to get the header background color
      */
  }
  const headerColor = useHeaderColor();
  {
    /*
        Return the JSX for the header
      */
  }
  return (
    <section className="h-wrapper" style={{ background: headerColor }}>
      <div className="flexCenter innerWidth paddings h-container">
        {/*
       Logo image
      */}
        <img src={Logo} alt="logo" width={100} />
        {/*
        Menu with click handler to close when clicked outside
      */}
        <OutsideClickHandler
          onOutsideClick={() => {
            setMenuOpened(false);
          }}
        >
          <div className="flexCenter h-menu" style={getMenuStyles(menuOpened)}>
            <a href="#residencies">Properties</a>
            <a href="#value">Our Value</a>
            <a href="#contact-us">Contact Us</a>
            <a href="#get-started">Get Started</a>
            <button className="button">
              <a href="#login">Log In</a>
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
