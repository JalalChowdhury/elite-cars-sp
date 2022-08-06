import { faFacebook, faInstagram, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
// import { faCoffee, faEnvelope, faMapMarked, faMapMarkedAlt, faMapMarkerAlt, faMarker, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container } from 'react-bootstrap';

import './Footer.css';

const Footer = () => {
    return (
        <div>

            <section className="footer-container">
                <Container>
                    <div className="subscribe d-flex justify-content-center">
                        <div>
                            <h2 className="mt-4 mr-5 text-center">Elite cars of Update, Tips & Special Offers</h2>
                            <h3 className="mt-1 mr-5 text-center">Subscribe to Our Newsletter</h3>
                            <p className="text-center mr-2"><small>No spam message from us, only give you latest offer which is best for you and your business</small></p>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text p-3" id="basic-addon1">@</span>
                                </div>
                                <input type="text" className="form-control me-1" placeholder="Email" aria-label="Email" aria-describedby="basic-addon1" required />
                                <button className="add-btn">Subscribe</button>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-4 mb-4 d-flex justify-content-around">
                        <div className="col-md-2 ml-1">
                            <h3 className=""> Contact US</h3>
                            <p> <small> <i className="fas fa-map-marker"></i> 29 Amborkana ,Sylhet BD </small> </p>
                            <p> <small> <i className="fas fa-envelope-square"></i> Elitecars7@gmail.com </small> </p>
                            <p> <small>  <i className="fas fa-phone-square-alt"></i> +880 1320-456789 </small> </p>

                        </div>

                        <div className="col-md-2 ml-1">
                            <h3 className="">Services</h3>
                            <p> <small>Choose your car</small> </p>
                            <p> <small>Trade-in</small> </p>
                            <p> <small>Online Orders</small> </p>
                            <p> <small>Others</small> </p>


                        </div>

                        <div className="col-md-2 ml-1">
                            <h3 className="">About Us</h3>
                            <p><small>Our story</small></p>
                            <p><small>Customer reviews</small></p>
                            <p><small>Our team</small></p>
                            <p><small>Recent Events</small></p>

                        </div>

                        <div className="col-md-2 ml-1">
                            <h3 className="">FAQ</h3>
                            <p> <small>How much does it cost to ship a car?</small> </p>
                            <p> <small>How far in advance should I book?</small> </p>
                            <p> <small>Is my vehicle insured during transport?</small> </p>

                        </div>

                    </div>
                    <div className="social-links text-center">
                        <a target="_blank" rel="noopener noreferrer" href="//www.facebook.com" > <FontAwesomeIcon className='text-black social-icon' icon={faFacebook} /></a>
                        <a target="_blank" rel="noopener noreferrer" href="//www.twitter.com" > <FontAwesomeIcon className='text-black social-icon' icon={faTwitter} /></a>
                        <a target="_blank" rel="noopener noreferrer" href="//www.instragram.com" > <FontAwesomeIcon className='text-black social-icon' icon={faInstagram} /></a>
                        <a target="_blank" rel="noopener noreferrer" href="//www.youtube.com" > <FontAwesomeIcon className='text-black social-icon' icon={faYoutube} /></a>
                        <a target="_blank" rel="noopener noreferrer" href="//www.linkedin.com" > <FontAwesomeIcon className='text-black social-icon' icon={faLinkedin} /></a>
                    </div>

                    <p className="text-center text-black mt-2 ">Copyright ©  Elite cars. All rights reserved. </p>
                </Container>
            </section>

        </div>
    );
};

export default Footer;