import { Button, Form } from "react-bootstrap";
import React, { useState, useEffect, useRef } from "react";

const UseRef = () => {
  const [showInput, setShowInput] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (showInput) {
      inputRef.current.focus();
    }
  }, [showInput]);

  return (
    <>
      <Form>

        <h1>Change Value</h1>
        {showInput && (
          <Form.Control
            type="text"
            placeholder="Value"
            ref={inputRef}
            onBlur={() => {
              setShowInput(false);
            }}
          />
        )}
        <Button
          onClick={() => {
            setShowInput(true);
          }}
        >
          Change Value
        </Button>

      </Form>
    </>
  );
};

export default UseRef;
