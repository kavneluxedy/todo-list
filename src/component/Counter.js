import React, { useReducer } from 'react';
import { Button, Form } from "react-bootstrap";

const initialState = { count: 0 };

let msg;
function Reducer(state, action) {
  switch (action.type) {
    case "increment":
        msg = <h4 className="text-dark"> { state.count + 1 } </h4>;
        return { count: state.count + 1 };
    case "decrement":
        msg = <h4 className="text-dark"> { state.count - 1 } </h4>;
        return { count: state.count - 1 };
    case "reset":
        msg = <h4 className="text-danger">reset</h4>;
        return { count: state.count = 0 };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(Reducer, initialState);

  return (
    <>
      <Button className="btn btn-warning" onClick={() => dispatch({ type: "decrement" })}>-</Button>
      <Button className="btn btn-success" onClick={() => dispatch({ type: "increment" })}>+</Button>

      <Button className="btn btn-danger" onClick={() => dispatch({ type: "reset" })}>Reset</Button>
      <Form.Text type="text" size="sm" readOnly >{ msg }</Form.Text> 
      

    </>
  );
}

export { Reducer, Counter };
