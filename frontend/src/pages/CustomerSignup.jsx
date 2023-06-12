
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate} from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import bgImg from '../images/signup-customer.png'
import { useStateMachine } from "little-state-machine";
import updateSignupAction from "../updateSignupAction";


const CustomerSignup = () => {

  console.log(import.meta.env.VITE_PORT)
 
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm();
  const { actions } = useStateMachine({ updateSignupAction });

 

  const onSubmit = (data) => {
    console.log(data);
    
    actions.updateSignupAction(data);
    navigate("/customer/onboarding");

  };
  console.log(errors);
  // console.log(actionData);


  return (

    <div
      style={{
        minHeight: "100vh",
        // border: "1px solid black",
        backgroundImage: `url(${bgImg})`,
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        overflow: 'hidden'
      }}
    >
      <Stack
        className="col-lg-3 col-md-6 col-sm-10  mx-auto rounded-4"
        style={{
          backgroundColor: '#476685',
          padding: '.5rem 4rem 3rem 4rem',
          // border: '1px solid black',
          marginTop: '90px',
          maxWidth: '600px',
          width: '100%',
          color: 'white',
          // height: '1071px'
        }}
      >
        {/* <Container
            style={{
              border: '1px solid black',
              paddingTop: '1rem'
            }}
          > */}

        <h1 className="text-center #F6C58E" style={{color: '#F6C58E'}}>Create your account</h1>
        <Row>
          <Col
          >
            <Form onSubmit={handleSubmit(onSubmit)}>


              <Stack
                direction="horizontal"
                gap={3}
                // className="col-12"
                style={{
                  border: '1px solid black',
                }}
              >
                <Form.Group
                  className="mb-3 col-5"
                >
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="text" placeholder="First Name" {...register("firstName", {})} />
                </Form.Group>

                <Form.Group
                  className="mb-3 col-5 ms-auto"
                >
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="text" placeholder="Last Name" {...register("lastName", {})} />
                </Form.Group>

              </Stack>


              <Form.Group className="mb-3" >
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Email" {...register("email", { required: true, maxLength: 80 })} />
              </Form.Group>

              <Form.Group className="mb-3" >
                <Form.Label>Password</Form.Label>
                <Form.Control type="text" placeholder="Password" {...register("password", { required: true, maxLength: 72 })} />
              </Form.Group>



              <Form.Group className="mb-3" >
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="text" placeholder="Phone Number" {...register("phoneNumber", {})} />
              </Form.Group>



              <div
                style={{
                  border: '1px solid black',
                  fontSize: '11px',
                }}
              >

                <li
                  style={{
                    listStyleType: 'none'
                  }}
                >Your password must:
                  <ul>
                    <li>be 8 to 72 character long</li>
                    <li>not contain your name or email</li>
                    <li>not be commonly used, easily guessed
                      or contains any variation of the word “Booked”</li>

                  </ul>
                </li>

                <p
                  style={{
                    fontSize: '11px',
                    textAlign: 'left'
                  }}
                >By clicking Create Account, you agree to the Terms of Use, and Privacy Policy.</p>

              </div>

              {/* <Stack
                  direction="horizontal"
                  gap={3}
                  className="col-lg-12 col-md-12 col-sm-10 justify-content-center mx-auto"
                  style={{
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
                </Stack> */}

              {/* <div
                  className="d-flex align-items-center justify-content-center"
                  style={{
                    // border: '1px solid black',
                    paddingBottom: '2rem',
                  }}
                >
                  <a href="#" className="text-primary" onClick={() => navigate("/auth/signup")}>
                    Join our network
                  </a>
                </div> */}

              <Stack
                style={{
                  border: '1px solid black'
                }}
              >
                <Button
                  variant="primary"
                  size="lg"
                  type="submit"
                  style={{
                    // padding: '12px',
                    // fontWeight: 'bold',
                    fontSize: '22px',
                    width: '100%',
                    color: 'black',
                    backgroundColor: '#F6C58E'
                  }}
                >
                  Create Account
                </Button>
              </Stack>



            </Form>
          </Col>
        </Row>
        {/* </Container> */}


      </Stack>



    </div>



  );
};

export default CustomerSignup;
