import { Container, Typography, TextField, Button, CircularProgress, Alert } from '@mui/material';
import React, { useState } from 'react';
import { Grid } from '@mui/material';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hook/useAuth';
import loginImg from '../../../Images/loginBanner.svg';
import Navigation from '../../Shared/Navigation/Navigation';


const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }
    return (
        <>
            <Navigation />
            <Container>
                <Grid container spacing={2} sx={{ mt: 15 ,mb:5 }}>
                    <Grid item sx={{ mt: 2,pb:3,textAlign:'center', borderRadius:'5px', boxShadow: 1,backgroundColor:'white' }} xs={12} md={6}>
                        <Typography variant="body1" gutterBottom>Enter Your Credential</Typography>
                        <form onSubmit={handleLoginSubmit}>
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                required
                                id="outlined-required"
                                label="Your Email"
                                name="email"
                                onChange={handleOnChange}
                            />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                required
                                id="outlined-required"
                                label="Your Password"
                                type="password"
                                name="password"
                                onChange={handleOnChange}
                            />

                            <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Login</Button>
                            <NavLink
                                style={{ textDecoration: 'none' }}
                                to="/register">
                                <Button variant="text">New User? Please Register</Button>
                            </NavLink>
                            {isLoading && <CircularProgress />}
                            {user?.email && <Alert severity="success">Login successfully!</Alert>}
                            {authError && <Alert severity="error">{authError}</Alert>}
                        </form>

                        <Button onClick={handleGoogleSignIn} variant="contained">Google Sign In</Button>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img style={{ width: '100%' }} src={loginImg} alt="" />
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default Login;