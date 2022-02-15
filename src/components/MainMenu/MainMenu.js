import React from "react";
import {Link} from 'react-router-dom'
import './main-menu.scss';

const MainMenu = () => {
  return (
    <div class="main-menu ui inverted vertical masthead center aligned segment">
        <div class="ui container">
          <div class="main-menu__list ui large secondary inverted pointing menu">
            {/* <a class="toc item">
              <i class="sidebar icon"></i>
            </a> */}
            <Link to="/" class="active item">
            {/* <i class="home icon"></i> */}
              Home</Link>
            <Link to="/Price" class="item">Price</Link>
            <Link to="/AddList" class="item">Add List</Link>
            <Link to ="/Carrier"class="item">Carrier</Link>
            <div class="right item">
              <Link to="/LogIn" class="ui inverted button">Log in</Link>
              <Link to="/Singup"class="ui inverted button">Sign Up</Link>
            </div>
          </div>
        </div>
      </div>
  );
};
export default MainMenu;
