import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../../templates/Header";

const CartMini = () => {
  const navigate = useNavigate();
  const nav = (e, x) => {
    e.preventDefault();
    navigate(x);
  };

  const { cart } = useContext(CartContext);

  return (
    <>
      <span>Cart Length : {cart.length}</span>
    </>
  );
};

export default CartMini;
