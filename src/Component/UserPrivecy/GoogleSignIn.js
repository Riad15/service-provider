import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/googleLogo.png';

const GoogleSignIn = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    if (loading) {
        return <p className='text-center'>Loading...</p>;
    }

    if (error) {
        window.alert(error);
    }

    if (user) {
        navigate('/home');
    }
    return (
        <div onClick={() => signInWithGoogle()} className='flex d-flex border border-primary justify-content-center align-items-center' style={{ backgroundColor: '#06ADEF', cursor: 'pointer' }}>
            <img src={logo} alt="" />
            <p className='mt-2 p-2 text-light fs-5'>sign in google</p>
        </div>
    );
};

export default GoogleSignIn;