/*
 * @Author: D_bxg
 * @Date: 2022-02-26 20:09:11
 * @LastEditors: D_bxg
 * @LastEditTime: 2022-02-27 10:36:37
 * @Description: file content
 * @FilePath: \applicatione:\Code\Project\Graduation-Project\Front-end\src\pages\index.js
 */
import { Outlet } from "react-router-dom";
import Header from "../shared/components/Header";
export default function Pages() {
  return (
    <>
      <Header></Header>
      <div className="dbox">
        <Outlet></Outlet>
      </div>
    </>
  );
}
