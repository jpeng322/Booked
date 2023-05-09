import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useActionData, useNavigate, useSubmit } from 'react-router-dom'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';



const Login = () => {
  const submit = useSubmit();
  const actionData = useActionData();
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  useEffect(() => {
    if (actionData && actionData.status == 200 && actionData.data.success == true) {
      console.log("welcome back PROVIDER user");
      navigate("/");
    }
  }, [actionData])

  const onSubmit = (data) => {
    console.log(data);

    submit(data, {
      method: "post",
      action: "/auth/login"
    });
  }


  // console.log(actionData);








  return (
    <div
      style={{
        minHeight: "100vh",
        border: "1px solid black",
      }}
    >
      <Stack
        className="col-lg-3 col-md-6 col-sm-10  mx-auto fw-bold rounded-2"
        // className="d-flex align-items-center justify-content-center fw-bold"
        style={{
          backgroundColor: 'lightgrey',
          padding: '4rem',
          border: '1px solid black',
          marginTop: '250px',
          // marginRight: '500px',
          // marginLeft: '500px',
          // minHeight: '100vh'
        }}
      >
        <Container
          style={{
            // border: '1px solid black',
            paddingTop: '4rem'
          }}
        >
          <Row>
            <Col
            // lg={{ span: 4, offset: 4 }}
            // md={{ span: 0, offset: 0 }}
            >
              <Form onSubmit={handleSubmit(onSubmit)}>
                <h1 className="text-center">Provider Login</h1>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Username</Form.Label>
                  <Form.Control type="email" placeholder="Email" {...register("email", { required: true, maxLength: 80 })} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="text" placeholder="Password" {...register("password", { required: true, maxLength: 100 })} />
                </Form.Group>

                <Stack
                  direction="horizontal"
                  gap={3}
                  className="col-lg-12 col-md-12 col-sm-10 justify-content-center mx-auto"
                  style={{
                    // paddingRight: '2rem',
                    // paddingLeft: '2rem',
                    paddingTop: '1rem',
                    paddingBottom: '1rem',
                    // border: '1px solid black',
                  }}
                >
                  <a href="#" className="text-primary" onClick={() => { }}>
                    Forgot username?
                  </a>
                  <div class="vr"></div>
                  <a href="#" className="text-primary" onClick={() => { }}>
                    Forgot password?
                  </a>
                </Stack>

                <div
                  className="d-flex align-items-center justify-content-center"
                  style={{
                    // border: '1px solid black',
                    paddingBottom: '2rem',
                  }}
                >
                  <a href="#" className="text-primary" onClick={() => navigate("/auth/signup") }>
                    Create an account
                  </a>
                </div>

                <Stack className="col-lg-10 col-md-10 col-sm-10 mx-5">
                  <Button
                    variant="primary"
                    type="submit"
                    className='rounded-pill'
                    style={{
                      padding: '12px',
                      fontWeight: 'bold',
                      fontSize: '20px'
                    }}
                  >
                    Login
                  </Button>
                </Stack>



              </Form>
            </Col>
          </Row>
        </Container>


      </Stack>







      {/* <div>LOGIN</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="email" placeholder="Email" {...register("email", { required: true, maxLength: 80 })} />
        <input type="text" placeholder="Password" {...register("password", { required: true, maxLength: 100 })} />

        <input type="submit" />
      </form> */}
    </div>

  )
}


export default Login;
