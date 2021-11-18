import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from "styled-components";
import NavBar from "./NavBar";

function ImgSlider() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: true,
          arrows: true,
          infinite: true,
          slidesToScroll: 1,
          swipeToSlide: true,
        },
      },
      {
        breakpoint: 992,
        settings: "unslick",
      },
    ],
  };
  return (
    <Body>
    <Carausel {...settings}>
      <Wrap>
        <img src="https://images.unsplash.com/Ys-DBJeX0nE.JPG?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218MHx8d2FsbHBhcGVyfHx8fHx8MTYzNjk5MzIzMA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1440" />
      </Wrap>
      <Wrap>
        <img src="https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218MHx8d2FsbHBhcGVyfHx8fHx8MTYzNjk5MzMwNg&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1440" />
      </Wrap>
      <Wrap>
        <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218MHx8d2FsbHBhcGVyfHx8fHx8MTYzNjk5MzI5Mg&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1440" />
      </Wrap>
      <Wrap>
        <img src="https://images.unsplash.com/photo-1488034976201-ffbaa99cbf5c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218MHx8d2FsbHBhcGVyfHx8fHx8MTYzNjk5MzI3NA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1440" />
      </Wrap>
      
    </Carausel>
    <NavBar />
    </Body>
  );
}

export default ImgSlider;
const Body = styled.div``
const Carausel = styled(Slider)`
  margin-top: 0px;
  z-index: 1;
  .slick-dots {
    position: absolute;
    top: 70%;
    left: -40%;
    z-index: 2;
  }
  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }
  .slick-dots li.slick-active button:before {
    color: White;
    opacity: 1;
    font-size: 15px;
    transition: 0.4s;
  }
  .slick-dots li button:before {
    color: white;
    opacity: 0.5;
    font-size:9px;
  }

  .slick-list {
    overflow: visible;
  }
  button {
    z-index: 1;
  }`
;

const Wrap = styled.div
  `img {
    cursor: pointer;
    width: 100%;
    height: 100%;
    transition: 300ms;
    overflow-x: hidden;
  }`
;



