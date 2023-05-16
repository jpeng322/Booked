import react from "react";
import { Container } from "react-bootstrap";


function OtherComp (){
      return (
    <div style={{
        paddingTop: "60px"
    }} >
    <div className="mx-auto p-2"
    style={{
        backgroundColor: "white",
        height: "225px",
        width: "33.33%",
       display: "flex",

    }}>
    <div className="row"
    style={{
    backgroundColor: "grey",
    margin:"20px",
    height: "225px",
    width: "1125px",
    float: "left",
}}></div>

    <div className="mx-auto p-2"
style={{
    backgroundColor: "grey",
    margin:"20px",
    height: "225px",
    width: "1125px",
    float:"right",
    
}}></div>
    
    <div className="row"
style={{
    backgroundColor: "grey",
    margin:"20px",
    height: "225px",
    width: "1125px",
    float:"right",
    
}}></div>
    </div>
    </div>
      );
      
    }
    

export default OtherComp;