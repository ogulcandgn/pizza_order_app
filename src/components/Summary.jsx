import React from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";

function Summary({ formik }) {
  return (
    <>
      <Card>
        <Card.Img
          variant="top"
          src="https://images.pexels.com/photos/2619970/pexels-photo-2619970.jpeg?cs=srgb&dl=pexels-engin-akyurt-2619970.jpg&fm=jpg&_gl=1*7nmsf6*_ga*MjA4MzMyNTczMC4xNjYzNzU3MzEz*_ga_8JE65Q40S6*MTY2ODYyMzE1NC43LjEuMTY2ODYyMzI3MC4wLjAuMA.."
        />
        <Card.Body>
          <Card.Text>
            <pre>{JSON.stringify(formik.values, null, 2)}</pre>
          </Card.Text>
        </Card.Body>
        <Button variant="success" type="Submit">
          Sipariş Ver
        </Button>
      </Card>
    </>
  );
}

export default Summary;
