import { Form, Button } from "react-bootstrap";
import { useContext, createContext, useState } from "react";

const UserContext = createContext();

const UserInfo = () => {
  const { username } = useContext(UserContext);
  return (
    <Form className="bg-secondary text-warning" type="text">
      {username}
    </Form>
  );
};

const Login = () => {
  return (
    <>
      <Form.Control
        type="text"
        onChange={(e) => handleName(e.currentTarget.value)}
        onClick={(e) => console.log(e.target.value)}
      />
      <Button type="submit">
        Submit
      </Button>
    </>
  );
};

const handleName = (name) => {
  let ar = [];
  console.log(ar);
  ar.push(name);
  console.log(ar);
};

const handleSubmit = (e) => {
  setUsername(username);
};

const Context = () => {
  const [username, setUsername] = useState("Username Init");

  return (
    <UserContext.Provider>
      <UserInfo />
      <Login />
    </UserContext.Provider>
  );
};

export default Context;
 