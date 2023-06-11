import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useActionData, useNavigate, useSubmit, Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import Image from 'react-bootstrap/Image';
import bgImg from '../images/login-background.png'
import logo from '../images/logo.png'



// This will be the Client login. For now it only logs in provider.

const CustomerLogin = () => {
    const submit = useSubmit();
    const actionData = useActionData();
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();

    console.log(actionData)

    useEffect(() => {
        if (actionData && actionData.status == 200 && actionData.data.success == true) {
            console.log("welcome back CLIENT user");
            navigate("/");
        }
    }, [actionData])

    const onSubmit = (data) => {
        console.log(data);

        submit(data, {
            method: "post",
            action: "/customer/login"
        });
    }




    const style = {
        label: {
            color: '#263646',
            fontSize: '24px',
            // border: '1px solid black',
            marginBottom: '0',
            fontWeight: '550',
            marginLeft: '6px'
        },
        control: {
            border: '1px solid #B1660E',
            borderRadius: '10px'

        },
        hypertext: {
            color: '#263646',
            fontSize: '12px',
            textDecoration: 'none'
        },
        hypertextBottom: {
            color: '#263646',
            fontSize: '16px',
            textDecoration: 'none',
            fontWeight: '500'
        },

    }


    return (
        <div
            style={{
                minHeight: "100vh",
                // border: "1px solid black",
                backgroundImage: `url(${bgImg})`,
                backgroundRepeat: "no-repeat",
                backgroundAttachment: 'fixed',
                backgroundPosition: "center center",
                backgroundSize: "cover",
                overflow: 'auto'
            }}
        >
            <Stack
                className="col-lg-3 col-md-6 col-sm-10  mx-auto fw-bold rounded-2"
                style={{
                    backgroundColor: '#F9EDB4',
                    padding: '2rem 4rem 3rem 4rem',
                    border: '2px solid #B1660E',
                    marginTop: '120px',
                    boxShadow:  '-2px 2px 15px 0px rgba(0,0,0,0.7)'
                }}
            >
                <Container
                    style={{
                        // border: '1px solid black',
                        // paddingTop: '4rem'
                    }}
                >

                    <Col
                        className='d-flex justify-content-center'
                        style={{
                            // border: '1px solid #B1660E',
                            padding: '0px',
                            height: '100%'
                        }}
                    >
                        <Image
                            src={logo}
                            style={{
                                // border: '1px solid blue',
                                width: '12rem',
                                height: '10rem',
                            }}
                        />
                    </Col>

                    <h1
                        className="text-center fw-normal"
                        style={{
                            // border: '1px solid blue',
                            color: '#263646',
                            fontSize: '38px'
                        }}
                    >
                        User Login
                    </h1>

                    <Row>
                        <Col
                        >
                            <Form onSubmit={handleSubmit(onSubmit)}>

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label style={style.label}>Username</Form.Label>
                                    <Form.Control style={style.control} type="email" placeholder="Email" {...register("email", { required: true, maxLength: 80 })} />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label style={style.label}>Password</Form.Label>
                                    <Form.Control style={style.control} type="text" placeholder="Password" {...register("password", { required: true, maxLength: 100 })} />
                                </Form.Group>

                                <Stack
                                    direction="horizontal"
                                    gap={3}
                                    className="col-lg-12 col-md-12 col-sm-10 justify-content-center mx-auto"
                                    style={{
                                        paddingTop: '1rem',
                                        paddingBottom: '1rem',
                                        // border: '1px solid black',
                                    }}
                                >
                                    <a href="#" style={style.hypertext} onClick={() => { }}>
                                        Forgot username?
                                    </a>
                                    <div class="vr"></div>
                                    <a href="#" style={style.hypertext} onClick={() => { }}>
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
                                    <Link to={"/customer/signup"} style={style.hypertextBottom}>Create an account</Link>
                                </div>

                                <Stack className="col-lg-12 col-md-12 col-sm-12">
                                    <Button
                                        type="submit"
                                        className='rounded-pill'
                                        style={{
                                            padding: '8px',
                                            margin: '20px 10px 20px 10px',
                                            fontWeight: '400',
                                            fontSize: '25px',
                                            color: '#F9EDB4',
                                            backgroundColor: '#F1A855',
                                            border: '2px solid #263646'
                                        }}
                                    >
                                        Login
                                    </Button>
                                </Stack>

                            </Form>

                            <Col
                                className='d-flex justify-content-center '
                            >
                                 <Link to={"/provider/login"} style={style.hypertextBottom}>Login as Customer</Link>
                            </Col>


                        </Col>
                    </Row>
                </Container>


            </Stack>

        </div>

    )
}

export default CustomerLogin;