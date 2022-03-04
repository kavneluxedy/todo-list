import { ListGroup, Form } from "react-bootstrap";

const TaskCard = () => {

  return (
    <>
      <ListGroup>
        <ListGroup.Item variant="danger">
          {"Task 1"}
          <Form.Check type="switch" id="switch1" label="Doned" value="Task1" />
        </ListGroup.Item>
      </ListGroup>
    </>
  );
};

export default TaskCard;