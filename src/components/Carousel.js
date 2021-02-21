import React from 'react';
import '../styles/Carousel.css';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

function Carousel() {
    return (
            <AwesomeSlider
                media={[
                {
                    source: './images/FotoInicio.jpeg',
                },
                {
                    source: './images/hotcakes.jpeg',
                },
                {
                    source: './images/leche.jpeg',
                },
                ]}
                style={{
                    position: 'relative',
                    width: '90%',
                    height: '80vh'
                }}
                mobileTouch={true}
            />
    );
};
export default Carousel;