import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from "styled-components";
import NavBar from "./NavBar";
import axios from "../axios";
import requests from "./Requests";
import "./ImgSlider.css"
import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

function ImgSlider() {

  const [movie, setMovie] = useState([]);
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return requests;
    }
    fetchData();
  }, []);

  const handleClick = (movie) =>{
    console.log(movie.name)
    if(trailerUrl){
      setTrailerUrl('');
    }
    else{
      movieTrailer(movie.name || "").then((url)=>{
          const urlParams = new URLSearchParams (new URL(url).search);
          setTrailerUrl(urlParams.get('v'));
      }).catch((err)=>(
        console.log(err)
      ))
    }
    
  }
  const opts = {
    height: "390",
    width: "100%",
    playerVars:{
      autoplay: 1,
    }
  };
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
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "....." : string;
  }

  return (
    <Body>
      <Wrap >
        <div onClick={()=>{
          console.log(movie)
        }} style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
        height: "600px",
        width:"1440px",
      }}>    <div className="trailer">{ trailerUrl && <YouTube className="video" videoId={trailerUrl} opts={opts}/>}</div><div className="contents"><span>{movie.name}</span><h2>Rating : {movie.vote_average}/10</h2><div className="hero"><h3>{truncate(movie?.overview, 300)}</h3></div>  <div className="banner_buttons">
      <button className="banner_button1" onClick={()=>{
        handleClick(movie)
      }}>Watch Now</button>
  </div></div></div>
      </Wrap>      
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
  }
   span{
    margin-top:60vh;
    padding-top:40vh;
    color: white;
    padding: 15px;
    border-radius: 20px;
    margin-left:3vw;
    background: #e84218d5;
    font-size: 30px;
    font-weight: 800;

  }
  h3{
    padding-left: 3vw;
    color: white;
    font-weight: 400;
    background: #0000004d;   
    // border-radius: 10px;
    // padding: 20px; 
  }
  .hero{
    width:800px;
  }
  h2{
    padding-left: 3vw;
    color: white;
    font-weight: 400;
    background: #0000004d;   
    // border-radius: 10px;
    justify-content: center;
    margin-bottom: 0px;
    // padding-top: 15px;
    margin-top: 6vh;
    width: 160px;
    }
    .trailer{
      position: absolute;
      top:50px;
    }`
;



