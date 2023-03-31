import React from 'react'
import {FaFacebook, FaLinkedin, FaTwitter , FaInstagram } from "react-icons/fa"
import "./Footer.css"
function Footer() {
    return (
        <div>
             <footer>
        <div class="wave" id="wave1"></div>
        <div class="wave" id="wave2"></div>
        <div class="wave" id="wave3"></div>
        <div class="wave" id="wave4"></div>
        <ul class="social_icon">
            <li><a href="#"><FaFacebook /></a></li>
            <li><a href="#"><FaLinkedin /></a></li>
            <li><a href="#"><FaTwitter /></a></li>
            <li><a href="#"><FaInstagram /></a></li>
        </ul>
        <ul class="menu">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Team</a></li>
        </ul>
        <p>©2021  Divyansh Verma | All Rights Reserved</p>
    </footer>
        </div>
    )
}

export default Footer

