import React, { useState, useEffect } from "react";
import bgImg from "../images/popup-img.png";
import { Col, Container, Spinner, Stack } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useForm } from "react-hook-form";
import { useStateMachine } from "little-state-machine";
import updateSignupAction from "../updateSignupAction";
import { IoIosClose } from "react-icons/io";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ProviderSignupPopupTwo({ open, setOpenPopupTwo, showAlert }) {
  const navigate = useNavigate();
  // const [formCompleted, setFormCompleted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [saveState, setSaveState] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();
  const { actions, state } = useStateMachine({ updateSignupAction });

  // useEffect(() => {
  //     if(formCompleted){
  //         // submit(state, {
  //         //     method: 'post',
  //         //     action: ''
  //         // });
  //     }
  // }, [])

  useEffect(() => {
    if (saveState) {
      console.log(`${import.meta.env.VITE_PORT}/auth/signup/provider`);



      const fetchProviderSignup = async () => {
        console.log(state);
        try {
          const providerSignupResponse = await axios({
            method: "post",
            url: `${import.meta.env.VITE_PORT}/auth/signup/provider`,
            data: {
              email: state.email,
              password: state.password,
              // fname: "request.body.fname",
              // lname: "request.body.lname",
              phone: state.phone,
              location: state.location,
              services: state.services,
            },
          });

          if (providerSignupResponse) {
            // const providerId = providerSignupResponse.data.newProvider.provider_id;
            //   navigate(`/onboarding/${providerId}`);

            navigate("/provider/login");

            // console.log(providerSignupResponse);
          }
        } catch (e) {
          console.log(e);
          setIsLoading(false)
          setSaveState(false)
          showAlert();
        }
      };

      fetchProviderSignup();
    }

  }, [saveState]);

  const onSubmit = (data) => {
    console.log(data);

    setIsLoading(true);

    actions.updateSignupAction(data);

    setSaveState(true);
    // try {
    //   const providerSignupResponse = await axios({
    //     method: "post",
    //     url: `http://localhost:${
    //       import.meta.env.VITE_PORT
    //     }/auth/signup/provider`,
    //     data: {
    //       email: state.email,
    //       password: state.password,
    //       fname: "request.body.fname",
    //       lname: "request.body.lname",
    //       phone: state.phone,
    //       location : state.location,
    //       services: state.services,
    //     },
    //   });

    //   if (providerSignupResponse) {
    //     // const providerId = providerSignupResponse.data.newProvider.provider_id;
    //     //   navigate(`/onboarding/${providerId}`);

    //       navigate("/provider/login")

    //     // console.log(providerSignupResponse);
    //   }
    // } catch (e) {
    //   console.log(e);
    // }
  };
  console.log(state);

  //Cleanup Form
  useEffect(() => {
    // console.log('isSubmitSuccessful: ', isSubmitSuccessful);
    // if(isSubmitSuccessful || !isSubmitSuccessful){
      reset();
    // }
  },[isSubmitSuccessful, reset])


  return (
    <>
      {open === true ? (
        <div
          style={{
            height: "500px",
            position: "fixed",
            right: "0",
            bottom: "0",
            zIndex: 1001,
          }}
        >
          <Button
            onClick={() => setOpenPopupTwo(false)}
            style={{
              position: "absolute",
              right: "12px",
              bottom: "28rem",
              fontSize: "23px",
              padding: "0px",
              backgroundColor: "#F6C58E",
              color: "black",
            }}
          >
            <IoIosClose />
          </Button>

          <Col
            style={{
              border: "1px solid black",
              backgroundImage: `url(${bgImg})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              maxWidth: "500px",
              width: "100%",
              height: "15%",
            }}
          ></Col>

          <Col
            style={{
              border: "1px solid black",
              backgroundColor: "#F6C58E",
              maxWidth: "500px",
              width: "100%",
              height: "85%",
            }}
          >
            <Stack className="col-lg-10 col-md-10 col-sm-10 mx-auto">
              <p style={{ fontSize: "24px" }}>
                Hey, new customers are waiting
              </p>
              <br></br>
              <p>
                There were 562 Booked jobs in near your last month.
              </p>

              <Form onSubmit={handleSubmit(onSubmit)}>
                <Stack direction="horizontal" className="col-12">
                  <Form.Group
                    className="mb-3"
                    style={{
                      marginRight: "1rem",
                    }}
                  >
                    <Form.Control
                      type="text"
                      placeholder={state.email}
                      disabled
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Control
                      type="text"
                      placeholder="phone"
                      {...register("phone", { required: true })}
                    />
                  </Form.Group>
                </Stack>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    {...register("password", { required: true, maxLength: 80 })}
                  />
                </Form.Group>

                <p style={{ fontSize: "12px", fontWeight: "400" }}>
                  By signing up with email, Facebook, or Google, you agree to
                  our Terms of Use and Privacy Policy.
                </p>
                <br></br>

                <Button
                  className="col-lg-12 col-md-12 col-sm-12"
                  type="submit"
                  style={{
                    backgroundColor: "#476685",
                    color: "#FCD19C",
                    padding: "10px",
                  }}
                  disabled={isLoading}
                >
                  {
                    isLoading ? (
                      <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                      />
                    )
                      :
                      ("Sign up")
                  }
                  {/* Sign up */}
                </Button>
              </Form>
              <br></br>

              <p style={{ fontSize: "12px", fontWeight: "400" }}>
                Already have account?{" "}
                <Link to={"/provider/login"}>Log in.</Link>
              </p>
            </Stack>
          </Col>
        </div>
      ) : null}
    </>
  );
}

export default ProviderSignupPopupTwo;
