import react, { useEffect, useState } from 'react'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import bgImg from '../images/provider-hero-bg.png';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import Alert from 'react-bootstrap/Alert';
import firstPic from '../images/provider-card1.png'
import secondPic from '../images/provider-card2.png'
import thirdPic from '../images/provider-card3.png'
import { useForm } from 'react-hook-form';
import Form from 'react-bootstrap/Form';
import { useStateMachine } from 'little-state-machine';
import updateSignupAction from '../updateSignupAction';
import ProviderSignupPopupOne from '../components/ProviderSignupPopupOne';
import ProviderSignupPopupTwo from '../components/ProviderSignupPopupTwo';
import '../CSS/ProviderAccountHero.css';


const heroCards = [
    {
        image: firstPic,
        title: 'Provider highlights',
        description: 'Routine provider highlights to increase company’s visibility.'
    },
    {
        image: secondPic,
        title: 'Great Customers',
        description: 'Hear from great customers who choose you, with high intent to hire.'
    },
    {
        image: thirdPic,
        title: 'Outstanding support',
        description: 'Help that is easily accessible, and a simple.'
    }
]


const ProviderAccountHero = () => {
    const [openPopupOne, setOpenPopupOne] = useState(false);
    const [openPopupTwo, setOpenPopupTwo] = useState(false);
    const [show, setShow] = useState(false);
    // const [ timedPopup, setTimedPopup ] = useState(false)

    const { register, handleSubmit, reset, formState, formState: { isSubmitSuccessful, errors } } = useForm();
    const { actions } = useStateMachine({ updateSignupAction })

    const onSubmit = (data) => {
        console.log(data);
        actions.updateSignupAction({ ...data })

        setOpenPopupOne(true)
    }

    console.log(errors);


    const showAlert = () => {
        setOpenPopupOne(false);
        setOpenPopupTwo(false);
        setShow(true);
    }

    //Alert timeout and cleanup
    useEffect(() => {
        let timer;

        if(show){
           timer = setTimeout(() => {
                setShow(false)
            }, 3000);
        }

        return () => {
            clearTimeout(timer);
        }
    },[show]);


    useEffect(() => {
        if (formState.isSubmitSuccessful) {
            reset({ services: '', location: '' })
        }
    }, [formState, reset])



    const style = {
        control: {
            border: '1px solid black',
            borderRadius: '10px',
            padding: '16px'

        },
        btn: {
            padding: '10px',
            // margin: '20px 10px 20px 10px',
            fontWeight: '400',
            fontSize: '25px',
            color: '#FCD19C',
            backgroundColor: '#476685',
            border: '2px solid #B1660E',
            borderRadius: '10px'

        },
        smallBoxText: {
            textAlign: 'left'
        },
        cardTitle: {
            textAlign: 'left',
            fontSize: '30px',
            fontWeight: '500',
        },
        cardText: {
            textAlign: 'left',
            fontSize: '17px',
            fontWeight: '300'
        }





    }

    return (
        <Container className='page-container' fluid >
            <Row className='top-row-container' >
                <Col
                    xl={5} lg={5} md={12} sm={12} xs={12}
                    className='left-box'
                // className="col-xxl-5 col-lg-5 col-md-5 col-sm-5 "
                // style={{ border: '1px solid black' }}
                >
                    {/* Left box handled in CSS file */}
                    <Col
                        className='left-box-title'
                        xl={8} lg={12} md={6} sm={10} xs={12}
                    >
                        <p
                            style={{

                                fontWeight: '500',
                                fontSize: '64px',
                                color: 'black',
                                textAlign: 'left',
                                margin: '0px'
                                // border: '1px solid #B1660E'
                            }}
                        >Get jobs in Atlanta.</p>
                        <p
                            style={{

                                fontWeight: '300',
                                fontSize: '18px',
                                color: 'black',
                                textAlign: 'left'
                                // border: '1px solid #B1660E'
                            }}
                        >Over 1K leads on Booked per day.</p>
                    </Col>

                    {/* floating box handled in CSS file */}
                    {/* <Row> */}
                    <Col
                        // xs={12}
                        className='floating-box'
                    >
                        <p
                            style={{
                                textAlign: 'left',
                                fontSize: '24px',
                                fontWeight: '400'
                            }}
                        >
                            What service do you provide?
                        </p>
                        <Form onSubmit={handleSubmit(onSubmit)}>
                            <Form.Group className="mb-3" controlId="formBasicServices">
                                <Form.Control style={style.control} type="text" placeholder="Beautician" {...register("services", { required: true, maxLength: 80 })} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicLocation">
                                <Form.Control style={style.control} type="text" placeholder="Atlanta, Georgia" {...register("location", { required: true, maxLength: 100 })} />
                            </Form.Group>

                            <Stack className="col-lg-12 col-md-12 col-sm-12">
                                <Button
                                    type="submit"
                                    style={style.btn}
                                >
                                    Sign up as a provider
                                </Button>
                            </Stack>

                        </Form>

                        {
                            show &&
                            <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                                <Alert.Heading>Signup failed please try again.</Alert.Heading>
                            </Alert>
                        }


                    </Col>
                    {/* </Row> */}

                </Col>

                <Col
                    xl={7} lg={7} md={12} xs={12}
                    // className="col-xxl-7 col-lg-7 col-md-7 col-sm-7 "
                    style={{
                        // border: '1px solid black',
                        backgroundImage: `url(${bgImg})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        // maxWidth: '600px',
                        // width: '100%',
                    }}>

                </Col>
            </Row>



            <Row
                style={{ height: '0%' }}
            >
                <Col>
                    <h1 style={{ textAlign: 'center', margin: '2rem auto' }}>See how Booked is different. </h1>

                    <Row>
                        {
                            heroCards.map((item, index) => (
                                <Col
                                    key={index}
                                    xs={12}
                                    className="col-xxl-4 col-lg-4 col-md-12 col-sm-12 "
                                >
                                    <Row
                                        style={{
                                            // border: '1px solid green',
                                        }}
                                    >
                                        <Col
                                            xs={4}
                                            className='col-xxl-3 col-lg-3 col-md-3 col-sm-3 '
                                            style={{
                                                // border: '1px solid blue',
                                                // marginLeft: '40px'

                                            }}
                                        >
                                            <img src={item.image}
                                                style={{
                                                    marginLeft: '10px',
                                                    maxWidth: '100%',
                                                    // width: '100%',
                                                    // height: '100%', 
                                                    // objectFit: 'contain' 

                                                }}
                                            />
                                        </Col>

                                        <Col
                                            className='col-xxl-9 col-lg-9 col-md-9 col-sm-9 '
                                            style={{
                                                textAlign: 'center',
                                                // border: '1px solid red',
                                            }}
                                        >
                                            <Stack>
                                                <h3 style={style.cardTitle}>{item.title}</h3>
                                                <p style={style.cardText}>{item.description}</p>
                                            </Stack>

                                        </Col>
                                    </Row>
                                </Col>
                            ))
                        }
                    </Row>




                </Col>




            </Row>

            {/* <button onClick={() => setOpenPopupOne(!openPopupOne)}>Modal</button> */}
            <ProviderSignupPopupOne open={openPopupOne} setOpenPopupOne={setOpenPopupOne} setOpenPopupTwo={setOpenPopupTwo} />

            {/* <button onClick={() => setOpenPopupTwo(true)}>Modal</button> */}
            <ProviderSignupPopupTwo open={openPopupTwo} setOpenPopupTwo={setOpenPopupTwo} showAlert={showAlert} />
        </Container>


    )
}

export default ProviderAccountHero;