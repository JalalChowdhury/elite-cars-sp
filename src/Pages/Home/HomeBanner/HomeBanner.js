import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import headerBanner from '../../../Images/banner-car2.jpg';
import './HomeBanner.css';
import Fade from "react-reveal/Fade";

const HomeBanner = () => {


    return (
        <div>
            <div>
                <img src={headerBanner} className="homeBanner" alt="" />

                <div className="header-bodyDesign">
                    <Fade bottom duration={2500}>

                        <h1 id="home-header1">LET'S FIND YOUR PERFECT CAR</h1>

                        <p id="home-header2" className="home-text my-3">QUALITY CARS. BETTER PRICES. TEST DRIVES BROUGHT TO YOU.</p>

                        <Link to="/products" className="homeBtnDesign">
                            <Button className='homeBtn' style={{ width: '250px' }}>Explore more</Button>
                        </Link>

                    </Fade>


                </div>

            </div>
        </div>
    );
};

export default HomeBanner;