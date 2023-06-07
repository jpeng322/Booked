import react from 'react'
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





const ProviderAccountHero = () => {
    const thumbnail = [firstPic, secondPic, thirdPic];

    return (
        <Container fluid style={{ height: '100vh' }}>
            <Row style={{ height: '80%' }}>
                <Col
                    // md={5} 
                    className="col-xxl-5 col-lg-5 col-md-5 col-sm-5 "
                    style={{ border: '1px solid black' }}>
                    
                    <div
                        style={{
                            position: 'absolute',
                            right: '50%',
                            top: '30%', 
                            width: '47%',
                            height: '350px',
                            border: '1px solid black',
                            backgroundColor: 'white',
                            zIndex: 10, 
                        }}>
                        <p>Floating box.</p>
                    </div>
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
                    <p>Right box.</p>
                </Col>
            </Row>



            <Row
                style={{ height: '20%' }}
            >
                <Col style={{ border: '1px solid black' }}>
                    <h1 style={{ textAlign: 'center' }}>See how Booked is different. </h1>

                    <Row>
                        {
                            thumbnail.map((item) => (
                                <Col
                                    className="col-xxl-4 col-lg-4 col-md-12 col-sm-12 "
                                >
                                    <Row
                                        style={{
                                            border: '1px solid blue',
                                        }}
                                    >
                                        <Col
                                            style={{
                                                border: '1px solid blue',
                                                marginLeft: '40px'
                                            }}
                                        >
                                            <img src={item}
                                                style={{
                                                    maxWidth: '50%',
                                                    // width: '100%',
                                                    // height: '100%', 
                                                    // objectFit: 'contain' 
                                                }}
                                            />
                                        </Col>

                                        <Col
                                            style={{
                                                textAlign: 'center',
                                                border: '1px solid black',
                                            }}
                                        >
                                            <p>Some text</p>
                                        </Col>
                                    </Row>
                                </Col>
                            ))
                        }
                    </Row>


                    {/* <Row>
                        <Col md={4} style={{ border: '1px solid black' }}>

                        </Col>
                        <Col md={4} style={{ border: '1px solid black' }}>

                        </Col>
                        <Col md={4} style={{ border: '1px solid black' }}>

                        </Col>
                    </Row> */}

                </Col>



                {/* <Col style={{ border: '1px solid black' }}>

                </Col> */}
            </Row>

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