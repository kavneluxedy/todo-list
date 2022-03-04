import React from "react";
import { Button, Form } from "react-bootstrap";

export default function UpdateCard({ cards, setCards }) {
  const [card, setCard] = React.useState();

  const handleCardSelected = (id) => {
    // IDENTIFIANT DE LA CARTE SELECTIONNEE
    setCard({ ...card, id });
    console.log(id);
  };

  const handleSubmit = (e) => {
    let newCards = [...cards]; // ON CLONE L'ETAT INITIAL
    cards.map((objCard, i) => {
      if (card.id == objCard.id) {
        newCards.splice(i, 1);
        setCards(newCards);
        return;
      }
    });
    e.preventDefault();
  };

  return (
    <>
      <div className="form-control">
        <br />
        <h3>Delete</h3>
        <br />
        <Form.Select
          size="lg"
          onClick={(e) => handleCardSelected(e.target.value)}
        >
          {cards.map((card, i) => {
            return (
              <option key={i} value={card.id}>
                {card.title}
              </option>
            );
          })}
        </Form.Select>
        <br />
        <Button type="submit" onClick={(e) => handleSubmit(e)}>
          Delete
        </Button>
        <br />
      </div>
      <br />
    </>
  );
}
