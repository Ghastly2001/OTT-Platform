import React from 'react';
import {FaFacebook, FaLinkedin, FaTwitter , FaInstagram } from "react-icons/fa";
import "./SignUpFooter.css";

function SignUpFooter() {
  return <div className='signUpFooter'>
    <section class="link">
    <ul class="social_icon">
            <li><a href="#"><FaFacebook /></a></li>
            <li><a href="#"><FaLinkedin /></a></li>
            <li><a href="#"><FaTwitter /></a></li>
            <li><a href="#"><FaInstagram /></a></li>
        </ul>
      <div class="sub-links">
        <ul>
          <li><a href="#">Audio and Subtitles</a></li>
          <li><a href="#">Audio Description</a></li>
          <li><a href="#">Help Center</a></li>
          <li><a href="#">Gift Cards</a></li>
          <li><a href="#">Media Center</a></li>
          <li><a href="#">Investor Relations</a></li>
          <li><a href="#">Jobs</a></li>
          <li><a href="#">Terms of Use</a></li>
          <li><a href="#">Privacy</a></li>
          <li><a href="#">Legal Notices</a></li>
          <li><a href="#">Corporate Information</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </div>
    </section>
  </div>;
}

export default SignUpFooter;
