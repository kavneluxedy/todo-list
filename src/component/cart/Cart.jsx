import { useContext } from "react";
import { Container, Card, Button } from "react-bootstrap";
import { CartContext } from "../../templates/Header";

const Cart = () => {
  const { cart } = useContext(CartContext);
  const handleClick = () => {};

  const handleSubmit = () => {
    let cartSerialized = cart.map((product) => {
      return { productId: product.id, quantity: 1 };
    });

    fetch("https://fakestoreapi.com/carts", {
      method: "POST",
      body: JSON.stringify({
        userId: 1,
        date: "2022-03-15",
        products: cartSerialized,
      }),
    })
      .then((res) => res.json())
      .then((json) => console.log(json));
  };

  return (
    <>
      {cart &&
        cart.map((product) => {
          return (
            <>
              <Card style={{ width: "12rem" }}>
                {/* <Card.Img variant="top" src={product?.image} /> */}
                <Card.Body>
                  <Card.Title>{product?.title}</Card.Title>
                  <Card.Text>id : {product?.id}</Card.Text>
                  <Card.Text>{product?.category}</Card.Text>
                  <Card.Text>{product?.description}</Card.Text>
                  <Card.Text>{product?.price}</Card.Text>
                </Card.Body>
              </Card>
              <Button onClick={handleSubmit}>Submit Cart</Button>
            </>
          );
        })}
    </>
  );
};

export default Cart;
