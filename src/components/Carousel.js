import React from 'react';


let carouselImages = ['hotcakes.jpeg', 'leche.jpeg', 'Logo.png'];


function Carousel() {
    const renderButtons = ()=>{
        if(carouselImages.length < 1) return;
        return carouselImages.map((img, index)=>{
            return(
                <button type="button"
                        data-bs-target="#carouselExampleCaptions" 
                        data-bs-slide-to={index} 
                        className={index === 0 ? 'active' : ''} 
                        aria-current={index === 0 ? 'true' : ''} 
                        aria-label={`Slide ${index}`}
                        key={index}
                        />
            );
        });
    };
    const renderImages = ()=>{
        if(carouselImages.length < 1) return;
        return carouselImages.map((imgURL, index)=>{
            return(
                <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                    <img src={`./images/${imgURL}`} className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Label number {index + 1}</h5>
                        <p>Some representative placeholder content for the first slide.</p>
                    </div>
                </div>
            );
        });
    };
    return (
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                {renderButtons()}
            </div>
            <div className="carousel-inner">
                {renderImages()}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"  data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"  data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default Carousel;

