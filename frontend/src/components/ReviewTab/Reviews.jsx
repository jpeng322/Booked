import React from "react";
import { ListGroup, ProgressBar } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { Container, Row, Col } from "react-bootstrap";
import "../../CSS/Reviews.css";

const reviews = [
  {
    stars: 4,
    name: "Jay Z.",
    time: "1hr",
    comment:
      "I recently had Alex install my kitchen cabinets and I'm very impressed with his work. He arrived on time and got right to work, showing his professionalism from the start. He was able to efficiently install the cabinets without any issues, and the end result is fantastic. The cabinets look great and are securely mounted.",
  },
  { stars: 1.5, name: "Bey N.", time: "4hr", comment: "No no!" },
  { stars: 5, name: "Brad P.", time: "7hr", comment: "Love it!" },
  {
    stars: 2,
    name: "Justin B.",
    time: "12hr",
    comment: "Not what I expected.",
  },
  { stars: 5, name: "Dwayne J.", time: "5hr", comment: "Amazing!" },
  { stars: 3, name: "Ryan K.", time: "2hr", comment: "It's okay." },
];

const Reviews = ({ reviews }) => {
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
  } else if (averageStars < 3) {
    ranking = "No ranking";
  }

  return (
    <Container className="customer-reviews-container">
      <div className="reviews-info">
        {/* <Col className="col-md-12 pl-0"> */}
          <div className="left-div">
            <br />

            <Row>
              <h4>Reviews</h4>
            </Row>
            <Row>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row
                    className="d-flex flex-column align-items-center"
                    style={{ fontSize: "35px" }}
                  >
                    <span>
                      {ranking ? ranking + " " + averageStars.toFixed(1) : ""}
                    </span>
                    {ranking && (
                      <div className="mt-2 stars">
                        {[...Array(5)].map((_, i) => {
                          const diff = averageStars - i;
                          if (diff >= 1) {
                            return (
                              <FaStar
                                key={i}
                                color="gold"
                                size={60}
                                strokeWidth={2}
                                stroke="#000"
                              />
                            );
                          } else if (diff >= 0.5) {
                            return (
                              <FaStarHalfAlt
                                key={i}
                                color="gold"
                                size={60}
                                strokeWidth={2}
                                stroke="#000"
                              />
                            );
                          } else {
                            return (
                              <FaStar
                                key={i}
                                color="#C4C4C4"
                                size={60}
                                strokeWidth={2}
                                stroke="#000"
                              />
                            );
                          }
                        })}
                      </div>
                    )}
                  </Row>
                  <ListGroup.Item className="justify-content-center border-0">
                    <Row
                      className="mt-10 text-center"
                      style={{ fontSize: "26px" }}
                    >
                      {" "}
                      {totalReviews} reviews{" "}
                    </Row>
                  </ListGroup.Item>
                </ListGroup.Item>
              </ListGroup>
            </Row>
          </div>
          <br></br>
          <div
            className="right-div"
            style={{ borderLeft: "1px solid black", paddingLeft: "30px" }}
          >
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
                    {Math.round((reviewCounts[stars - 1] / totalReviews) * 100)}
                    %
                  </span>
                </div>
              </ListGroup.Item>
            ))}
          </div>
        {/* </Col> */}

        {/* <Col className="col-md-10">
          <br></br>
          <div
            className="right-div"
            style={{ borderLeft: "1px solid black", paddingLeft: "30px" }}
          >
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
                    {Math.round((reviewCounts[stars - 1] / totalReviews) * 100)}
                    %
                  </span>
                </div>
              </ListGroup.Item>
            ))}
          </div>
        </Col> */}
      </div>
    </Container>
  );
};

export default Reviews;
