import React from "react";
import { useState } from "react";
import { Button, ButtonGroup } from 'react-bootstrap';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import "../../CSS/ReviewTabs.css";

const reviews = [
  { stars: 4, name: "Jay Z.", time: "1hr", comment: "I recently had Alex install my kitchen cabinets and I'm very impressed with his work. He arrived on time and got right to work, showing his professionalism from the start. He was able to efficiently install the cabinets without any issues, and the end result is fantastic. The cabinets look great and are securely mounted." },
  { stars: 1.5, name: "Bey N.", time: "4hr", comment: "No no!" },
  { stars: 5, name: "Brad P.", time: "7hr", comment: "Love it!" },
  { stars: 2, name: "Justin B.", time: "12hr", comment: "Not what I expected." },
  { stars: 5, name: "Dwayne J.", time: "5hr", comment: "Amazing!" },
  { stars: 3, name: "Ryan K.", time: "2hr", comment: "It's okay." },
];


const ReviewsTabs = () => {
    const [activeButton, setActiveButton] = useState('all');
    
  
    const handleButtonClick = (range) => {
      setActiveButton(range);
    };
  
    const filteredReviews = activeButton === 'all' 
      ? reviews 
      : reviews.filter((review) => {
          const lowerRange = Number(activeButton.split('-')[0]);
          const upperRange = Number(activeButton.split('-')[1]);
          return review.stars >= lowerRange && review.stars <= upperRange;
        });
  
    return (
      <div className="btns">
          <div className="reviews-container">
              <ButtonGroup className="reviews-buttons">
                  <Button 
                  variant="secondary" 
                  onClick={() => handleButtonClick('all')} 
                  active={activeButton === 'all'}
                  >
                  All Reviews
                  </Button>
                  <Button 
                  variant="secondary" 
                  onClick={() => handleButtonClick('1-2')} 
                  active={activeButton === '1-2'}
                  >
                  1-2 
                  </Button>
                  <Button 
                  variant="secondary" 
                  onClick={() => handleButtonClick('2-3')} 
                  active={activeButton === '2-3'}
                  >
                  2-3 
                  </Button>
                  <Button 
                  variant="secondary" 
                  onClick={() => handleButtonClick('3-4')} 
                  active={activeButton === '3-4'}
                  >
                  3-4 
                  </Button>
                  <Button 
                  variant="secondary" 
                  onClick={() => handleButtonClick('4-5')} 
                  active={activeButton === '4-5'}
                  >
                  4-5 
                  </Button>
              </ButtonGroup>
              <div className="reviews-list">
                
                  {filteredReviews.map((review, index) => (
                
                  <div key={index}>
                     <p className="name">{review.name}</p>
                     <p className="time">{review.time} ago</p>
                      <div className="star-rating">
                        {[...Array(Math.floor(review.stars))].map((_, i) => (
                          <FaStar key={i} color="#2c2c2c" />
                        ))}
                        {review.stars % 1 !== 0 && (
                          <FaStarHalfAlt color="#2c2c2c" />
                        )}
                        {[...Array(Math.floor(5 - review.stars))].map((_, i) => (
                          <FaStar key={i} color="#c4c4c4" />
                        ))}
                       
                      </div>
                      
                      <p>{review.comment}</p>
                  </div>
                  ))}
              </div>
          </div>
      </div>
    );
  };
  
  export default ReviewsTabs;

  

  