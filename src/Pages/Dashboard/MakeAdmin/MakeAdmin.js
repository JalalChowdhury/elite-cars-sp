import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import Fade from "react-reveal/Fade";
import { supabase } from '../../../DB/supabaseClient';

const MakeAdmin = () => {

    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    //set value
    const handleOnBlur = e => {
        setEmail(e.target.value);
    }

    const handleAdminSubmit =async (e) => {
        const user = { email };
        
        e.preventDefault();
        let { data, error } = await supabase
            .from("users")
            .update(user)
            .eq('email',email)
        if (error) {
            console.log(error);
        }
        else {
            alert("Successfully added Admin");
            setSuccess(true);
            e.target.reset();
        }

    }

    return (
        <div>
            <h2>Make an Admin</h2>
            <Fade bottom duration={2500}>
                <form onSubmit={handleAdminSubmit}>
                    <TextField
                        sx={{ width: '50%' }}
                        required
                        id="outlined-required"
                        label="Email"
                        type="email"
                        onBlur={handleOnBlur}
                    />
                    <br />
                    <Button style={{ width: '300px', marginTop: '10px', height: '50px', weight: '700px' }} type="submit" variant="contained">Make Admin</Button>
                </form>
            </Fade>
            {success && <Alert severity="success">Made Admin successfully!</Alert>}
        </div>
    );
};

export default MakeAdmin;