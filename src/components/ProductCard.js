import React from 'react'

function ProductCard({children, imgageURL, alt, title, price}) {
    return (
        <div className="product-card">
            <img src={imgageURL} alt={alt} className="card-image"/>
            <div className="card-highlights">
                <h3 className="card-title">{title}</h3>
                <h3 className="card-price">{price}</h3>
            </div>
            <p className="description">{children}</p>
        </div>
    );
};

export default ProductCard;