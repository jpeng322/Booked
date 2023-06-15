import React, { useEffect, useState } from "react";
import bgImg from '../images/signup-customer.png'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import Button from "react-bootstrap/Button";
import { useForm } from 'react-hook-form'
import Form from 'react-bootstrap/Form';
import { useStateMachine } from "little-state-machine";
import updateSignupAction from "../updateSignupAction";
import { useActionData, useNavigate, useSubmit } from "react-router-dom";
import { Container } from "react-bootstrap";

const CustomerOnboarding = () => {
    const [formCompleted, setFormCompleted] = useState(false)

    const submit = useSubmit();
    const actionData = useActionData();
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { actions, state } = useStateMachine({ updateSignupAction });
    // console.log("State outside the onSubmit : ", state);

    useEffect(() => {
        if (formCompleted) {
            submit(state, {
                method: 'post',
                action: '/customer/onboarding'
            });
        }

    }, [formCompleted])

    useEffect(() => {
        console.log("ACTION DATA")
        console.log(actionData)

        if (actionData && actionData.status == 201 && actionData.data.success == true) {
            console.log("Success new user!")
            navigate("/customer/login");
        }

    }, [actionData])

    const onSubmit = (data) => {
        console.log(data);
        actions.updateSignupAction(data);

        // console.log(state);
        setFormCompleted(true);

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
            <Container>
                <Stack
                    className="col-xxl-12 col-lg-3 col-md-8 col-sm-10  mx-auto rounded-4"
                    style={{
                        backgroundColor: '#476685',
                        padding: '.5rem 4rem 3rem 4rem',
                        border: '1px solid black',
                        marginTop: '90px',
                        maxWidth: '800px',
                        width: '100%',
                        color: 'white',

                    }}
                >
                    <h1 className="text-center #F6C58E" style={{ color: '#F6C58E' }}>Select any services you may need.</h1>
                    <p>We will suggest services based on what you select below.</p>

                    {/* <Row> */}
                        <Col>
                            <Form onSubmit={handleSubmit(onSubmit)}>
                                <Col
                                    lg={{ span: 4, offset: 4 }} md={{ span: 4, offset: 4 }} sm={{ span: 6, offset: 3 }} xs={{ span: 8, offset: 2 }}
                                    style={{
                                        // border: '1px solid black'
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '10px',
                                        margin: '1rem auto'
                                    }}
                                >
                                    {/* <Stack 
                                    gap={2}
                                    className="col-xxl-4 col-lg-4 col-md-6 col-sm-6  mx-auto"
                                    > */}
                                        <Form.Check {...register("preferredServices")} label="Automotive" type="radio" value="Automotive" />
                                        <Form.Check {...register("preferredServices")} label="Lawn or landscaping" type="radio" value="Lawn or landscaping" />
                                        <Form.Check {...register("preferredServices")} label="Home improvement" type="radio" value="Home improvement" />
                                        <Form.Check {...register("preferredServices")} label="Pet Care" type="radio" value="Pet Care" />
                                        <Form.Check {...register("preferredServices")} label="Designer and artists" type="radio" value="Designer and artists" />
                                        <Form.Check {...register("preferredServices")} label="Personal care" type="radio" value="Personal care" />
                                        <Form.Check {...register("preferredServices")} label="Technology" type="radio" value="Technology" />
                                        <Form.Check {...register("preferredServices")} label="Event planning" type="radio" value="Event planning" />

                                    {/* </Stack> */}

                                </Col>


                                <Stack>
                                    <Button
                                        // variant="primary"
                                        size="lg"
                                        type="submit"
                                        style={{
                                            border: '1px solid black',
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
                    {/* </Row> */}

                </Stack>
            </Container>










        </div>
    )
}

export default CustomerOnboarding;