import {
  Form,
  Container,
  Navbar,
  Nav,
  Button,
  FormGroup,
} from "react-bootstrap";
import { Router, useNavigate, useParams } from "react-router-dom";

const SearchForm = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let target = e.target.firstChild.value;
	console.log(e.target.firstChild.value);
    navigate(target);
  };

  return (
    <>
      <div>
        <h3>Search Form</h3>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Form onSubmit={ handleSubmit }>
                <Form.Control type="text" size="sm"  placeholder="Search"/>
                <Button type="submit" >Search</Button>
              </Form>
            </Nav>
          </Container>
        </Navbar>
      </div>
    </>
  );
};
export default SearchForm;
