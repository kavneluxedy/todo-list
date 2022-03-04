import { Nav } from "react-bootstrap";

const Footer = () => {
  return (
    <>
    <Nav className="justify-content-center" activeKey="/home">
      <Nav.Item>
        <Nav.Link href="/cards">Card Manager</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/todo">Task Manager</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="/reducer">Reducer</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav.Item>
    </Nav>
    </>
  );
};

export default Footer;
