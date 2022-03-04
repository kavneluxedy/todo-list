import React from "react";
import { Card, CardGroup } from "react-bootstrap";

const MyCard = (props) => {
  return (
    <div>
      <h3>My Cards</h3>
      <CardGroup>
        <Card>
          {/* {props.img} */}
          <Card.Img variant="top" src="" />
          <Card.Body>
            <Card.Title>
              {/* {props.title} */}
              <b>Title</b>
            </Card.Title>
            <Card.Text>
              {/* {props.text} */}
              <i>Text</i>
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  );
};

export default MyCard;
