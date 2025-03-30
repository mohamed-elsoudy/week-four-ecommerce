import { Container, Button } from "react-bootstrap";
import Breadcrumb from 'react-bootstrap/Breadcrumb';

function Notfound() {
    return (
    <Container className="pt-5 pb-6 mb-6 not-found text-black text-center">
        <Breadcrumb className="txt-black bread-crumb">
            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
            <Breadcrumb.Item active>404 Error</Breadcrumb.Item>
        </Breadcrumb>
        <div>
            <h1>404 Not Found</h1>
            <p className="fs-16 mb-6">Your visited page not found. You may go home page.</p>
        </div>
        <Button variant="danger" className="px-5 py-3">Back to home page</Button>
    </Container>
    );
}

export default Notfound;