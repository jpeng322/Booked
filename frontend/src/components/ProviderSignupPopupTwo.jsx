import React, { useState, useEffect } from 'react'
import bgImg from '../images/popup-img.png'
import { Col, Container, Stack } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useForm } from 'react-hook-form';
import { useStateMachine } from 'little-state-machine';
import updateSignupAction from '../updateSignupAction';


function ProviderSignupPopupTwo({ open }) {

    const [formCompleted, setFormCompleted] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { actions, state } = useStateMachine({ updateSignupAction });

    // useEffect(() => {
    //     if(formCompleted){
    //         // submit(state, {
    //         //     method: 'post',
    //         //     action: '/customer/onboarding'
    //         // });
    //     }
    // }, [])

    const onSubmit = data => {
        console.log(data);

        actions.updateSignupAction(data);



    }
    console.log(state);

    return (
        <>
            {
                open === true ?
                 <div style={{ 
                    height: '500px',
                    position: 'fixed',
                    right: '0',
                    bottom: '0',
                    zIndex: 1001,
                    }}>
                <Col
                    style={{
                        border: '1px solid black',
                        backgroundImage: `url(${bgImg})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover', // Changed from 'cover' to 'contain'
                        backgroundRepeat: 'no-repeat',
                        maxWidth: '500px',
                        width: '100%',
                        height: '15%',
                    }}
                >


                </Col>

                <Col
                    style={{
                        // backgroundImage: `url(${bgImg})`,
                        border: '1px solid black',
                        backgroundColor: '#F6C58E',
                        // backgroundSize: 'cover', // Changed from 'cover' to 'contain'
                        // backgroundRepeat: 'no-repeat',
                        maxWidth: '500px',
                        width: '100%',
                        height: '85%'
                    }}
                >
                    <Stack
                        className='col-lg-10 col-md-10 col-sm-10 mx-auto'

                    >
                        <p style={{ fontSize: '24px' }}>Brandi, new customers are waiting</p>
                        <br></br>
                        <p>There were 562 Booked beautician jobs in near your last month.</p>

                        <Form onSubmit={handleSubmit(onSubmit)}>
                            <Form.Group className="mb-3" controlId="formBasicPhone">

                                <Form.Control type="text" placeholder="Phone number" {...register("phone", { required: true, maxLength: 80 })} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">

                                <Form.Control type="password" placeholder="Password"{...register("password", { required: true, maxLength: 80 })} />
                            </Form.Group>


                            <p style={{ fontSize: '12px', fontWeight: '400' }}>By signing up with email, Facebook, or Google, you agree to our Terms of Use and Privacy Policy.</p>
                            <br></br>

                            <Button
                                className="col-lg-12 col-md-12 col-sm-12"
                                type="submit"
                                style={{
                                    backgroundColor: '#476685',
                                    color: '#FCD19C',
                                    padding: '10px'
                                }}
                            >
                                Sign up
                            </Button>

                        </Form>
                        <br></br>

                        <p style={{ fontSize: '12px', fontWeight: '400' }}>Already have account? <a href='#'>Log in.</a></p>


                    </Stack>



                </Col>
            </div>
            :
            null
            }
           
        </>

    )
}

export default ProviderSignupPopupTwo
