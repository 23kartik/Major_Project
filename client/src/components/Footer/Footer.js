import React, { useState, useEffect } from 'react';


import './Footer.css';
import vd from "./void.png";



const Footer = () => {
    return (
        <div class="d-flex flex-column min-vh-100">
        <br/>  <br/> <br/>
        
        <footer class="footer-distributed mt-auto">
            <div class="footer-left">
            <img
        src={vd}
        height="100px"
        alt="Third slide"
      />
        
                        <p class="footer-links">
                        <a href="/home" class="link-1">Upcoming Contests</a>
                            
                            <a href="/about">About</a>  
                            
                            <a href="/contact">Contact</a>
                            
                        </p>

        
                        <p class="footer-company-name">VOIDL © 2022</p>
                    </div>
        
                    <div class="footer-center">
        
                        <div>
                            <i class="fa fa-map-marker"></i>
                            <p><span>Jaypee Institute Of Information Technology</span> Sector 62,Noida ,India</p>
                        </div>
        
                        <div>
                            <i class="fa fa-phone"></i>
                            <p>+91 7668150810</p>
                        </div>
                        <div>
                            <i class="fa fa-envelope"></i>
                            <p>Tech: <a href="mailto:support@company.com">support@company.com</a><br/>
                            Query: <a href="mailto:support@company.com">support@company.com</a><br/>
                            Helpline: <a href="mailto:support@company.com">support@company.com</a></p>
                        </div>
                    </div>
        
                    <div class="footer-right">
        
                        <p class="footer-company-about">
                            <span>About the Website</span>
                            Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
                        </p>

                        <div class="footer-icons">
        
                            <a href="#"><i class="fa fa-facebook"></i></a>
                            <a href="#"><i class="fa fa-twitter"></i></a>
                            <a href="#"><i class="fa fa-linkedin"></i></a>
                            <a href="#"><i class="fa fa-github"></i></a>
        
                        </div>
        
                    </div>
                </footer>
                </div>
               
    );
  };
  
  export default Footer;
  
