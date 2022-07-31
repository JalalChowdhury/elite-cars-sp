import { CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import find from '../../../Images/car.png';
import free from '../../../Images/return.png';
import appraisal from '../../../Images/appraisal.png';
import Fade from "react-reveal/Fade";


const Feature = () => {
    return (
        <Box style={{ backgroundColor: "#f0f8ff", paddingTop: '10px' }}>
            <Container>
                <Fade bottom duration={2500}>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ sm: 12, md: 12 }}>
                        <Grid item sm={12} md={4} >
                            <CardMedia
                                component="img"
                                style={{ width: 'auto', height: '80px', margin: "0 auto" }}
                                image={find}
                                alt="green iguana"
                            />
                            <CardContent>

                                <Typography variant="h5" component="div" style={{ textAlign: "center" }}>
                                    FIND YOUR VEHICLE HERE
                                </Typography>
                                <Typography variant="body2" color="text.primary" style={{ textAlign: "center" }}>
                                    View our new and brand vehicle inventory stocked with hundreds of cars, trucks and SUVs to choose from.
                                </Typography>
                            </CardContent>

                        </Grid>
                        <Grid item sm={12} md={4}>
                            <CardMedia
                                component="img"
                                style={{ width: 'auto', height: '80px', margin: "0 auto" }}
                                image={free}
                                alt="green iguana"
                            />
                            <CardContent>

                                <Typography variant="h5" component="div" style={{ textAlign: "center" }}>
                                    WORRY-FREE RETURN
                                </Typography>
                                <Typography variant="body2" color="text.primary" style={{ textAlign: "center" }}>
                                    Hassle-free returns.Thinking of returning a vehicle? Buy in confidence with our 30-day return policy.
                                </Typography>
                            </CardContent>
                        </Grid>
                        <Grid item sm={12} md={4}>
                            <CardMedia
                                component="img"
                                style={{ width: 'auto', height: '80px', margin: "0 auto" }}
                                image={appraisal}
                                alt="green iguana"
                            />
                            <CardContent>

                                <Typography variant="h5" component="div" style={{ textAlign: "center" }}>
                                    TRADE IN APPRAISAL
                                </Typography>
                                <Typography variant="body2" color="text.primary" style={{ textAlign: "center" }}>
                                    Get your free trade in appraisal now! Use our free, no- obligation trade-in appraisal from .Get it now.
                                </Typography>
                            </CardContent>

                        </Grid>
                    </Grid>
                </Fade>
            </Container>
        </Box>
    );
};

export default Feature;