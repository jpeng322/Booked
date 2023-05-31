import PlaceholderImg from "../images/placeholder-image.png";
import avatar from "../images/avatar.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  Container,
  Col,
  Row,
  Image,
  Card,
  CardGroup,
  // Carousel,
  Stack,
} from "react-bootstrap";
import BookingsCard from "./BookingsCard";

import "../CSS/Carousel.css";

function FavoriteProviders() {
  // const responsive = {
  //   xxl: {
  //     // the naming can be any, depends on you.
  //     breakpoint: { max: 4000, min: 1600 },
  //     items: 6,
  //     slidesToSlide: 6,
  //   },
  //   xl: {
  //     // the naming can be any, depends on you.
  //     breakpoint: { max: 1600, min: 1300 },
  //     items: 5,
  //     slidesToSlide: 5,
  //   },
  //   lg: {
  //     breakpoint: { max: 1300, min: 992 },
  //     items: 4,
  //     slidesToSlide: 4,
  //   },
  //   md: {
  //     breakpoint: { max: 992, min: 768 },
  //     items: 3,
  //     slidesToSlide: 3,
  //   },
  //   sm: {
  //     breakpoint: { max: 768, min: 576 },
  //     items: 2,
  //     slidesToSlide: 2,
  //   },
  //   xs: {
  //     breakpoint: { max: 576, min: 0 },
  //     items: 1,
  //     slidesToSlide: 1,
  //   },
  // };
  const responsive = {
    xxl: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1950 },
      items: 6,
      slidesToSlide: 6,
    },
    xl: {
      // the naming can be any, depends on you.
      breakpoint: { max: 1950, min: 1625 },
      items: 4,
      slidesToSlide: 4,
    },
    lg: {
      breakpoint: { max: 1625, min: 1300 },
      items: 4,
      slidesToSlide: 4,
    },
    md: {
      breakpoint: { max: 1300, min: 975 },
      items: 3,
      slidesToSlide: 3,
    },
    sm: {
      breakpoint: { max: 975, min: 650 },
      items: 2,
      slidesToSlide: 2,
    },
    xs: {
      breakpoint: { max: 650, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  return (
    <div className="carousel-container mt-4">
      <h2 className="carousel-title"> Favorite</h2>
      {/* <div className="w-full carousel-subcontainer"> */}
        <Carousel
          responsive={responsive}
          transitionDuration={500}
          removeArrowOnDeviceType={["tablet", "mobile"]}
          // autoPlay={true}
          // autoPlaySpeed={2000}
          // rewind={true}
          showDots={true}
          // renderDotsOutside={true}
          arrows={false}
          customButtonGroup=""
          dotListClass="custom-dot-list-style"
          // removeArrowOnDeviceType={}
        >
          <div>
            <BookingsCard />
          </div>
          <div>
            <BookingsCard />
          </div>
          <div>
            <BookingsCard />
          </div>
          <div>
            <BookingsCard />
          </div>
          <div>
            <BookingsCard />
          </div>
          <div>
            <BookingsCard />
          </div>
          <div>
            <BookingsCard />
          </div>
          <div>
            <BookingsCard />
          </div>
          <div>
            <BookingsCard />
          </div>
          <div>
            <BookingsCard />
          </div>
          <div>
            <BookingsCard />
          </div>
          <div>
            <BookingsCard />
          </div>
        </Carousel>
        {/* <div className="carousel-container"></div> */}
      {/* </div> */}
    </div>
  );
}
export default FavoriteProviders;
