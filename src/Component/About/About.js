import React from 'react';
import pic from '../../images/riad4.jpg'

const About = () => {
    return (
        <div className='container w-50 mx-auto border'>
            <h1 className='text-center'>about My Self</h1>
            <div className='d-flex justify-content-between'>
                <div className='d-flex justify-content-center align-items-center'>
                    <img className='rounded-circle' style={{ width: '200px' }} src={pic} alt="" />
                    <h2 className='p-4'>Asif Riad</h2>
                </div>
                <div>
                    <h5>phone: 0162955872</h5>
                    <p>email:asifriad15@gmail.com</p>
                    <p><a href="">resume</a></p>
                </div>

            </div>
        </div>
    );
};

export default About;