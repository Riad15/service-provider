import React from 'react';
import { Carousel } from 'react-bootstrap';
import cover1 from '../../../images/cover1.png'
import cover2 from '../../../images/cover2.png'
import cover3 from '../../../images/cover3.png'


const Cover = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={cover1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h2>Health is the root of all happiness</h2>
                        <p>Time and health are two valuable assets that need to be evaluated before they run out.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={cover2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h2>Health is the root of all happiness</h2>
                        <p>Time and health are two valuable assets that need to be evaluated before they run out.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={cover3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h2>Health is the root of all happiness</h2>
                        <p>Time and health are two valuable assets that need to be evaluated before they run out.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Cover;