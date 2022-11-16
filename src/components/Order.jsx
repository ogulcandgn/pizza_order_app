import React from "react";
import { Card, Col, Form, FormFloating, Row, Alert } from "react-bootstrap";

function Order() {
  return (
    <>
      <Card.Body className="border rounded">
        <Card.Title>Pizza Boyutu & Hamur Tipi</Card.Title>

        <Form.Group className="py-3">
          <Row>
            <Col md={6}>
              <div className="mb-3">
                <Col>
                  <Form.Check type="radio" id={`default-`} label={`small`} />
                </Col>
              </div>
            </Col>
            <Col md={6}>
              <div className="mb-3">
                <Col>
                  <Form.Check type="radio" id={`default-`} label={`small`} />
                </Col>
              </div>
            </Col>
            <Col md={6}>
              <div className="mb-3">
                <Col>
                  <Form.Check type="radio" id={`default-`} label={`small`} />
                </Col>
              </div>
            </Col>
            <Col md={6}>
              <div className="mb-3">
                <Col>
                  <Form.Check type="radio" id={`default-`} label={`small`} />
                </Col>
              </div>
            </Col>
          </Row>
        </Form.Group>
        <hr />
        <Form.Group className="py-3">
          <Row>
            <Col md={6}>
              <div className="mb-3">
                <Col>
                  <Form.Check type="radio" id={`default-`} label={`small`} />
                </Col>
              </div>
            </Col>
            <Col md={6}>
              <div className="mb-3">
                <Col>
                  <Form.Check type="radio" id={`default-`} label={`small`} />
                </Col>
              </div>
            </Col>
            <Col md={6}>
              <div className="mb-3">
                <Col>
                  <Form.Check type="radio" id={`default-`} label={`small`} />
                </Col>
              </div>
            </Col>
            <Col md={6}>
              <div className="mb-3">
                <Col>
                  <Form.Check type="radio" id={`default-`} label={`small`} />
                </Col>
              </div>
            </Col>
          </Row>
        </Form.Group>
      </Card.Body>

      {/* cheese & souce */}
      <Row>
        <Col md={6}>
          <Card className="my-2">
            <Card.Body>
              <Card.Title className="d-flex align-items-center">
                Peynir
                <Form.Check type="checkbox" id={`default-`} className="mx-1" />
              </Card.Title>

              <Form.Select>
                <option>Open this select menu</option>
                <option value="1">Normal</option>
                <option value="2">Tek Kaşarlı</option>
                <option value="3">Mozarella</option>
              </Form.Select>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="my-2">
            <Card.Body>
              <Card.Title className="d-flex align-items-center">
                Sos
                <Form.Check type="checkbox" id={`default-`} className="mx-1" />
              </Card.Title>

              <Form.Select>
                <option>Open this select menu</option>
                <option value="1">Domates Sosu</option>
                <option value="2">Özel Sos</option>
                <option value="3">Sos istemiyorum</option>
              </Form.Select>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* toppings and meat */}
      <Card className="my-2">
        <Card.Body>
          <Card.Title className="d-flex align-items-center">
            Malzemeler & Etler
          </Card.Title>
          <Row className="mt-4">
            <Col>
              <Form.Check
                type="checkbox"
                className="mx-2"
                id={`default-`}
                label="Tavuk"
              />
            </Col>
            <Col>
              <Form.Check
                type="checkbox"
                className="mx-2"
                id={`default-`}
                label="Tavuk"
              />
            </Col>
            <Col>
              <Form.Check
                type="checkbox"
                className="mx-2"
                id={`default-`}
                label="Tavuk"
              />
            </Col>
            <Col>
              <Form.Check
                type="checkbox"
                className="mx-2"
                id={`default-`}
                label="Tavuk"
              />
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <Card className="my-2">
        <Card.Body>
          <Card.Title className="d-flex align-items-center">
            Malzemeler & Etler
          </Card.Title>
          <Row className="mt-4">
            <Col>
              <Form.Check
                type="checkbox"
                className="mx-2"
                id={`default-`}
                label="Tavuk"
              />
            </Col>
            <Col>
              <Form.Check
                type="checkbox"
                className="mx-2"
                id={`default-`}
                label="Tavuk"
              />
            </Col>
            <Col>
              <Form.Check
                type="checkbox"
                className="mx-2"
                id={`default-`}
                label="Tavuk"
              />
            </Col>
            <Col>
              <Form.Check
                type="checkbox"
                className="mx-2"
                id={`default-`}
                label="Tavuk"
              />
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <Card className="my-2">
        <Card.Body>
          <Card.Title className="d-flex align-items-center">
            Özel İstekler
          </Card.Title>
          <Row className="mt-4">
            <Form.Control
              as="textarea"
              placeholder="Siparişinizle ilgili özel istekleri buraya girebilirsiniz."
              style={{ height: "100px" }}
            />
          </Row>
        </Card.Body>
      </Card>
    </>
  );
}

export default Order;
