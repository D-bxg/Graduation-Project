/*
 * @Author: D_bxg
 * @Date: 2022-01-22 10:38:57
 * @LastEditors: D_bxg
 * @LastEditTime: 2022-02-26 20:11:11
 * @Description: file content
 * @FilePath: \applicatione:\Code\Project\Graduation-Project\Front-end\src\App.js
 */
import React from "react";
import Routers from "./routers";


function App() {
  React.useEffect(() => {
    window.onscroll = () => {
    //   console.log("狠狠的亲wbb" + document.documentElement.scrollTop + "次");
    };
  }, []);
  return (
      <>
        <Routers />
      {/* <div style={{ height: "200vh", width: "100%" }}></div> */}
    </>
  );
}

export default App;
