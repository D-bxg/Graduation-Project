/*
 * @Author: D_bxg
 * @Date: 2022-01-22 10:38:57
 * @LastEditors: D_bxg
 * @LastEditTime: 2022-02-27 15:32:48
 * @Description: file content
 * @FilePath: \applicatione:\Code\Project\Graduation-Project\Front-end\src\index.js
 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "./styles/index.scss";
import { BrowserRouter } from "react-router-dom"; // react官方路由库
import { ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";
// import { store } from "./shared/modules/store";
// import { Provider } from "react-redux";

const client = new ApolloClient({
  uri: "http://localhost:8080/graphql", // 服务端接口
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
      <ApolloProvider client={client}>
        {/* 配置总路由 */}
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ApolloProvider>
    {/* </Provider> */}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
