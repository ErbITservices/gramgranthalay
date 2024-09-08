import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import "./styles.css";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
};
const sliderImageUrl = [
  //First image url
  {
    url: "https://sycd.gujarat.gov.in/writereaddata/images/azadi_ka_amrit_mahotsav.png",
  },
  {
    url: "https://sycd.gujarat.gov.in/writereaddata/images/ministry-of-culture.jpg",
  },
  //Second image url
  {
    url: "https://sycd.gujarat.gov.in/writereaddata/images/ministry-of-youth-affairs-and-sports.jpg",
  },
  //Third image url
  {
    url: "https://sycd.gujarat.gov.in/writereaddata/Portal/Images/150-years-gandhiji-janma-jayanti.png",
  },

  //Fourth image url

  {
    url: "https://sycd.gujarat.gov.in/writereaddata/images/gujarat-state-portal.jpg",
  },
  {
    url: "https://sycd.gujarat.gov.in/writereaddata/Portal/Images/CEO_logo_12072022.jpg",
  },
  {
    url: "https://sycd.gujarat.gov.in/writereaddata/Portal/Images/fit_india_logo.png",
  },
  {
    url: "https://sycd.gujarat.gov.in/writereaddata/images/azadi_ka_amrit_mahotsav.png",
  },

  //   extra

  
];
const Footer = () => {
    return (
      <div className="foot">
        <hr />
        <div className="parent">
          <Carousel
            responsive={responsive}
            autoPlay={true}
            swipeable={true}
            draggable={true}
            // showDots={true}
            infinite={true}
            partialVisible={false}
            dotListClass="custom-dot-list-style"
          >
            {sliderImageUrl.map((imageUrl, index) => {
              return (
                <div className="slider" key={index}>
                  <img src={imageUrl.url} alt="logo" />
                </div>
              );
            })}
          </Carousel>
        </div>
        <hr />
        <div className="foot-info-contect">
          <div className="info">
            <p className="infotext">
              Copyright © 2024 All right reserved Erb It Services
            </p>
            <p className="infotext">
              Central Library Department, Government of Gujarat
            </p>
            <p className="infotext">
              Mainted and Oprated by Panara It
            </p>
          </div>
          <div className="contect">
                    <p className="infotext">sector-15 ,gh-5, <br />near mahatma mandir , <br />gandhinagar,3800015 <br />
                        mo:- 123456789</p>
          </div>
        </div>
      </div>
    );
};
export default Footer;
