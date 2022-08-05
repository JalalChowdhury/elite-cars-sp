import React, { useEffect, useState } from 'react';
import Fade from "react-reveal/Fade";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import ProductCard from '../../Shared/ProductCard/ProductCard';
import { supabase } from '../../../DB/supabaseClient';



const HomeProducts = () => {

    // all services 
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        let { data: products, error } = await supabase
            .from("products")
            .select("*")
            .order("id", { ascending: true });
        if (error) {
            console.log("error", error);
        }
        else {
            console.log("data from supabase", products);
            setProducts(products);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, [])


    // get fisrt 6 items in services 
    const topProducts = products.slice(0, 6);

    return (
        <Box sx={{ flexGrow: 1, py: 6 }}>
            <Fade bottom duration={2500}>
                <Container>
                    <Typography sx={{ fontWeight: 600, m: 2, color: 'info.main', textAlign: 'center' }} variant="h4" component="div">
                        Top Products
                    </Typography>

                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ sm: 12, md: 12 }}>
                        {
                            topProducts.map((product) =>
                                <ProductCard
                                    key={product.id}
                                    product={product}
                                ></ProductCard>)
                        }
                    </Grid>
                </Container>
            </Fade>
        </Box>
    );
};

export default HomeProducts;