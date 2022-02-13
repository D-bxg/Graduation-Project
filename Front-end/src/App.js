/*
 * @Author: D_bxg
 * @Date: 2022-01-22 10:38:57
 * @LastEditors: D_bxg
 * @LastEditTime: 2022-02-01 00:45:32
 * @Description: file content
 * @FilePath: \applicatione:\Code\Project\Graduation-Project\Front-end\src\App.js
 */
import React from "react";
import "./App.css";

function App() {
  React.useEffect(() => {
      window.onscroll = () => {
        
      console.log('狠狠的亲wbb'+document.documentElement.scrollTop+'次');
    };
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
