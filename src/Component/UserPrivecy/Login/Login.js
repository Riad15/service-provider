import React, { useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import GoogleSignIn from '../GoogleSignIn';

const Login = () => {
    const emailRef = useRef('');
    const passRef = useRef('');
    const navigate = useNavigate('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(auth);
    const handlenavigation = (event) => {
        navigate('/register')
        event.preventDefault();
    }
    if (error) {
        alert(error);
    }
    if (loading) {
        <p className='text-center'>Loading...</p>;
    }
    if (user) {
        toast('login succesfull');
        navigate('/home');
    }


    const handleSignIn = (event) => {
        const email = emailRef.current.value;
        const password = passRef.current.value;
        signInWithEmailAndPassword(email, password);
        event.preventDefault();
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        } else {
            toast('please enter your valid email address');
        }
    }

    return (
        <div className='container'>
            <div className='w-50 mx-auto border rounded mt-3'>
                <h2 className='text-center'>Log In</h2>
                <form className='p-2' onSubmit={handleSignIn}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" ref={emailRef} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" ref={passRef} className="form-control" id="exampleInputPassword1" required />
                    </div>
                    <button type="submit" className="btn btn-primary" style={{ backgroundColor: '#06ADEF' }}>Submit</button>
                </form>
                <>
                    <p className='mb-0'>New Member ?<a onClick={handlenavigation} href='/'>register</a> </p>
                    <p className='mb-0'>forget Password ?<a onClick={resetPassword} href='/'>Reset Password</a> </p>
                </>
                <div className='d-flex align-items-center'>
                    <div style={{ height: '1px' }} className='w-50 bg-primary pl-1'></div> <p className='mt-2 p-2'>or</p> <div style={{ height: '1px' }} className='w-50 bg-primary'></div>
                </div>
                <GoogleSignIn></GoogleSignIn>
                <ToastContainer />

            </div>
        </div>
    );
};

export default Login;