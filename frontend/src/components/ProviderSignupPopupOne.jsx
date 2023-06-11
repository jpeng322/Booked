import React from 'react'
import bgImg from '../images/popup-img.png'
import { Col, Container, Stack } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useForm } from 'react-hook-form';
import { useStateMachine } from 'little-state-machine';
import updateSignupAction from '../updateSignupAction';

function ProviderSignupPopupOne({ open, setOpenPopupTwo }) {


    const { register, handleSubmit, formState: { errors } } = useForm();
    const { actions } = useStateMachine({ updateSignupAction })
    const onSubmit = data => {
        console.log(data);

        actions.updateSignupAction(data);

        setOpenPopupTwo(true)

    }


    console.log(errors);
    return (
        <>
            {
                open === true ?

                    <div style={{ 
                        height: '500px',
                        position: 'fixed',
                        right: '0',
                        bottom: '0',
                        zIndex: 1000,
                        // marginRight: '0'
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
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Control type="email" placeholder="Email address" {...register("email", { required: true, maxLength: 80 })} />
                                    </Form.Group>

                                    <Button
                                        className="col-lg-12 col-md-12 col-sm-12"
                                        type="submit"
                                        style={{
                                            backgroundColor: '#476685',
                                            color: '#FCD19C',
                                            padding: '10px'
                                        }}
                                    >
                                        Sign up with email
                                    </Button>

                                </Form>
                                <br></br>
                                <p style={{ fontSize: '12px', fontWeight: '400' }}>By signing up with email, Facebook, or Google, you agree to our Terms of Use and Privacy Policy.</p>

                            </Stack>



                        </Col>
                    </div>
                    :
                    null
            }

        </>
    )


}

export default ProviderSignupPopupOne
