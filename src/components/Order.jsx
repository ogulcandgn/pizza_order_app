import React from "react";
import { Card, Col, Form, FormFloating, Row, Alert } from "react-bootstrap";

function Order({ formik, values }) {
  const size = [
    {
      label: "Small",
      description: "10''",
      value: "small",
    },
    {
      label: "Medium",
      description: "12''",
      value: "medium",
    },
    {
      label: "Large",
      description: "14''",
      value: "large",
    },
    {
      label: "X-Large",
      description: "16''",
      value: "xlarge",
    },
  ];

  const crust = [
    {
      label: "BROOKLYN STYLE",
      description: "Hand stretched to be big, thin and perfectly foldable.",
      value: "brooklynstyle",
    },
    {
      label: "HAND TOSSED",
      description: "Garlic-seasoned crust with a rich, buttery taste.",
      value: "handtossed",
    },
    {
      label: "CRUNCHY THIN CRUST",
      description:
        "Thin enough for the optimum crispy to crunchy ratio and square cut to be perfectly sharable.",
      value: "crunchythincrust",
    },
  ];
  const meat = [
    {
      label: "Beef",
      value: "beef",
    },
    {
      label: "Salami",
      value: "salami",
    },
    {
      label: "Pepperoni",
      value: "pepperoni",
    },
    {
      label: "Italian Sausage",
      value: "Italiansausage",
    },
    {
      label: "Premium Chicken",
      value: "Premiumchicken",
    },
  ];
  const nonmeat = [
    {
      label: "Hot Buffalo Sauce",
      value: "hotbuffalosauce",
    },
    {
      label: "Jalapeno Peppers",
      value: "jalapenopeppers",
    },
    {
      label: "Onions",
      value: "onions",
    },
    {
      label: "Banana Peppers",
      value: "bananapeppers",
    },
    {
      label: "Diced Tomatoes",
      value: "dicedtomatoes",
    },
  ];

  return (
    <>
      <Card.Body className="border rounded">
        <Card.Title>Pizza Boyutu</Card.Title>

        <Form.Group className="py-3">
          <Row>
            {size.map((pizza, index) => {
              return (
                <Col key={index} md={6}>
                  <div className="mb-3">
                    <Form.Check
                      name="size"
                      type="radio"
                      id={`default-`}
                      label={pizza.label}
                      value={pizza.value}
                      onChange={formik.handleChange}
                    />
                    <small className="px-4">{pizza.description}</small>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Form.Group>
        <hr />
        <Card.Title>Hamur Tipi</Card.Title>
        <Form.Group className="py-3">
          <Row>
            {crust.map((crust, index_two) => {
              return (
                <Col key={index_two} md={12}>
                  <div className="mb-3">
                    <Form.Check
                      name="crust"
                      type="radio"
                      id={`default-`}
                      label={crust.label}
                      value={crust.value}
                      onChange={formik.handleChange}
                    />
                    <small className="px-4">{crust.description}</small>
                  </div>
                </Col>
              );
            })}
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
                <Form.Check
                  name="chesee.includes"
                  type="checkbox"
                  className="mx-2"
                  onChange={formik.handleChange}
                />
              </Card.Title>
              {formik.values.chesee.includes ? (
                <Form.Select
                  type="checkbox"
                  name="chesee.value"
                  className="my-2"
                  onChange={formik.handleChange}
                >
                  <option value="normal">Normal</option>
                  <option value="light">Light</option>
                  <option value="extra">Extra</option>
                </Form.Select>
              ) : (
                false
              )}
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="my-2">
            <Card.Body>
              <Card.Title className="d-flex align-items-center">
                Sos
                <Form.Check
                  type="checkbox"
                  name="sauce.includes"
                  className="mx-2"
                  onChange={formik.handleChange}
                />
              </Card.Title>
              {formik.values.sauce.includes ? (
                <Form.Select
                  type="checkbox"
                  name="sauce.value"
                  className="my-2"
                  onChange={formik.handleChange}
                >
                  <option value="domates sosu">Domates Sosu</option>
                  <option value="özel sos">Özel Sos</option>
                  <option value="ranch sos">Ranch Sos</option>
                </Form.Select>
              ) : (
                false
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* toppings and meat */}
      <Card className="my-2">
        <Card.Body>
          <Card.Title className="d-flex align-items-center">
            Etler Çeşitleri
          </Card.Title>
          <Row className="mt-4">
            {meat.map((meat, index) => {
              return (
                <Col key={index} md={4} className="my-2">
                  <Form.Check
                    type="checkbox"
                    name="toppingMeat"
                    className="mx-2"
                    value={meat.value}
                    label={meat.label}
                    onChange={formik.handleChange}
                  />
                </Col>
              );
            })}
          </Row>
        </Card.Body>
      </Card>
      <Card className="my-2">
        <Card.Body>
          <Card.Title className="d-flex align-items-center">
            Malzemeler
          </Card.Title>
          <Row className="mt-4">
            {nonmeat.map((nonmeat, index) => {
              return (
                <Col key={index} md={4} className="my-2">
                  <Form.Check
                    type="checkbox"
                    className="mx-2"
                    name="toppingNonMeat"
                    label={nonmeat.label}
                    value={nonmeat.value}
                    onChange={formik.handleChange}
                  />
                </Col>
              );
            })}
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
              onChange={formik.handleChange}
              {...formik.getFieldProps("specialInstruction")}
            />
          </Row>
        </Card.Body>
      </Card>
    </>
  );
}

export default Order;
