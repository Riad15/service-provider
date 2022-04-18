import React, { useRef } from 'react';
import GoogleSignIn from '../GoogleSignIn';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import Footer from '../../Footer/Footer';
const Register = () => {
    const nameRef = useRef();
    const emailRef = useRef();
    const passRef = useRef();
    const confirmPassRef = useRef();
    const navigate = useNavigate();


    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);


    const handlenavigation = (event) => {
        navigate('/login')
        event.preventDefault();
    }

    const handleSignUpForm = (event) => {
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passRef.current.value;
        const confirmPassword = confirmPassRef.current.value;
        if (password === confirmPassword) {
            createUserWithEmailAndPassword(email, password);
            toast('successful your account');

        } else {
            window.alert('your passWord not match.')
        }
        event.preventDefault();
    }
    return (
        <div className='container'>
            <div className='w-50 mx-auto border rounded mt-3'>
                <h2 className='text-center'>Sign Up</h2>
                <form className='p-2' onSubmit={handleSignUpForm}>
                    <div className='mb-3'>
                        <label htmlFor="exampleInputName" className='from-label'>Name</label>
                        <input type="text" ref={nameRef} className="form-control" name="name" id="exampleInputName" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail" className="form-label">Email address</label>
                        <input type="email" ref={emailRef} className="form-control" id="exampleInputEmail" aria-describedby="emailHelp" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword" className="form-label">Password</label>
                        <input type="password" ref={passRef} className="form-control" id="exampleInputPassword" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputConfirmPassword" className="form-label">Confirm Password</label>
                        <input type="password" ref={confirmPassRef} className="form-control" id="exampleInputConfirmPassword" required />
                    </div>
                    <button type="submit" className="btn btn-primary" style={{ backgroundColor: '#06ADEF' }}>Submit</button>
                </form>
                <>
                    <p className='mb-0'>have an account ?<a onClick={handlenavigation} href='/'>Log In</a> </p>
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

export default Register;