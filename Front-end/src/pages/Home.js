/*
 * @Author: D_bxg
 * @Date: 2022-02-19 21:36:10
 * @LastEditors: D_bxg
 * @LastEditTime: 2022-02-26 20:08:01
 * @Description: file content
 * @FilePath: \applicatione:\Code\Project\Graduation-Project\Front-end\src\pages\Home.js
 */
import { Link, Outlet } from "react-router-dom";

import Three from "../shared/components/Three"
const Home = () => {
  return (
    <>
      <div>a</div>
      <Three></Three>
      <Link to="/catalog">
        <div>查看详情</div>
          </Link>
          <Outlet></Outlet>
    </>
  );
};

export default Home;
