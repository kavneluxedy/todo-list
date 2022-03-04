import React from "react";
import { Button, Form } from "react-bootstrap";

export default function UpdateCard({ cards, setCards }) {
  const [card, setCard] = React.useState();

  const handleCardSelected = (id) => {
    // IDENTIFIANT DE LA CARTE SELECTIONNEE
    setCard({ ...card, id });
    console.log(id);
  };

  const handleCardTitle = (title) => {
    setCard({ ...card, title });
  };

  const handleCardText = (text) => {
    setCard({ ...card, text });
  };

  const handleSubmit = (e) => {
    let newCards = [...cards]; // ON CLONE L'ETAT INITIAL
    cards.map((element, i) => {
      console.log(card.id == element.id);
      if (card.id == element.id) {
        newCards[i] = card;
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
        <h3>Update</h3>
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
        <Form.Control
          size="lg"
          type="text"
          placeholder="Title"
          onChange={(e) => handleCardTitle(e.target.value)}
        />
        <br />
        <Form.Control
          size="lg"
          type="text"
          placeholder="Description"
          onChange={(e) => handleCardText(e.target.value)}
        />
        <br />
        <Button type="submit" onClick={(e) => handleSubmit(e)}>
          Update
        </Button>
        <br />
      </div>
      <br />
    </>
  );
}
