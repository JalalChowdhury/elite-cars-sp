import { Container, Typography, TextField, Button, CircularProgress, Alert } from '@mui/material';
import React, { useState } from 'react';
import { Grid } from '@mui/material';

import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hook/useAuth';
import loginImg from '../../../Images/loginBanner.svg';
import Navigation from '../../Shared/Navigation/Navigation';
import { Box } from '@mui/system';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const history = useHistory();
    const { user, registerUser, isLoading, authError } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match');
            return;
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }
    return (

        <Box>
            <Navigation />
            <Container >
                <Grid container spacing={2} sx={{ mt: 15,mb:5 }}>
                    <Grid item sx={{ mt: 2,pb:3,textAlign:'center', borderRadius:'5px', boxShadow: 1,backgroundColor:'white' }} xs={12} md={6} >
                        <Typography variant="h4" component="div" style={{ ml: 3 }} gutterBottom>Create Your Account</Typography>
                        {!isLoading && <form onSubmit={handleLoginSubmit}>
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                required
                                id="outlined-required"
                                label="Your Name"
                                name="name"
                                onBlur={handleOnBlur}
                            />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                required
                                id="outlined-required"
                                label="Your Email"
                                name="email"
                                type="email"
                                onBlur={handleOnBlur}
                            />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                required
                                id="outlined-required"
                                label="Your Password"
                                type="password"
                                name="password"
                                onBlur={handleOnBlur}
                            />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                required
                                id="outlined-required"
                                label="ReType Your Password"
                                type="password"
                                name="password2"
                                onBlur={handleOnBlur}
                            />

                            <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Register</Button>
                            <NavLink
                                style={{ textDecoration: 'none' }}
                                to="/login">
                                <Button variant="text">Already Registered? Please Login</Button>
                            </NavLink>
                        </form>}
                        {isLoading && <CircularProgress />}
                        {user?.email && <Alert severity="success">User Created successfully!</Alert>}
                        {authError && <Alert severity="error">{authError}</Alert>}
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img style={{ width: '100%' }} src={loginImg} alt="" />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Register;