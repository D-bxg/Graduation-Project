/*
 * @Author: D_bxg
 * @Date: 2022-02-19 21:50:37
 * @LastEditors: D_bxg
 * @LastEditTime: 2022-02-27 15:55:15
 * @Description: file content
 * @FilePath: \applicatione:\Code\Project\Graduation-Project\Front-end\src\shared\components\Header.js
 */
import React from "react";
import { SearchOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Popover } from "antd";
import PopoverContent from "./PopoverContent";

const Header = () => {
  React.useEffect(() => {
    let Header = document.getElementsByClassName("Header");
    window.onscroll = () => {
      if (document.documentElement.scrollTop === 1) {
        Header.opacity = 0.8;
      } else {
        Header.opacity = 0.2;
      }
      console.log("狠狠的亲wbb" + document.documentElement.scrollTop + "次");
    };
  }, []);
  return (
    <>
      <div className="header">
        <Link to="/">
          <div className="logo">
            <img src="/logo192.png" alt="Logo" />
          </div>
        </Link>
        <div className="function">
          <div className="function__item">
            <SearchOutlined className="function__item-icon" />
          </div>
          <Popover
            placement="bottomRight"
            content={PopoverContent}
            trigger="click"
          >
            <div className="function__item">
              <ShoppingCartOutlined className="function__item-icon" />
            </div>
          </Popover>
        </div>
      </div>
    </>
  );
};

export default Header;
