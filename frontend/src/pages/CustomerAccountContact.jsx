import react, { useState } from "react";
import { useForm } from 'react-hook-form'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import { Image } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';




const CustomerAccountContact = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data)
    };
    console.log(errors);

    //Modal





    const style = {
        formInput: {
            border: '1px solid black',
            backgroundColor: '#F2F5F8'
        }
    }



    return (
        <div
            style={{
                minHeight: "100vh",
                // border: "1px solid black",
            }}
        >
            <Container
                className="col-lg-5 col-md-6 col-sm-12  mx-auto"
                style={{
                    marginTop: '200px',
                    marginBottom: '1rem',

                    // border: "1px solid black",
                }}
            >
                <h1
                    style={{
                        fontSize: '40px',
                        fontWeight: '400'
                    }}
                >
                    Contact
                </h1>

            </Container>

            <Stack
                className="col-lg-5 col-md-6 col-sm-12  mx-auto fw-bold rounded-2"
                direction="horizontal"
                style={{
                    backgroundColor: '#F2F5F8',
                    padding: '4rem 0rem 4rem 1rem',
                    // border: '1px solid black',
                }}
            >



                <Stack
                    className="col-7 align-items-center"
                    style={{
                        // border: "1px solid black",
                        marginRight: '1rem'
                    }}
                >
                    <Image
                        src="https://dummyimage.com/640x360/eee/aaa"
                        alt="Circle image"
                        roundedCircle
                        style={{
                            width: '150px',
                            height: '150px',

                        }}
                    />

                    <Button
                        onClick={handleShow}
                        className="col-8"
                        type="submit"
                        style={{
                            marginLeft: '2rem',
                            color: '#EFE9E5',
                            backgroundColor: '#476685',
                            padding: '10px',
                            borderRadius: '10px'
                        }}
                    >
                        Change/Remove
                    </Button>

                    {/* <a
                        href="#"
                        className="text-secondary text-decoration-none"
                        onClick={() => { }}>
                        upload/update photo
                    </a> */}

                    <Modal show={show} onHide={handleClose} centered>
                        <Modal.Header closeButton>
                            <Modal.Title className="w-100 d-flex justify-content-center" >Profile Picture</Modal.Title>
                        </Modal.Header>
                        <Modal.Body className="d-flex justify-content-center">
                            <Image
                                src="https://dummyimage.com/640x360/eee/aaa"
                                alt="Circle image"
                                roundedCircle
                                style={{
                                    width: '150px',
                                    height: '150px',

                                }}
                            />
                        </Modal.Body>
                        <Modal.Footer className="d-flex justify-content-evenly" >
                            <Button className="col-4" style={{ backgroundColor: '#476685' }} onClick={handleClose}>
                                Change
                            </Button>
                            <Button className="col-4" style={{ backgroundColor: '#476685' }} onClick={handleClose}>
                                Remove
                            </Button>
                        </Modal.Footer>
                    </Modal>


                </Stack>

                <Container>
                    <Stack
                        className="col-10"
                    >
                        <Form onSubmit={handleSubmit(onSubmit)}>

                            <Stack
                                direction="horizontal"
                                className="col-12"
                            >
                                <Form.Group
                                    className="mb-3"
                                    style={{
                                        marginRight: '1rem'
                                    }}
                                >
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control style={style.formInput} type="text" placeholder="First Name" {...register("firstName", { required: true, })} />
                                </Form.Group>

                                <Form.Group className="mb-3" >
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control style={style.formInput} type="text" placeholder="Last Name" {...register("lastName", { required: true, })} />
                                </Form.Group>
                            </Stack>


                            <Form.Group className="mb-3" >
                                <Form.Label>Email</Form.Label>
                                <Form.Control style={style.formInput} type="email" placeholder="Email" {...register("email", { required: true, maxLength: 80 })} />
                            </Form.Group>

                            <Form.Group className="mb-3" >
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control style={style.formInput} type="text" placeholder="Phone Number" {...register("phoneNumber", { required: true, })} />
                            </Form.Group>

                            <Form.Group className="mb-3 col-5" >
                                <Form.Label>Zip Code</Form.Label>
                                <Form.Control style={style.formInput} type="text" placeholder="Zip Code" {...register("zipcode", { required: true, })} />
                            </Form.Group>







                            <Stack
                                direction="horizontal"
                                className="col-lg-10 col-md-10 col-sm-12 "
                                style={{
                                    marginBottom: '1rem',
                                    marginTop: '2rem'
                                }}
                            >
                                <Button
                                    className="col-5"
                                    type="submit"
                                    style={{
                                        // marginLeft: '2rem',
                                        color: 'black',
                                        backgroundColor: 'transparent',
                                        padding: '10px',
                                        border: '1px solid black',
                                        borderRadius: '10px'
                                    }}
                                >
                                    Cancel
                                </Button>

                                <Button
                                    className="col-5"
                                    variant="primary"
                                    type="submit"
                                    style={{
                                        marginLeft: '2rem',
                                        color: '#EFE9E5',
                                        backgroundColor: '#476685',
                                        padding: '10px',
                                        borderRadius: '10px'
                                    }}
                                >
                                    Save
                                </Button>
                            </Stack>



                        </Form>


                    </Stack>
                </Container>

            </Stack>
        </div>
    )
}

export default CustomerAccountContact;