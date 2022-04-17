import React from 'react';
import { useParams } from 'react-router-dom';

const Schedule = () => {
    const { id } = useParams()
    return (
        <div>
            <h1> product id: {id}</h1>
        </div>
    );
};

export default Schedule;