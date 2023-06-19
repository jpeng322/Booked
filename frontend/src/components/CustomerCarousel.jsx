import PlaceholderImg from "../images/placeholder-image.png";
import avatar from "../images/avatar.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useEffect, useState } from "react";
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
import {
  getCustomerRecommendations,
  getCustomerBookings,
  getProviderInfo,
} from "../api";

import "../CSS/Carousel.css";

function CustomerCarousel({ title }) {
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

  const [displayedProviders, setDisplayedProviders] = useState();
  const userId = localStorage.getItem("userId");
  useEffect(() => {
    console.log(title);
    const fetchData = async () => {
      if (title === "Recommended") {
        const displayedProvidersResponse = await getCustomerRecommendations(
          userId
        );
        setDisplayedProviders(displayedProvidersResponse);
      } else if (title === "Recently Booked") {
        const displayedProvidersResponse = await getCustomerBookings(userId);

        const previousProviderMap = {};
        displayedProvidersResponse.forEach((booking) => {
          if (previousProviderMap[booking.provider_id]) {
            return;
          } else {
            previousProviderMap[booking.provider_id] = booking.provider_id;
          }
        });

        const providerArray = [];
        for (const provider in previousProviderMap) {
          const providerId = previousProviderMap[provider];
          const providerInfo = await getProviderInfo(providerId);
          providerArray.push(providerInfo);
        }

        console.log(providerArray);
        setDisplayedProviders(providerArray);
      }
    };

    fetchData();
    // setRecommendedProviders(recommendedProvidersResponse);
  }, []);

  console.log(displayedProviders, "DISPLAYED PROVIDERS");
  return (
    <div className="carousel-container mt-4">
      <h2 className="carousel-title"> {title}</h2>
      {displayedProviders ? (
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
          {displayedProviders &&
            displayedProviders.map((provider) => {
              const startingPrice = provider.service.reduce(function (
                prev,
                curr
              ) {
                return prev.price < curr.price ? prev : curr;
              });
              return (
                <div key={provider.provider_id}>
                  <BookingsCard
                    profilePic={provider.profile_pic}
                    businessName={provider.provider_businessName}
                    areaServed={provider.provider_areaServed}
                    firstImage={provider.image[0].image_url}
                    startingPrice={startingPrice.price}
                  />
                </div>
              );
            })}
         
        </Carousel>
      ) : (
        " "
      )}
    </div>
  );
}
export default CustomerCarousel;
