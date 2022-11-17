import React from "react";
import { Card, Col, Container, Form, Nav, Row } from "react-bootstrap";
import Order from "../components/Order";
import Summary from "../components/Summary";
import { useFormik } from "formik";

function Home() {
  const validate = (values) => {
    const errors = {};

    if (!values.size) {
      errors.size = "Required size";
    }
    if (!values.crust) {
      errors.crust = "Required crust";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      size: "",
      crust: "",
      chesee: {
        includes: false,
        value: "",
      },
      sauce: {
        includes: false,
        value: "",
      },
      toppingMeat: [],
      toppingNonMeat: [],
      specialInstruction: "",
    },
    onSubmit: (values) => {
      JSON.stringify(values, null, 2);
    },
    validate,
  });

  return (
    <div>
      <Container className="my-4">
        <Card className="shadow-lg p-4">
          <Form onSubmit={formik.handleSubmit}>
            <Row>
              <Col md={8}>
                <Order formik={formik} />
              </Col>
              <Col md={4}>
                <Summary formik={formik} />
              </Col>
            </Row>
          </Form>
        </Card>
      </Container>
    </div>
  );
}

export default Home;
