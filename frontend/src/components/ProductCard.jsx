import React from "react";
import { Card, Button, Rate, Typography } from "antd";

const { Title, Text } = Typography;

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <Card
      hoverable
      cover={
        <img
          alt={product.name}
          src={product.image}
          style={{
            height: 200,
            objectFit: "cover",
            padding: 10
          }}
        />
      }
      style={{
        borderRadius: 12,
        overflow: "hidden",
        boxShadow: "0 4px 15px rgba(0,0,0,0.05)"
      }}
    >
      <Title level={5} style={{ marginBottom: 8 }}>
        {product.name}
      </Title>
      <Rate disabled defaultValue={product.rating} style={{ fontSize: 14 }} />
      <Text strong style={{ display: "block", margin: "8px 0" }}>
        ₹{product.price}
      </Text>
      <Button type="primary" block onClick={() => onAddToCart(product)}>
        Add to Cart
      </Button>
    </Card>
  );
};

export default ProductCard;
