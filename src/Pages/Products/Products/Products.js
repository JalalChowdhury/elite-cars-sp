import React, { useEffect, useState } from 'react';

import Fade from "react-reveal/Fade";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import ProductCard from '../../Shared/ProductCard/ProductCard';
import Navigation from '../../Shared/Navigation/Navigation';
import Footer from '../../Shared/Footer/Footer';
import ProductsStock from '../ProductsStock/ProductsStock';
import './Products.css';




const Products = () => {

    // all services 
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://enigmatic-citadel-92082.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [])

    // const historyServices = useHistory();
    // const handleClickPackages = () => {
    //     historyServices.push('/packages');
    // }




    return (
        <Box className="products">
            <Navigation></Navigation>
            <ProductsStock />
            <Box sx={{ flexGrow: 1, mt: 12 }} >
            <Fade bottom duration={2500}>
                <Container sx={{ mb: 8 }}>
                    <Typography sx={{ fontWeight: 600, color: 'info.main', textAlign: 'center', my: 5 }} variant="h4" component="div">
                        Our All Products
                    </Typography>

                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ sm: 12, md: 12 }}>
                        {
                            products.map((product) =>
                                <ProductCard
                                    key={product._id}
                                    product={product}
                                ></ProductCard>)
                        }
                    </Grid>
                </Container>
                </Fade>
            </Box>
            <Footer />
        </Box>
    );
};

export default Products;