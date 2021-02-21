import React, { useEffect, useState } from 'react';
import '../styles/Carousel.css';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';


function Carousel() {
    let mediaMatch = window.matchMedia('(min-width: 750px)');
    const [matches, setMatches] = useState(mediaMatch.matches);
    useEffect(()=>{
        const handler = event=>setMatches(event.matches);
        mediaMatch.addEventListener('change', handler);
        return ()=> mediaMatch.removeEventListener('change', handler);
    });
    let styles = {
        position: 'relative',
        width: matches ? '50%' : '90%',
        height: matches ? '90vh' : '80vh'
    };
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
                style={styles}
                mobileTouch={true}
            />
    );
};
export default Carousel;