import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Contact from '../Contact/Contact';
import Feature from '../Feature/Feature';
import HomeBanner from '../HomeBanner/HomeBanner';
import HomeProducts from '../HomeProducts/HomeProducts';
import UserReviews from '../UserReviews/UserReviews';
// import Navigation from '../../Shared/Navigation/Navigation';

const Home = () => {
    return (
        <div>
           
            <Navigation />
            <HomeBanner />
            <Feature />
            <HomeProducts />
            
            <UserReviews></UserReviews>
            
            <Contact></Contact>
            <Footer></Footer>
            

        </div>
    );
};

export default Home;