import React from 'react';

const Service = (props) => {
    const { title, fee, time, date, img, details } = props.data;
    return (
        <div className="col">
            <div className="card">
                <img style={{ height: '220px' }} src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 style={{ color: '#06ADEF' }} className="card-title text-center fs-2">{title}</h5>
                    <p>date: <span>{date}</span> <span>{time}</span>  </p>
                    <p className="card-text">{details}</p>
                    <h3 className='fs-4'>Fee : <span className='fs-2 text-warning'>{fee}Tk</span> </h3>
                    <div className='text-center mt-5'> <button style={{ backgroundColor: '#06ADEF' }} className='w-50 p-3 border-0 rounded mx-auto text-center'>Add to Serial Number</button></div>
                </div>
            </div>
        </div >
    );
};

export default Service;