/*
 * @Author: D_bxg
 * @Date: 2022-02-27 15:49:57
 * @LastEditors: D_bxg
 * @LastEditTime: 2022-02-27 16:29:43
 * @Description: file content
 * @FilePath: \applicatione:\Code\Project\Graduation-Project\Front-end\src\shared\components\PopoverContent.js
 */
import { Button, Divider } from "antd";
import { Link } from "react-router-dom";
import {
  ShoppingCartOutlined,
  WalletOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";

const PopoverContent = () => (
  <div className="popover-content">
    <Link to="/cart">
      <ShoppingCartOutlined />
      <Button block type="link">
        购物车
      </Button>
    </Link>
    <Divider style={{ margin: "0" }} />
    <Link to="/order">
      <WalletOutlined />
      <Button block type="link">
        订单
      </Button>
    </Link>
    <Divider style={{ margin: "0" }} />
    <Link to="/account">
      <SettingOutlined />
      <Button block type="link">
        个人账户
      </Button>
    </Link>
    <Divider style={{ margin: "0" }} />
    <Link to="/login/sign-in">
      <UserOutlined />
      <Button block type="link">
        登录
      </Button>
    </Link>
  </div>
);

export default PopoverContent;
