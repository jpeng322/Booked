import react from "react";
import { Container } from "react-bootstrap";
import Form from 'react-bootstrap/Form'
import { InputGroup } from "react-bootstrap";
import {Button} from "react-bootstrap";

function FooterComp(){
    return(
    <div  
    style={{
        paddingTop: "60px"
    }} >

        <br></br>
        <br></br>
        <Container className="text-center" >
    <h4> Wanna be in the know about the Pros? Subscribe </h4>
    <h5 style={{
        paddingTop: "10px",
        fontSize: "16px"
    }} >Join our email list by adding your email below</h5>
    </Container>

    <div className="d-flex justify-content-center">
    <InputGroup className="mb-3"
    style={{
        width: "479px",
        height: "66px",
    }}
    >
        <Form.Control
          placeholder="YourNameH3r3@gmail.com"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <Button variant="outline-secondary" id="button-addon2" className="text-bg-secondary p-3">
          Subscribe
        </Button>
      </InputGroup>
      </div>
          
         Footer
         </div>
    )
}
export default FooterComp;
