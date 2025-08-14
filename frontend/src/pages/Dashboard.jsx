import React, { useEffect, useState, useContext } from "react";
import { Row, Col, Card, Typography, Spin } from "antd";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { ShoppingOutlined, HeartOutlined } from "@ant-design/icons";
import axios from "axios";
import "./Dashboard.css";

const { Title } = Typography;

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:8080/api/products")
      .then(res => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return <div className="loader"><Spin size="large" /></div>;
  }

  return (
    <div className="dashboard-container">
      <Title level={3}>Welcome {user?.username || "Guest"} 👋</Title>
      <Row gutter={[20, 20]}>
        {products.map((product) => (
          <Col xs={24} sm={12} md={8} lg={6} key={product.id}>
            <Card
              hoverable
              cover={<img alt={product.name} src={product.image} className="product-img" />}
              actions={[
                <HeartOutlined key="wishlist" />,
                <ShoppingOutlined key="cart" onClick={() => navigate(`/product/${product.id}`)} />,
              ]}
            >
              <Card.Meta
                title={product.name}
                description={`₹${product.price}`}
              />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Dashboard;
