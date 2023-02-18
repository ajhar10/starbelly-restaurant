import React from "react";
import MenuItem from "../../components/Menuitem/MenuItem";
import SubHeading from "../../components/SubHeading/SubHeading";
import { images, data } from "../../constants";
import "./SpecialMenu.css";

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding">
    <div className="app__specialMenu-title">
      <SubHeading title="Menu that fits you palatte" />
      <h1 className="headtext__cormorant">Today's Special</h1>
    </div>
    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine flex__center">
        <p className="app__specialMenu-menu_heading">Wine & Beer</p>
        <div className="app__specialMenu_menu_items">
          {data.wines.map((item, index) => (
            <MenuItem
              title={item.title}
              price={item.price}
              tags={item.tags}
              key={index}
            />
          ))}
        </div>
      </div>
      <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="menu_img" />
      </div>
      <div className="app__specialMenu-menu_cocktails">
        <p className="app__specialMenu-menu_heading">Cocktails</p>
        <div className="app__specialMenu_menu_items">
          {data.cocktails.map((item, index) => (
            <MenuItem
              title={item.title}
              price={item.price}
              tags={item.tags}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default SpecialMenu;
