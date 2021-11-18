import React from "react";
import { FaSearch } from "react-icons/fa";
import "./NavBar.css";
import styled from "styled-components";
function NavBar() {
  return (
    <div className="NavBar">
      <div className="nav_contents">
        <div className="left_side">
          <div class="search-box">
            <input
              class="search-txt"
              type="text"
              name=""
              placeholder="Type to search"
            />
            <a class="search-btn" href="#">
              <FaSearch />
            </a>
          </div>
          <div className="buttons">
            <button className="btn">HOME</button>
            <button className="btn">FIND</button>
            <button className="btn">LIVE</button>
          </div>
        </div>
        <div className="right_side">
        <Container>
            <Wrap>
                <img src="images/viewers-disney.png" />
                <video autoplay muted autoPlay={true} loop={true} playsInline={true}>
                    <source src= '/videos/1564674844-disney.mp4' type= 'video/mp4' />
                </video>
            </Wrap>
            <Wrap>
                <img src="images/viewers-national.png" />
                <video autoplay muted autoPlay={true} loop={true} playsInline={true}>
                    <source src= '/videos/1564676296-national-geographic.mp4' type= 'video/mp4' />
                </video>
            </Wrap>
            <Wrap>
                <img src="images/viewers-starwars.png" />
                <video autoplay muted autoPlay={true} loop={true} playsInline={true}>
                    <source src= '/videos/1608229455-star-wars.mp4' type= 'video/mp4' />
                </video>
            </Wrap>
            <Wrap>
                <img src="images/viewers-marvel.png" />
                <video autoplay muted autoPlay={true} loop={true} playsInline={true}>
                    <source src= '/videos/1564676115-marvel.mp4' type= 'video/mp4' />
                </video>
            </Wrap>
            <Wrap>
                <img src="images/viewers-pixar.png" />
                <video autoplay muted autoPlay={true} loop={true} playsInline={true}>
                    <source src= '/videos/1564676714-pixar.mp4' type= 'video/mp4' />
                </video>
            </Wrap>
        </Container>
        </div>
      </div>
    </div>
  );
}

export default NavBar;


const Container = styled.div `
    display: grid;
    margin-top: 17px;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    padding: 20px 0 26px;
    height: 80px; 
    grid-gap:2px;
    margin-right:10px;
`
const Wrap = styled.div `
    border-radius: 7px;
    cursor: pointer;
    border: 2px solid rgba(249, 249, 249, 0.01);
    // box-shadow: rgb(0 0 0 / 69%) 0 26px 30px -10px, rgb(0 0 0 /73%) 0 16px 10px -10px; 
    transition : all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    overflow: hidden;
    position: relative;

    img{
        inset: 0;
        display: block;
        position: absolute;
        transition: opacity 500ms ease-in-out 0s;
        z-index: 1;
        top: 0;
        width:100%;
        height: 100%;
        object-fit: cover;
    }
    video{
        width: 100%;
        height: 100%;
        top: 0px;
        position: relative;
        opacity: 0;
        z-index: 0;
    }
    &:hover{
        box-shadow: rgb(255 255 255 / 80%) 0 -20px 58px -16px, rgb(0 0 0 /72%) 0 25px 22px -10px; 
        transform: scale(1.1);
        // border-color: rgba(249, 249, 249, 0.8);
        video{
            opacity: 1;
        }
    }
`
