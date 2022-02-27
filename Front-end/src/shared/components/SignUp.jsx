import React from "react";
// route
import { Link } from "react-router-dom";
// compoent
// compoent antd
import { Input, Space, Button, Form } from "antd";
import { gql } from "@apollo/client";
import { useMutation } from "@apollo/client";


import {
  UserOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
  PoweroffOutlined,
  FormOutlined,
} from "@ant-design/icons";
// axios
// import Axios from "axios";
// css
// variable
// variable antd
const TEST = gql`
  mutation ($customer: CustomerInput!) {
    createCustomer(customerInput: $customer) {
      id
    }
  }
`;
const SignUp = () => {
  const [__SignUp] = useMutation(TEST);

    const onFinish = ({username,password}) => {
        __SignUp({
          variables: {
            customer: { customerName: username, password: password },
          },
        }).then((res) => {
          console.log(res);
        });
//     Axios({
//       method: "post",
//       url: "http://localhost:8080/api/GeneralUser/saveGeneralUser",
//       data: values,
//       withCredentials: true,
//     }).then((res)=>{
//     });
//   };

//   onFinishFailed = (errorInfo) => {
//     console.log("Failed:", errorInfo);
//   };
//   enterLoading = (index) => {
//     this.setState(({ loadings }) => {
//       const newLoadings = [...loadings];
//       newLoadings[index] = true;

//       return {
//         loadings: newLoadings,
//       };
//     });
//     setTimeout(() => {
//       this.setState(({ loadings }) => {
//         const newLoadings = [...loadings];
//         newLoadings[index] = false;

//         return {
//           loadings: newLoadings,
//         };
//       });
//     }, 1000);
  };
 

    return (
      <>
        <div className="account__title">注册</div>
        <div className="account__content">
          <Space style={{ width: "100%" }} direction="vertical">
            <Form
              name="basic"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              //   onFinishFailed={this.onFinishFailed}
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
                  prefix={<FormOutlined />}
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
                    icon={<PoweroffOutlined />}
                    // loading={loadings[1]}
                    onClick={() => this.enterLoading(1)}
                  >
                    注册
                  </Button>
                </Form.Item>
                <div></div>
              </div>
            </Form>
          </Space>
          <div className="account__footer">
            已有账号？<Link to="/login/sign-in">登录</Link>
          </div>
        </div>
      </>
    );
  
}

export default SignUp;
