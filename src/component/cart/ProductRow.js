import { Button, Card } from "react-bootstrap";

const ProductRow = ( { product }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={product?.image} />
      <Card.Body>
        <Card.Title>{product?.title}</Card.Title>
        <Card.Text>id : {product?.id}</Card.Text>
        <Card.Text>{product?.category}</Card.Text>
        <Card.Text>{product?.description}</Card.Text>
        <Card.Text>{product?.price}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default ProductRow;
