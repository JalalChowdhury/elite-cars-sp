import React from 'react';
import useAuth from './../../../hook/useAuth';

const DashboardProfile = () => {
    const {user} = useAuth();
    return (
        <div>
            <h2 style={{color:'navy'}}>Name: {user.displayName}</h2>
            <h5>E-mail : {user.email}</h5>
            
        </div>
    );
};

export default DashboardProfile;