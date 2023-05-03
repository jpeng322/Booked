import react from "react";
import { useForm } from 'react-hook-form'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import { Image } from "react-bootstrap";



const CustomerAccountContact = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data)
    };
    console.log(errors);




    return (
        <div
            style={{
                minHeight: "100vh",
                // border: "1px solid black",
            }}
        >
            <Container
                className="col-lg-6 col-md-6 col-sm-12  mx-auto fw-bold"
                style={{
                    marginTop: '200px',
                    marginBottom: '1rem'
                }}
            >
                <h1 className="text-right">Contact</h1>

            </Container>

            <Stack
                className="col-lg-6 col-md-6 col-sm-12  mx-auto fw-bold rounded-2"
                direction="horizontal"
                style={{
                    backgroundColor: 'lightgrey',
                    padding: '4rem',
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
                            width: '100px',
                            height: '100px',
                        }}
                    />

                    <a
                        href="#"
                        className="text-secondary text-decoration-none"
                        onClick={() => { }}>
                        upload/update photo
                    </a>
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
                                    <Form.Control type="text" placeholder="First Name" {...register("firstName", {})} />
                                </Form.Group>

                                <Form.Group className="mb-3" >
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control type="text" placeholder="Last Name" {...register("lastName",)} />
                                </Form.Group>
                            </Stack>


                            <Form.Group className="mb-3" >
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Email" {...register("email", { required: true, maxLength: 80 })} />
                            </Form.Group>

                            <Form.Group className="mb-3" >
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control type="text" placeholder="Phone Number" {...register("phoneNumber", {})} />
                            </Form.Group>

                            <Form.Group className="mb-3 col-5" >
                                <Form.Label>Zip Code</Form.Label>
                                <Form.Control type="text" placeholder="Zip Code" {...register("zipcode", {})} />
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
                                    variant="primary"
                                    type="submit"
                                >
                                    Cancel
                                </Button>

                                <Button
                                    className="col-5"
                                    variant="primary"
                                    type="submit"
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