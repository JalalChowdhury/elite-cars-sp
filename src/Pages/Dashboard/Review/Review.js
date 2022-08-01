import { Grid, TextField, Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
// import { Box } from '@mui/system';
import React, { useRef } from 'react';
import Fade from "react-reveal/Fade";
import { supabase } from '../../../DB/supabaseClient';
import useAuth from '../../../hook/useAuth';

import './Review.css';

const Review = () => {

    const { user } = useAuth();

    const addressRef = useRef();
    const ratingRef = useRef();
    const descriptionRef = useRef();




    const handleReviewSubmit = async (e) => {
        const address = addressRef.current.value;
        const rating = ratingRef.current.value;
        const description = descriptionRef.current.value;

        const review = { name: user.displayName, address, rating, description };
        console.log(review);

        // send to the server
        // fetch('https://enigmatic-citadel-92082.herokuapp.com/reviews', {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(review)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         if (data.insertedId) {

        //             alert("Successfully added Your feedback");
        //             e.target.reset();

        //         }
        //     });
        e.preventDefault();
        let { data, error } = await supabase
            .from("reviews")
            .insert(review)
            .single();
        if (error) {
            console.log(error);
        }
        else {
            alert("Successfully added Your feedback");
            e.target.reset();
        }
    }
    return (


        <Box sx={{ mx: "auto", backgroundColor: '#f4f4f4' }} className='reviewForm'>


            <Fade bottom duration={2500}>

                <Typography id="transition-modal-title" variant="h5" component="h5" sx={{ color: 'navy', textAlign: 'center' }}>
                    WE APPRECIATE YOUR REVIEW!
                </Typography>
                <Typography id="transition-modal-title" variant="p" component="p" sx={{ color: 'navy', textAlign: 'center' }}>
                    Your review will help us to improve our web hosting quality products, and customer services.
                </Typography>


                <form onSubmit={handleReviewSubmit}>
                    <Grid container spacing={2}>
                        <Grid item sm={12} md={6}>
                            <TextField
                                disabled
                                sx={{ width: '100%', m: 1 }}
                                id="outlined-required"
                                label="Name"
                                defaultValue={user.displayName}
                            />
                        </Grid>
                        <Grid item sm={12} md={6}>
                            <TextField
                                disabled
                                sx={{ width: '100%', m: 1 }}
                                id="outlined-disabled"
                                label="Email"
                                defaultValue={user.email}
                            />
                        </Grid>

                        <Grid item sm={12} md={6}>
                            <TextField
                                required
                                sx={{ width: '100%', m: 1 }}
                                inputRef={addressRef}
                                id="outlined-required"
                                label="Address"

                            />
                        </Grid>
                        <Grid item sm={12} md={6}>
                            <TextField

                                required
                                type="number"
                                sx={{ width: '100%', m: 1 }}
                                label="Rating"
                                inputRef={ratingRef}
                                InputProps={{
                                    inputProps: {
                                        max: 5, min: 1
                                    }
                                }}


                            />
                        </Grid>

                        <Grid item sm={12} md={12}>
                            <TextField
                                required
                                label="Review"
                                multiline
                                sx={{ width: '100%', m: 1 }}
                                rows={4}
                                inputRef={descriptionRef}

                            />

                        </Grid>




                    </Grid>
                    <Button type="Submit" variant="contained" sx={{ ml: 8, px: 5 }}>Submit</Button>




                </form>
            </Fade>
        </Box>





    );
};

export default Review;

