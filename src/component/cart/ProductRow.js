import { Button, Card } from "react-bootstrap";
import { useContext } from "react";
import { CartContext } from "../../templates/Header";
import useFetch, { refresh } from "../../hooks/useFetch";

const ProductRow = ({ product }) => {
  const { cart, setCart } = useContext(CartContext);

  const handleClick = () => {
    const cartClone = [...cart];
    cartClone.push(product);
    setCart(cartClone);
    console.log(cartClone);
  };

  return (
    <>
      {product && (
        <Card style={{ width: "12rem" }}>
          <Card.Img variant="top" src={product?.image} />
          <Card.Body>
            <Card.Title>{product?.title}</Card.Title>
            <Card.Text>id : {product?.id}</Card.Text>
            <Card.Text>{product?.category}</Card.Text>
            <Card.Text>{product?.description}</Card.Text>
            <Card.Text>{product?.price}</Card.Text>
            <Button onClick={handleClick}>Add To Cart</Button>
          </Card.Body>
        </Card>
      )}
    </>
  );
};

export default ProductRow;
