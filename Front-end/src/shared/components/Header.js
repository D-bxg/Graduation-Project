/*
 * @Author: D_bxg
 * @Date: 2022-02-19 21:50:37
 * @LastEditors: D_bxg
 * @LastEditTime: 2022-02-20 11:31:23
 * @Description: file content
 * @FilePath: \applicatione:\Code\Project\Graduation-Project\Front-end\src\shared\components\Header.js
 */
import React from "react";
import { SearchOutlined, ShoppingCartOutlined } from "@ant-design/icons";
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
      <div className="Header">
        <div className="Logo">
          <img src="/logo192.png" alt="Logo" />
        </div>
        <div className="Function">
          <div className="Search">
            <SearchOutlined style={{ color: "#fff" }} />
          </div>
          <div className="CartList">
            <ShoppingCartOutlined style={{ color: "#fff" }} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
