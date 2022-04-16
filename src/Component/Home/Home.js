import React from 'react';
import useData from '../Hooks/useData';
import Cover from './Cover/Cover';
import Service from './Service/Service';

const Home = () => {
    const [data] = useData();
    return (
        <div>
            <div>
                <h1 className='text-center p-5'><span style={{ color: '#696969' }}>appointment-</span> <span style={{ color: '#06ADEF' }}>Scheduling</span></h1>
            </div>
            <Cover></Cover>
            <div>
                <h1 style={{ color: '#06ADEF' }} className='text-center'>Service Feature</h1>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        data.map(data =>
                            <Service
                                key={data.id}
                                data={data}
                            ></Service>
                        )
                    }

                </div>

            </div>

        </div>
    );
};

export default Home;