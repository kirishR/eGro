import React from 'react';
import { Container } from 'react-bootstrap';
import './style.css'

function Footer2() {
    return (
        <footer2 >
            <div class="footer2">
                <div class="footer2_info">
                    <div class="footer2_width about1">
                        <h2><b>About</b></h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>

                    </div>
                    <div class="footer2_width link1">
                        <h2><b>Quick Link</b></h2>
                        <ul class="list5">
                            <li><a style={{ color: "#676867" }} href={"/"}>Home</a></li>
                            <li><a style={{ color: "#676867" }} href={'/info'}>About</a></li>
                            <li><a style={{ color: "#676867" }} href="#">Service</a></li>
                            <li><a style={{ color: "#676867" }} href="https://wa.me/94771268588" target="_blank">Contact</a></li>
                        </ul>
                    </div>
                    <div class="footer2_width contact">
                        <h2><b>Contact</b></h2>
                        <ul class="list5">
                            <li>
                                <span >
                                    <i class="fa fa-map-marker fa-2x mb-3" style={{ marginRight: "20px" }}></i></span>
                                <a href="https://goo.gl/maps/7s6rKzN8xBLAvFcG7" style={{ color: "#676867" }} target="_blank">  College Road Ilavalai , Jaffna</a>
                            </li>
                            <li>
                                <span><i class="fa fa-envelope fa-2x mr-2 mb-3"></i></span>
                                <a style={{ color: "#676867" }} href="mailto:kirirajes81@gmail.com">infoeGro@gmail.com</a>
                            </li>
                            <li>
                                <span><i class="fa fa-phone  fa-2x mt-1" style={{ marginRight: "16px" }}></i></span>
                                <a style={{ color: "#676867" }} href="tel: 0767160699">0775532182</a>
                            </li>
                            <li>

                            </li>

                        </ul>

                    </div>


                </div>
               
                <div class="social-media" >
                    <ul class="list5">
                        <li><a class="btn btn-link btn-floating btn-lg text-dark m-1" href="#" ><i style={{ color: "#676867" }} class="fa fa-facebook fb-1"></i></a></li>
                        <li><a class="btn btn-link btn-floating btn-lg text-dark m-1" href="#"><i style={{ color: "#676867" }} class="fa fa-instagram fb-2"></i></a></li>
                        <li><a class="btn btn-link btn-floating btn-lg text-dark m-1" href="#"><i style={{ color: "#676867" }} class="fa fa-twitter fb-3"></i></a></li>
                        <li><a
                            class="btn btn-link btn-floating btn-lg text-dark m-1"
                            href="#!"
                            
                        ><i class="fab fa-google-plus-g"></i>
                        </a></li>
                    </ul>
                </div>
                <hr></hr>


                <div class="copy-right">
                    <p><b>&copy; {new Date().getFullYear()} All Rights Reserved To -  <a href="https://www.mdbootstrap.com"> eGro.lk </a></b></p> 
                </div>



            </div>
        </footer2>
    )
}

export default Footer2;