import React from 'react';
import logo from '../../images/googleLogo.png';

const GoogleSignIn = () => {
    return (
        <div className='flex d-flex border border-primary justify-content-center align-items-center' style={{ backgroundColor: '#06ADEF', cursor: 'pointer' }}>
            <img src={logo} alt="" />
            <p className='mt-2 p-2 text-light fs-5'>sign in google</p>
        </div>
    );
};

export default GoogleSignIn;