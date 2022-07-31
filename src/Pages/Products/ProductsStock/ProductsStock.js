import { Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import stock from '../../../Images/stock-exchange-app.png';
import customer from '../../../Images/customer-service-agent.png';
import showroom from '../../../Images/car-dealer.png';
import './ProductStock.css';

const ProductsStock = () => {
    return (
        <Box sx={{ mt: 8 }} style={{ backgroundColor: '#e7e9eb' }}>

            <Container sx={{ p: 6 }}>
                <Typography sx={{ fontWeight: 600,  textAlign: 'center' }} className='headerProducts' variant="h3" component="div">
                    We are known for trend-setting styles and customization.
                </Typography>
                <Typography sx={{ fontWeight: 400, textAlign: 'center' }} variant="p" component="div">
                    For 5 years, we raising the standard of used car retailing with one of the most innovative and reliable used vehicle programmes ever created.
                </Typography>


                <Grid container spacing={{ xs: 1, md: 1 }} columns={{ sm: 12, md: 12 }}>
                    <Grid item sm={12} md={4}>

                        <Card sx={{ width: 300, boxShadow: 0 ,p:5,mt:3}}>

                            <CardMedia
                                component="img"
                                style={{ width: 'auto', height: '80px', margin: "0 auto" }}
                                image={stock}
                                alt="green iguana"
                            />
                            <CardContent>

                                <Typography variant="h3" component="div" style={{ weight:'700',textAlign: "center" }}>
                                    <span style={{color:'#ed1c24'}}>1200+</span>
                                </Typography>
                                <Typography variant="h6" component="div" color="text.primary" style={{ textAlign: "center" }}>
                                    Vehicles in stock
                                </Typography>
                            </CardContent>


                        </Card>

                    </Grid>
                    <Grid item sm={12} md={4}>

                        <Card sx={{ width: 300, boxShadow: 0 ,p:5, mt:8}}>

                            <CardMedia
                                component="img"
                                style={{ width: 'auto', height: '80px', margin: "0 auto" }}
                                image={customer}
                                alt="green iguana"
                            />
                            <CardContent>

                                <Typography variant="h3" component="div" style={{ textAlign: "center" }}>
                                <span style={{color:'#ed1c24'}}>10500+</span>
                                </Typography>
                                <Typography variant="h6" component="div" color="text.primary" style={{ textAlign: "center" }}>
                                    Happy <span style={{color:'#ed1c24'}}>Customers</span>
                                </Typography>
                            </CardContent>


                        </Card>

                    </Grid>
                    <Grid item sm={12} md={4}>

                        <Card sx={{ width: 300,  boxShadow: 0, p:5,mt:3}}>

                            <CardMedia
                                component="img"
                                style={{ width: 'auto', height: '80px', margin: "0 auto" }}
                                image={showroom}
                                alt="green iguana"
                            />
                            <CardContent>

                                <Typography variant="h3" component="div" style={{ textAlign: "center" }}>
                                 <span style={{color:'#ed1c24'}}>10+</span>
                                </Typography>
                                <Typography variant="h6" component="div" color="text.primary" style={{ textAlign: "center" }}>
                                    Showrooms
                                </Typography>
                            </CardContent>



                        </Card>

                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default ProductsStock;