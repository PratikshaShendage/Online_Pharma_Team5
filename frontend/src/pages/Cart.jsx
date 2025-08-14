import React, { useContext } from "react";
import { Table, Button, Typography, Space, message } from "antd";
import { ShoppingCartOutlined, DeleteOutlined } from "@ant-design/icons";
import { CartContext } from "../context/CartContext";
import "./Cart.css";

const { Title } = Typography;

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  const columns = [
    {
      title: "Product",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (price) => `₹${price}`,
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Button
          type="link"
          icon={<DeleteOutlined />}
          danger
          onClick={() => removeFromCart(record.id)}
        >
          Remove
        </Button>
      ),
    },
  ];

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart-container">
      <Title level={3}>
        <ShoppingCartOutlined /> Your Cart
      </Title>
      <Table
        dataSource={cart}
        columns={columns}
        rowKey="id"
        pagination={false}
      />
      <div className="cart-footer">
        <Title level={4}>Total: ₹{total}</Title>
        <Space>
          <Button onClick={clearCart} danger>
            Clear Cart
          </Button>
          <Button type="primary" onClick={() => message.success("Order Placed!")}>
            Checkout
          </Button>
        </Space>
      </div>
    </div>
  );
};

export default Cart;
