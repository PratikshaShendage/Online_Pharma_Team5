import React from "react";
import { Layout, Menu, Badge, Dropdown, Avatar, Button } from "antd";
import { ShoppingCartOutlined, UserOutlined, LogoutOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { deepPurple } from "@mui/material/colors";

const { Header } = Layout;

const Navbar = () => {
  const navigate = useNavigate();

  const userMenu = (
    <Menu
      items={[
        { key: "profile", label: "Profile", onClick: () => navigate("/profile") },
        { key: "orders", label: "My Orders", onClick: () => navigate("/orders") },
        { key: "logout", label: "Logout", icon: <LogoutOutlined />, danger: true },
      ]}
    />
  );

  return (
    <Header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: "#fff",
        padding: "0 24px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)"
      }}
    >
      <div
        style={{ fontSize: 20, fontWeight: 600, cursor: "pointer" }}
        onClick={() => navigate("/")}
      >
        PharmaStore
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <Badge count={3}>
          <ShoppingCartOutlined
            style={{ fontSize: 22, cursor: "pointer" }}
            onClick={() => navigate("/cart")}
          />
        </Badge>

        <Dropdown overlay={userMenu} placement="bottomRight">
          <Avatar
            style={{
              backgroundColor: deepPurple[500],
              cursor: "pointer"
            }}
            icon={<UserOutlined />}
          />
        </Dropdown>
      </div>
    </Header>
  );
};

export default Navbar;
