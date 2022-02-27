/*
 * @Author: D_bxg
 * @Date: 2022-01-29 12:30:51
 * @LastEditors: D_bxg
 * @LastEditTime: 2022-02-27 15:34:47
 * @Description: file content
 * @FilePath: \applicatione:\Code\Project\Graduation-Project\Front-end\src\routers\index.jsx
 */
import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
// loding页面
import Loding from "../shared/containers/Loding";
import Pages from "../pages";

import SignIn from "../shared/components/SignIn";
import SignUp from "../shared/components/SignUp";

// 懒加载页面
const Home = lazy(() => import("../pages/Home"));
const Cart = lazy(() => import("../pages/Cart"));
const Account = lazy(() => import("../pages/Account"));
const Login = lazy(() => import("../pages/Login"));
const Catalog = lazy(() => import("../pages/Catalog"));
const Order = lazy(() => import("../pages/Order"));
const NotFound = lazy(() => import("../shared/containers/NotFound"));

const Routers = () => {
  return (
    <>
      {/* 部署懒加载中的loding页面 */}
      <Suspense fallback={<Loding />}>
        <Routes>
          <Route path="/" element={<Pages />}>
            <Route path="" element={<Home />} />
            <Route path="cart" element={<Cart />} />
            <Route path="account" element={<Account />}>
              <Route path=":account" element={<Account />} />
            </Route>
            <Route path="login" element={<Login />}>
              <Route path="sign-in" element={<SignIn />} />
              <Route path="sign-up" element={<SignUp />} />
            </Route>
            <Route path="catalog" element={<Catalog />} />
            <Route path="Order" element={<Order />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};
export default Routers;
