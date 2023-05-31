import { Container, Col, Row, Image, Card, CardGroup, ListGroup, ListGroupItem } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import "./Footer.css"

function HifiFooter() {
    return(
        <div className="footer-container">
             <div className="list-items">
             <Row className= "border-bottom">
               
               <Col><p class="fs-5"
               style={{
                marginLeft: "-9rem "
               }}>About</p></Col>
               <Col><p class="fs-5" 
               style={{
                marginRight: "5rem"
               }}>Careers</p></Col>
               <Col><p class="fs-5"
               style={{
                marginRight: "5rem"
               }}>Subscriptions</p></Col>
               <Col><p class="fs-5"
               style={{
                marginRight: "5rem"
               }}>Terms&Privacy</p></Col>
               <Col><p class="fs-5"
               style={{
                marginRight: "-5rem"
               }}>FAQs</p></Col>
              
            </Row>
            </div>
            
            <h4 className="text-center">Socials</h4>
            
            <Row >
          <Col className="d-flex gap-4 justify-content-center">
            <a href="https://www.instagram.com" >
              <FaInstagram size={40} />
            </a>
            <a href="https://www.facebook.com">
              <FaFacebook size={40} />
            </a>
            <a href="https://www.twitter.com">
              <FaTwitter size={40} />
            </a>
            <a href="https://www.youtube.com">
                <FaYoutube size={40} />
            </a>
           
          </Col>
        </Row>
        </div>
    )
}


       
         

export default HifiFooter