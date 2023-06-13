import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useActionData, useNavigate, useSubmit } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";

const Signup = () => {
  console.log(import.meta.env.VITE_PORT);
  const submit = useSubmit();
  const actionData = useActionData();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (
      actionData &&
      actionData.status == 201 &&
      actionData.data.success == true
    ) {
      console.log("Success new user!");
      navigate("/login/client");
    }
  }, [actionData]);

  const onSubmit = (data) => {
    console.log(data);

    submit(data, {
      method: "post",
      action: "/auth/signup/client",
    });
  };
  console.log(errors);
  // console.log(actionData);

  return (
    <>
      <div
        style={{
          minHeight: "100vh",
          // border: "1px solid black",
        }}
      >
        <Stack
          className="col-lg-3 col-md-6 col-sm-10  mx-auto fw-bold rounded-2"
          style={{
            backgroundColor: "lightgrey",
            padding: "4rem",
            // border: '1px solid black',
            marginTop: "90px",
          }}
        >
          <Container
            style={{
              // border: '1px solid black',
              paddingTop: "1rem",
            }}
          >
            <Row>
              <Col>
                <Form onSubmit={handleSubmit(onSubmit)}>
                  <h1 className="text-center">Sign Up</h1>
                  <Form.Group className="mb-3">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Email"
                      {...register("email", { required: true, maxLength: 80 })}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Password"
                      {...register("password", {
                        required: true,
                        maxLength: 100,
                      })}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="First Name"
                      {...register("firstName", {})}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Last Name"
                      {...register("lastName", {})}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Phone Number"
                      {...register("phoneNumber", {})}
                    />
                  </Form.Group>

                  <Stack
                    direction="horizontal"
                    gap={3}
                    className="col-lg-12 col-md-12 col-sm-10 justify-content-center mx-auto"
                    style={{
                      paddingTop: "1rem",
                      paddingBottom: "1rem",
                      // border: '1px solid black',
                    }}
                  >
                    <a href="#" className="text-primary" onClick={() => {}}>
                      Forgot username?
                    </a>
                    <div class="vr"></div>
                    <a href="#" className="text-primary" onClick={() => {}}>
                      Forgot password?
                    </a>
                  </Stack>

                  <div
                    className="d-flex align-items-center justify-content-center"
                    style={{
                      // border: '1px solid black',
                      paddingBottom: "2rem",
                    }}
                  >
                    <a
                      href="#"
                      className="text-primary"
                      onClick={() => navigate("/auth/signup")}
                    >
                      Join our network
                    </a>
                  </div>

                  <Stack className="col-lg-10 col-md-10 col-sm-10 mx-5">
                    <Button
                      variant="primary"
                      type="submit"
                      className="rounded-pill"
                      style={{
                        padding: "12px",
                        fontWeight: "bold",
                        fontSize: "20px",
                      }}
                    >
                      Signup
                    </Button>
                  </Stack>
                </Form>
              </Col>
            </Row>
          </Container>
        </Stack>
      </div>
    </>
  );
};

export default Signup;
