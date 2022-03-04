import { Form } from "react-bootstrap";

const Error404 = () => {
    console.log('ERROR 404');

    return (
        <>
            <Form.Alert variant="danger">ERROR 404</Form.Alert>
        </>
    )
}

export default Error404;