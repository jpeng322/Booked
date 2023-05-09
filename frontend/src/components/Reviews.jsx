import React from "react";
import { useState, useEffect } from "react";
import { Card, ListGroup, ProgressBar } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { Container, Row, Col } from 'react-bootstrap';
import  "../CSS/Reviews.css";


const Reviews = ({ reviews }) => {
  const [activeTab, setActiveTab] = useState("all");
  const reviewCounts = [0, 0, 0, 0, 0];
  let totalStars = 0;
  reviews.forEach((review) => {
    reviewCounts[review.stars - 1]++;
    totalStars += review.stars;
  });
  const totalReviews = reviewCounts.reduce((acc, count) => acc + count, 0);
  const averageStars = totalStars / totalReviews;

  let ranking;
  if (averageStars >= 3 && averageStars < 4) {
    ranking = "Good";
  } else if (averageStars >= 4 && averageStars < 4.8) {
    ranking = "Great";
  } else if (averageStars >= 4.8) {
    ranking = "Excellent";
  } else if (averageStars <3) {
    ranking = "No ranking"
  }

  const getReviewsByRating = (min, max) => {
    return reviews.filter(
      (review) => review.stars >= min && review.stars < max
    );
  };

  const tabs = [
    { id: "all", label: "All" },
    { id: "1-2", label: "1-2 stars" },
    { id: "2-3", label: "2-3 stars" },
    { id: "3-4", label: "3-4 stars" },
    { id: "4-5", label: "4-5 stars" },
  ];

  const handleTabClick = (id) => {
    setActiveTab(id);
  };

  return (
    <Container> 
  
    
      <Col className="col-md-10 pl-0">
        
        <div className="left-div">
        <br />
    
        <Row>
        <h4>Reviews</h4>
        </Row> 
        <Row>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row className="d-flex flex-column align-items-center" style={{ fontSize: '35px' }}>
                    <span>{ranking ? ranking + " " + averageStars.toFixed(1) : ""}</span>
                    {ranking && (
                      <div className="mt-2 stars" >
                        {[...Array(5)].map((_, i) => {
                          const diff = averageStars - i;
                          if (diff >= 1) {
                            return <FaStar key={i} color="gold" size={60} strokeWidth={2} stroke="#000"/>;
                          } else if (diff >= 0.5) {
                            return <FaStarHalfAlt key={i} color="gold" size={60} strokeWidth={2} stroke="#000"/>;
                          } else {
                            return <FaStar key={i} color="#C4C4C4" size={60} strokeWidth={2} stroke="#000" />;
                          }
                        })}
                      </div>
                    )}
                  </Row>
                  <ListGroup.Item className="justify-content-center border-0">
                    <Row className="mt-10 text-center" style={{ fontSize: '26px' }}>{totalReviews} reviews </Row> 
                  </ListGroup.Item>
                </ListGroup.Item>
                </ListGroup>
                </Row>
          </div>
         
          </Col>
        
         <Col className="col-md-10">
         <br></br>
            <div className="right-div" style={{ borderLeft: '1px solid black', paddingLeft: '30px'}} >
              
                  {[5, 4, 3, 2, 1].map((stars) => (
                    
                    <ListGroup.Item key={stars} className="mb-3">
                      
                      <div className="d-flex align-items-center">
                        
                        <span>{stars}&nbsp;&nbsp;&nbsp;</span>
                        <FaStar className="ml-2 mr-2" color="gold" size={20} />
                        &nbsp;&nbsp;&nbsp;
                        <ProgressBar
                          now={(reviewCounts[stars - 1] / totalReviews) * 100}
                          className="w-75"
                          style={{ backgroundColor: "#C4C4C4" }}
                        />
                        <span className="ml-2" style={{ margin: "0 0.5rem" }}>
                          {Math.round((reviewCounts[stars - 1] / totalReviews) * 100)}%
                        </span>
                      </div>
                    </ListGroup.Item>
                  ))}
                
          </div>
        </Col>
     
      </Container>
  );
};

export default Reviews;



///////////////////////////////////////////////////////////////

// const Reviews = ({ providerName }) => {
//   const [activeTab, setActiveTab] = useState("all");
//   const reviewCounts = [0, 0, 0, 0, 0];
//   let totalStars = 0;
//   let totalReviews = 0;
//   let averageStars = null;
//   let ratings = [];

//   let ranking;
//   if (averageStars !== null) {
//     if (averageStars >= 3 && averageStars < 4) {
//       ranking = "Good";
//     } else if (averageStars >= 4 && averageStars < 4.8) {
//       ranking = "Great";
//     } else if (averageStars >= 4.8) {
//       ranking = "Excellent";
//     }
//   }

