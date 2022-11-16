import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Contact from "./components/Contact";
import { Card, Col, Container, Form, Nav, Row } from "react-bootstrap";
import Order from "./components/Order";
import Summary from "./components/Summary";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>

      <Container className="my-4">
        <Card className="shadow-lg p-4">
          <Form>
            <Row>
              <Col md={8}>
                <Order />
              </Col>
              <Col md={4}>
                <Summary />
              </Col>
            </Row>
          </Form>
        </Card>
      </Container>
    </div>
  );
}

export default App;
