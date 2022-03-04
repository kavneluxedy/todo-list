import {
  Navbar,
  Container,
  ListGroup,
  Button,
  Dropdown,
} from "react-bootstrap";
import Footer from "./Footer";
import SearchForm from "../component/todo-list/SearchForm";
import { useParams, useNavigate, Outlet, Link } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const nav = (e, x) => {
    e.preventDefault();
    navigate(x);
  };

  return (
    <>
      <Container>
        <Navbar bg="secondary" variant="danger">
          <Container>
            <Navbar.Brand onClick={(e) => nav(e, "/")} className="text-dark">
              <img
                alt=""
                src="https://react-bootstrap.github.io/logo.svg"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{" "}
              React Bootstrap
            </Navbar.Brand>
          </Container>
        </Navbar>

        <hr />

        <ListGroup>
          <article>
            <h3>Projects</h3>
          </article>
          <p>
            <Button
              className="btn btn-secondary"
              size="md"
              onClick={(e) => nav(e, "todo")}
            >
              <img src="https://img.icons8.com/ios/24/000000/flag--v1.png" />
              &nbsp;use State - HOOK
            </Button>
            <br />
          </p>
          <p>
            <Button
              className="btn btn-secondary"
              size="md"
              onClick={(e) => nav(e, "cards")}
            >
              <img src="https://img.icons8.com/ios/24/000000/flag--v1.png" />
              &nbsp;use State - HOOK
            </Button>
            <br />
          </p>
          <p>
            <Button
              className="btn btn-secondary"
              size="md"
              onClick={(e) => nav(e, "reducer")}
            >
              <img src="https://img.icons8.com/ios/24/000000/flag--v1.png" />
              &nbsp;use Reducer - HOOK
            </Button>
            <br />
          </p>
          <p>
            <Button
              className="btn btn-secondary"
              size="md"
              onClick={(e) => nav(e, "context")}
            >
              <img src="https://img.icons8.com/ios/24/000000/flag--v1.png" />
              &nbsp;use Context - HOOK
            </Button>
            <br />
          </p>
          <p>
            <Button
              className="btn btn-secondary"
              size="md"
              onClick={(e) => nav(e, "effect")}
            >
              <img src="https://img.icons8.com/ios/24/000000/flag--v1.png" />
              &nbsp;use Effect - HOOK
            </Button>
            <br />
          </p>
          <p>
            <Button
              className="btn btn-secondary"
              size="md"
              onClick={(e) => nav(e, "ref")}
            >
              <img src="https://img.icons8.com/ios/24/000000/flag--v1.png" />
              &nbsp;use Ref - HOOK
            </Button>
            <br />
          </p>
        </ListGroup>

        {/* // ! OUTLET */}
        <Outlet />

        <hr />
        <ListGroup>
          <Link to="wildcard">Go to WildCard</Link>
        </ListGroup>
      </Container>

      <Footer />
    </>
  );
};

export default Header;
