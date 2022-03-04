import { Button, Form } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";

const Login = ({ setLogged, setUser }) => {
  const navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  
  const handleSubmit = (e) => {
    e.preventDefault();
    setLogged(true);
    setUser(e.target[0].value);
    navigate(from, { replace: true });
  }

  return (
    <>
      <Form onSubmit={ handleSubmit }>

        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label>User Name</Form.Label>
          <Form.Control type="text"></Form.Control>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form.Group>

      </Form>
    </>
  );
};

export default Login;
