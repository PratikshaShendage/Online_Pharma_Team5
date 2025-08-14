import React from "react";
import { useParams } from "react-router-dom";
import { Card, Typography, Button, Rate } from "antd";
import { useCart } from "../context/CartContext";

const { Title, Paragraph } = Typography;

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

  // Dummy product (replace with API call if needed)
  const product = {
    id,
    name: "Paracetamol 500mg",
    description:
      "Used for pain relief and fever reduction. Always follow medical advice.",
    price: 45,
    rating: 4.5,
    image: "https://via.placeholder.com/400",
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", padding: 40 }}>
      <Card
        style={{ maxWidth: 800, width: "100%" }}
        cover={<img alt={product.name} src={product.image} />}
      >
        <Title level={3}>{product.name}</Title>
        <Rate disabled defaultValue={product.rating} />
        <Paragraph style={{ marginTop: 10 }}>{product.description}</Paragraph>
        <Title level={4}>₹{product.price}</Title>
        <Button type="primary" onClick={() => addToCart(product)}>
          Add to Cart
        </Button>
      </Card>
    </div>
  );
};

export default ProductDetails;
