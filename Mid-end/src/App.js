/*
 * @Author: D_bxg
 * @Date: 2022-01-22 10:38:57
 * @LastEditors: D_bxg
 * @LastEditTime: 2022-02-19 23:14:16
 * @Description: file content
 * @FilePath: \applicatione:\Code\Project\Graduation-Project\Front-end\src\App.js
 */
import React from "react";
import Home from "./pages/Home";

function App() {
  React.useEffect(() => {
    window.onscroll = () => {
      console.log("狠狠的亲wbb" + document.documentElement.scrollTop + "次");
    };
  }, []);
  return (
    <>
          <Home></Home>
          <div style={{height:"200vh",width:"100%"}}></div>
    </>
  );
}

export default App;
