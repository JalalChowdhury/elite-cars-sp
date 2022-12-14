import React, { useEffect, useState } from 'react';
// import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useParams } from 'react-router';
import { Box } from '@mui/system';

import './ProductPlaceOrder.css';
import OrderPlaceModal from '../OrderPlaceModal/OrderPlaceModal';
import { Link } from 'react-router-dom';
import { supabase } from '../../../DB/supabaseClient';

const ProductPlaceOrder = () => {
    const { productId } = useParams();
    console.log("id  ",productId);

    // for modal update 
    const [openBooking, setOpenBooking] = React.useState(false);
    const handleBookingOpen = () => setOpenBooking(true);
    const handleBookingClose = () => setOpenBooking(false);

    const [product, setProduct] = useState({});

    const fetchProducts = async () => {
        let { data: product, error } = await supabase
            .from("products")
            .select("*")
            // .order("productId", { ascending: false });
            .eq('id',productId)
        if (error) {
            console.log("error", error);
        }
        else {
            console.log("data from supabase", product);
            setProduct(product[0]);
        }
    };

    useEffect(() => {
        fetchProducts();

    }, [])
    return (
        <Box >


            <Card sx={{ maxWidth: "100%", maxheight: '70%', border: 0, boxShadow: 0 }}>

                <Box >
                    <CardMedia
                        component="img"
                        imgage-design
                        className="orderImg"
                        style={{ width: '100%' }}
                        image={product.img}
                        alt="green iguana"
                    />
                </Box>


                <Box style={{ p: 7 }}>
                    <CardContent >

                        <Typography variant="h5" component="div">
                            {product.name}
                        </Typography>
                        <Typography variant="p" component="div">
                            Model Year : {product.modelYear}
                        </Typography>
                        <Typography variant="h6" component="div">
                            ${product.price}
                        </Typography>

                        <Typography variant="body2" color="text.primary">
                            {product.description}
                        </Typography>
                    </CardContent>
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'center' ,my:3,p:2}}>
                    <Button onClick={handleBookingOpen} variant="contained" sx={{ textAlign: 'left', mr: 1, width: 200 }}>
                        Order Place
                    </Button>
                    <Link to="/home">
                        <Button variant="contained" sx={{ textAlign: 'right', ml: 1, width: 200 }}>
                            Back to Home
                        </Button>
                    </Link>

                </Box>






            </Card>

            <OrderPlaceModal
                product={product}
                openBooking={openBooking}
                handleBookingClose={handleBookingClose}
            // setBookingSuccess={setBookingSuccess}

            >
            </OrderPlaceModal>


        </Box>
    );
};

export default ProductPlaceOrder;