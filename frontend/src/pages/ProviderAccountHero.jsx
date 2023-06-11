import react, { useEffect, useState } from 'react'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import bgImg from '../images/provider-hero-bg.png';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import firstPic from '../images/provider-card1.png'
import secondPic from '../images/provider-card2.png'
import thirdPic from '../images/provider-card3.png'
import { useForm } from 'react-hook-form';
import { Form } from 'react-bootstrap';
import ProviderSignupPopupOne from '../components/ProviderSignupPopupOne';
import ProviderSignupPopupTwo from '../components/ProviderSignupPopupTwo';


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
    // const [ timedPopup, setTimedPopup ] = useState(false)

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    useEffect(() => {
        setTimeout(() => {
            setOpenPopupOne(true)
        }, 3000);
    }, [])



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
        <Container fluid style={{ height: '100vh' }}>
            <Row style={{ height: '80%' }}>
                <Col
                    // md={5} 
                    className="col-xxl-5 col-lg-5 col-md-5 col-sm-5 "
                    style={{ border: '1px solid black' }}
                >
                    <Col
                        style={{
                            // padding: 'px',
                            // margin: '20px 10px 20px 10px',
                            margin: '40px 250px 0px 80px',
                            fontWeight: '400',
                            // fontSize: '25px',
                            color: '#476685',
                            // backgroundColor: '#F1A855',
                            border: '1px solid #B1660E',
                            // textAlign: 'left'
                        }}
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

                    {/* floating box */}
                    {/* <Row> */}
                    <Col
                        style={{
                            position: 'absolute',
                            right: '50%',
                            top: '30%',
                            maxWidth: '47%',
                            width: '100%',
                            height: '350px',
                            border: '1px solid red',
                            backgroundColor: 'white',
                            zIndex: 10,
                            padding: '30px',
                            boxShadow: '2px 2px 10px 0px rgba(0,0,0,0.7)'
                        }}>
                        <p
                            style={{
                                textAlign: 'left',
                                fontSize: '24px',
                                fontWeight: '400'
                            }}
                        >
                            What service do yo provide?
                        </p>
                        <Form onSubmit={handleSubmit(onSubmit)}>
                            <Form.Group className="mb-3" controlId="formBasicFirstEmail">
                                <Form.Control style={style.control} type="email" placeholder="Beautician" {...register("email", { required: true, maxLength: 80 })} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicLocation">
                                <Form.Control style={style.control} type="text" placeholder="Atlanta, Georgia" {...register("password", { required: true, maxLength: 100 })} />
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
                    </Col>
                    {/* </Row> */}

                </Col>

                <Col
                    // md={7}
                    className="col-xxl-7 col-lg-7 col-md-7 col-sm-7 "
                    style={{
                        border: '1px solid black',
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
                <Col style={{ border: '1px solid black' }}>
                    <h1 style={{ textAlign: 'center' }}>See how Booked is different. </h1>

                    <Row>
                        {
                            heroCards.map((item, index) => (
                                <Col
                                    key={index}
                                    className="col-xxl-4 col-lg-4 col-md-12 col-sm-12 "
                                >
                                    <Row
                                        style={{
                                            border: '1px solid green',
                                        }}
                                    >
                                        <Col
                                            className='col-xxl-3 col-lg-3 col-md-3 col-sm-3 '
                                            style={{
                                                border: '1px solid blue',
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
                                                border: '1px solid red',
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
            <ProviderSignupPopupTwo open={openPopupTwo} setOpenPopupTwo={setOpenPopupTwo} />
        </Container>






        // <div
        //     style={{
        //         border: '1px solid black',
        //         minHeight: "100vh",
        //     }}
        // >
        //     {/* <Stack
        //         style={{
        //             border: '1px solid blue',
        //         }}
        //     > */}
        //         <Container
        //             style={{
        //                 border: '1px solid pink',
        //                 width: '100%'
        //             }}
        //         >
        //         <Row
        //             style={{
        //                 border: '1px solid green',
        //                 // height: '100%',
        //             }}
        //         >
        //             <Col
        //                 className="col-lg-5 col-md-6 col-sm-6   "
        //                 style={{
        //                     border: '1px solid yellow',
        //                     // width: '871px'
        //                 }}
        //             >
        //                 <div
        //                     style={{
        //                         border: '1px solid black',
        //                         // width: '871px'
        //                     }}
        //                 >
        //                     hello
        //                 </div>
        //             </Col>

        //             <Col
        //                 className="col-lg-7 col-md-6 col-sm-6   "
        //                 style={{
        //                     border: '1px solid red',
        //                     minHeight: "100vh",
        //                     backgroundImage: `url(${bgImg})`,
        //                     backgroundRepeat: 'no-repeat',
        //                     backgroundAttachment: 'scroll',
        //                     backgroundPosition: 'center center',
        //                     backgroundSize: 'contain',
        //                     overflow: 'hidden',
        //                     maxWidth: '971px',
        //                     // width: '100%'
        //                 }}
        //             >
        //                 {/* <Image
        //                     // className='float-end'
        //                     src={bgImg}
        //                     style={{
        //                         border: '1px solid yellow',
        //                         maxWidth: '871px',
        //                         objectFit: 'cover',
        //                         height: '100%'

        //                     }}
        //                 // fluid
        //                 /> */}
        //             </Col>
        //         </Row>

        //         </Container>

        //     {/* </Stack> */}
        // </div>

    )
}

export default ProviderAccountHero;