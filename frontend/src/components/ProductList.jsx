import React from "react";
import { Card, Button, Typography, Row, Col } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import "./ProductList.css";

const { Text } = Typography;

const ProductList = ({ products, addToCart }) => {
  return (
    <Row gutter={[20, 20]}>
      {products.map((product) => (
        <Col xs={24} sm={12} md={8} lg={6} key={product.id}>
          <Card
            hoverable
            cover={<img alt={product.name} src={product.image} className="product-list-img" />}
            style={{ borderRadius: 10 }}
          >
            <Text strong>{product.name}</Text>
            <br />
            <Text type="secondary">₹{product.price}</Text>
            <Button
              type="primary"
              icon={<ShoppingCartOutlined />}
              block
              style={{ marginTop: 10 }}
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </Button>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default ProductList;
