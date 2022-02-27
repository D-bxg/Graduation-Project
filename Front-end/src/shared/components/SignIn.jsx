/*
 * @Author: D_bxg
 * @Date: 2022-02-26 01:35:19
 * @LastEditors: D_bxg
 * @LastEditTime: 2022-02-27 15:24:25
 * @Description: file content
 * @FilePath: \applicatione:\Code\Project\Graduation-Project\Front-end\src\shared\components\SignIn.jsx
 */
import React from "react";
import { Link } from "react-router-dom";
import { gql } from "@apollo/client";

import { Input, Space, Button, Form, Spin } from "antd";
import {
  UserOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
  PoweroffOutlined,
  LockOutlined,
} from "@ant-design/icons";
import { useMutation } from "@apollo/client";
// import { useHistory } from "react-router-dom";

// const VERIFY_TOKEN = gql`
//   mutation ($token: String!) {
//     verifyToken(token: $token) {
//       success
//     }
//   }
// `;
const LOGIN_SYSTEM = gql`
  mutation ($username: String!, $password: String!) {
    tokenAuth(username: $username, password: $password) {
      success
      token
      errors
    }
  }
`;



const SignIn = () => {
  // const [Loding, setLoding] = useState(false);
  // const history = useHistory();
  // const [username, setusername] = useState("");
  // const [password, setpassword] = useState("");
  const [LoginSystem] = useMutation(LOGIN_SYSTEM);
  // const login = () => {
  //   LoginSystem({
  //     variables: { username: username, password: password },
  //   }).then((res) => {
  //     if (res.data.tokenAuth.success) {
  //       const token = res.data.tokenAuth.token;
  //       localStorage.setItem("jwt", token);
  //       alert("登陆成功！");
  //     } else {
  //       error(res.data.tokenAuth.errors);
  //     }
  //   });
  // };
  // const [VerifyToken] = useMutation(VERIFY_TOKEN);
  // const jwt = localStorage.getItem("jwt") || "宝~，我今天去输液了";
  // VerifyToken({
  //   variables: { token: jwt },
  // }).then((res) => {
  //   if (res.data.verifyToken.success) {
  //     history.push("/");
  //   }
  // });
  // const register = () => {
  //   history.push("/register");
  // };
  const onFinish = ({ username, password }) => {
    LoginSystem({
      variables: { username: username, password: password },
    }).then((res) => {
      if (res.data.tokenAuth.success) {
        const token = res.data.tokenAuth.token;
        localStorage.setItem("jwt", token);
        alert("登陆成功！");
      } else {
        // error(res.data.tokenAuth.errors);
      }
    });
    //   console.log(values);
    //   this.setIsLoading(true);
    //   Axios({
    //     method: "post",
    //     url: ApiUrl.getGeneralUserByName,
    //     data: values,
    //     withCredentials: true,
    //   }).then((res) => {
    //     if (values.generalUserName === "aaa") {
    //       this.props.history.push("/backstage1");
    //       return;
    //     }
    //     if (res.data === "success") {
    //       // localStorage.setItem("token", res.data.token);
    //       // setAuthToken(res.data.token);
    //       this.setIsLoading(false);
    //       message.success("成功登录！");
    //       this.props.history.push("/");
    //     } else {
    //       message.error("用户名密码错误");
    //       // this.setIsLoading(false);
    //     }
    //   });
    //   setTimeout(() => {
    //     this.setIsLoading(false);
    //   }, 300);
  };

  return (
    <>
      <div className="account__title">登录</div>
      <div className="account__content">
        <Space style={{ width: "100%" }} direction="vertical">
          <Spin
            tip="加载中..."
            // spinning={Loding}
            style={{ backgroundColor: "rgb(255,255,255,0.3)" }}
          >
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{ remember: true }}
              onFinish={onFinish}
            >
              {/* 用户名 */}
              用户名：
              <Form.Item
                label=""
                name="username"
                rules={[{ required: true, message: "请输入用户名" }]}
              >
                <Input placeholder="输入账号" prefix={<UserOutlined />} />
              </Form.Item>
              {/* 密码 */}
              密码：
              <Form.Item
                label=""
                name="password"
                rules={[{ required: true, message: "密码不能为空" }]}
              >
                <Input.Password
                  placeholder="输入密码"
                  prefix={<LockOutlined />}
                  iconRender={(visible) =>
                    visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                  }
                />
              </Form.Item>
              {/* 提交按钮 */}
              <div className="account__submit">
                <div></div>
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                    icon={<PoweroffOutlined />}
                  >
                    登录
                  </Button>
                </Form.Item>
                <div></div>
              </div>
            </Form>
          </Spin>
        </Space>
        <div className="account__footer">
          没有账号？<Link to="/login/sign-up">注册</Link>
        </div>
      </div>
    </>
  );
};

export default SignIn;
