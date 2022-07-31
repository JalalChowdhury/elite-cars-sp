import React from 'react';

import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import { Button, TextField } from '@mui/material';
import useAuth from '../../../hook/useAuth';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 450,
    bgcolor: 'background.paper',
    border: '1px solid #000',
    borderRadius: '5px',
    boxShadow: 24,
    p: 4,
};

const OrderPlaceModal = ({ product, openBooking, handleBookingClose }) => {

    

    const { user } = useAuth();
    
    const handleBookingSubmit = e => {
        // collect data
        const orderPlace = {
           
            carModel : product.name,
            price : product.price,
            buyerName: user.displayName,
            email: user.email,
            status: "PENDING",
            bookingDate: new Date().toDateString('dd/mm/yyyy')
        }
        // send to the server
        fetch('https://enigmatic-citadel-92082.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderPlace)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {

                    // from availbale appointment
                    // setBookingSuccess(true);
                    handleBookingClose();
                }
            });

        e.preventDefault();


        alert("Order Place Successfully Completed.")
    }

    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={openBooking}
            onClose={handleBookingClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={openBooking}>
                <Box sx={style}>
                    <Typography id="transition-modal-title" variant="h6" component="h2">
                        Order Info
                    </Typography>
                    <form onSubmit={handleBookingSubmit}>
                        <TextField
                            disabled
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-helperText"
                            label="Car Model"
                            defaultValue={product.name}

                            size="small"
                        />
                        <TextField
                             disabled
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-helperText"
                            label="Name"
                            defaultValue={user.displayName}
                           
                            size="small"
                        />
                        <TextField
                            disabled
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-helperText"
                            label="Email"
                            defaultValue={user.email}
                            size="small"
                        />
                        <TextField

                            sx={{ width: '90%', m: 1 }}
                            id="outlined-helperText"
                            label="Phone"
                            defaultValue="+8801..."
                            size="small"
                        />
                        <TextField

                            sx={{ width: '90%', m: 1 }}
                            id="outlined-helperText"
                            label="Address"
                            defaultValue="Amborkana,Sylhet"
                            size="small"
                        />
                        <TextField
                            disabled
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-helperText"
                            label="Price"
                            defaultValue={product.price}
                            size="small"
                        />
                        <Button type="Submit" variant="contained">Submit</Button>

                    </form>
                </Box>
            </Fade>
        </Modal>
    );
};

export default OrderPlaceModal;