//   // find the provider object in the array
//   const provider = providers.find(provider => provider.name === providerName);
//   if (provider) {
//     ratings = provider.reviews.map(review => review.rating);

//     totalReviews = ratings.length;
//     if (totalReviews > 0) {
//       totalStars = ratings.reduce((sum, rating) => sum + rating, 0);
//       averageStars = totalStars / totalReviews;
//       reviewCounts.fill(0);
//       ratings.forEach((rating) => {
//         reviewCounts[Math.floor(rating) - 1]++;
//       });
//     }
//   }

//   return (
//     <Container> 
//       <Col className="col-md-10 pl-0">
//         <div className="left-div">
//           <br />
//           <Row>
//             <h4>Reviews</h4>
//           </Row> 
//           <Row>
//             <ListGroup variant="flush">
//               <ListGroup.Item>
//                 <Row className="d-flex flex-column align-items-center" style={{ fontSize: '35px' }}>
//                   {averageStars !== null && (
//                     <div className="mt-2 stars">
//                       {[...Array(5)].map((_, i) => {
//                         const diff = averageStars - i;
//                         if (diff >= 1) {
//                           return (
//                             <FaStar
//                               key={i}
//                               color="gold"
//                               size={60}
//                               strokeWidth={2}
//                               stroke="#000"
//                             />
//                           );
//                         } else if (diff >= 0.5) {
//                           return (
//                             <FaStarHalfAlt
//                               key={i}
//                               color="gold"
//                               size={60}
//                               strokeWidth={2}
//                               stroke="#000"
//                             />
//                           );
//                         } else {
//                           return (
//                             <FaStar
//                               key={i}
//                               color="#C4C4C4"
//                               size={60}
//                               strokeWidth={2}
//                               stroke="#000"
//                             />
//                           );
//                         }
//                       })}
//                     </div>
//                   )}

//                 </Row>
//                 <ListGroup.Item className="justify-content-center border-0">
//                   <Row className="mt-10 text-center" style={{ fontSize: '26px' }}>{totalReviews} reviews </Row> 
//                 </ListGroup.Item>
//               </ListGroup.Item>
//             </ListGroup>
//           </Row>
//         </div>
//       </Col>
//       <Col className="col-md-10">
//         <br></br>
//         <div className="right-div">
//           <Row>
//             <h4>Customer Reviews</h4>
//           </Row>
//           <Row>
//                <ListGroup variant="flush">
//                  <ListGroup.Item>
//                   <Row className="d-flex flex-column align-items-center" style={{ fontSize: '35px' }}>
//                     <span>{ranking ? ranking + " " + averageStars.toFixed(1) : ""}</span>
//                      {ranking && (
//                       <div className="mt-2 stars" >
//                         {[...Array(5)].map((_, i) => {
//                           const diff = averageStars - i;
//                           if (diff >= 1) {
//                             return <FaStar key={i} color="gold" size={60} strokeWidth={2} stroke="#000"/>;
//                           } else if (diff >= 0.5) {
//                             return <FaStarHalfAlt key={i} color="gold" size={60} strokeWidth={2} stroke="#000"/>;
//                           } else {
//                             return <FaStar key={i} color="#C4C4C4" size={60} strokeWidth={2} stroke="#000" />;
//                           }
//                         })}
//                       </div>
//                     )}
//                   </Row>
//                   <ListGroup.Item className="justify-content-center border-0">
//                     <Row className="mt-10 text-center" style={{ fontSize: '26px' }}>{totalReviews} reviews </Row> 
//                   </ListGroup.Item>
//                 </ListGroup.Item>
//                 </ListGroup>
//                 </Row>
//           </div>
         
//           </Col>
        
//          <Col className="col-md-10">
//          <br></br>
//             <div className="right-div" style={{ borderLeft: '1px solid black', paddingLeft: '30px'}} >
              
//                   {[5, 4, 3, 2, 1].map((stars) => (
                    
//                     <ListGroup.Item key={stars} className="mb-3">
                      
//                       <div className="d-flex align-items-center">
                        
//                         <span>{stars}&nbsp;&nbsp;&nbsp;</span>
//                         <FaStar className="ml-2 mr-2" color="gold" size={20} />
//                         &nbsp;&nbsp;&nbsp;
//                         <ProgressBar
//                           now={(reviewCounts[stars - 1] / totalReviews) * 100}
//                           className="w-75"
//                           style={{ backgroundColor: "#C4C4C4" }}
//                         />
//                         <span className="ml-2" style={{ margin: "0 0.5rem" }}>
//                           {Math.round((reviewCounts[stars - 1] / totalReviews) * 100)}%
//                         </span>
//                       </div>
//                     </ListGroup.Item>
//                   ))}
                
//           </div>
//         </Col>
     
//       </Container>
//   );
// };

// export default Reviews;