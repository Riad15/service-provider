import React from 'react';
import pic from '../../images/riad4.jpg'

const About = () => {
    return (
        <div className='container m-5 w-50 mx-auto border'>
            <h1 className='text-center'>about My Self</h1>
            <hr />
            <div className='d-flex justify-content-between align-items-center'>
                <div className='d-flex justify-content-center align-items-center'>
                    <img className='rounded-circle' style={{ width: '200px' }} src={pic} alt="" />
                    <h2 className='p-4'>Asif Riad</h2>
                </div>
                <div>
                    <p className='mb-0'>phone: 0162955872</p>
                    <p className='mb-0'>email:asifriad15@gmail.com</p>
                    <p className='mb-0'>Socile Profile: <a href="https://www.linkedin.com/in/riad-87335317a/">LinkedIn</a></p>
                    <a href="https://drive.google.com/file/d/1ZzJKqU03C4l3RUShaZOnwSNixbXWc7ZR/view?usp=sharing">resume</a>
                </div>
            </div>
            <div className='m-3 p-1'>
                <p>The only goal of my life is to develop myself as a skilled software engineer.thats why, I am trying my best. I am learning something new every day and applying it in real life. It inspires me a lot. Helps to do a lot of hard work. I find something new every day that will bring me a new challenge.</p>
            </div>
        </div>
    );
};

export default About;