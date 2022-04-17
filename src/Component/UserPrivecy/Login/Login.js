import React, { useRef } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import GoogleSignIn from '../GoogleSignIn';

const Login = () => {
    const emailRef = useRef();
    const passRef = useRef();
    const navigate = useNavigate();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const handlenavigation = (event) => {
        navigate('/register')
        event.preventDefault();
    }

    const handleSignIn = (event) => {
        const email = emailRef.current.value;
        const password = passRef.current.value;
        signInWithEmailAndPassword(email, password);
        console.log(user);
        event.preventDefault();
    }
    return (
        <div className='w-50 mx-auto border rounded mt-3'>
            <h2 className='text-center'>Log In</h2>
            <form className='p-2' onSubmit={handleSignIn}>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" ref={emailRef} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" ref={passRef} class="form-control" id="exampleInputPassword1" required />
                </div>
                <button type="submit" class="btn btn-primary" style={{ backgroundColor: '#06ADEF' }}>Submit</button>
            </form>
            <>
                <p className='mb-0'>New Member ?<a onClick={handlenavigation} href='/'>register</a> </p>
            </>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='w-50 bg-primary pl-1'></div> <p className='mt-2 p-2'>or</p> <div style={{ height: '1px' }} className='w-50 bg-primary'></div>
            </div>
            <GoogleSignIn></GoogleSignIn>

        </div>
    );
};

export default Login;