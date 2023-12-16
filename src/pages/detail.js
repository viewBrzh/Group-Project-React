import React, { useEffect, useState } from "react";
import Main from "../layouts/main";
import { useParams } from "react-router-dom";

// Function to generate star icons based on the rating
const renderStars = (rating) => {
    if (!rating) return null;

    const starCount = Math.floor(rating);
    const stars = Array.from({ length: starCount }, (_, index) => (
        <i key={index} className="fa fa-star text-primary"></i>
    ));
    return stars;
};

function Detail() {
    const { productId } = useParams();
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch(`https://fakestoreapi.com/products/${productId}`)
            .then((response) => response.json())
            .then((json) => {
                setProduct(json);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching product data:", error);
                setLoading(false);
            });
    }, [productId]);

    return (
        <Main>
            <div className="container-fluid bg-primary hero-header mb-5">
                <div className="container text-center">
                    <h4 className="display-4 text-white mb-3 animated slideInDown">{product.title}</h4>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb justify-content-center mb-0 animated slideInDown">
                            <li className="breadcrumb-item"><h5 className="text-white">{product.category}</h5></li>
                        </ol>
                    </nav>
                </div>
            </div>
            <section className="masthead page-section portfolio" id="portfolio">
                <div className="container">
                    <div key={product.id} className="product-item text-center border h-100 p-4">
                        <p>Image:</p>
                        {product.image && <img
                            src={product.image}
                            alt={`Image for ${product.title}`}
                            style={{ maxWidth: '100%', maxHeight: '300px', borderRadius: '8px' }}
                        />}
                        <div className="mb-2">
                            {renderStars(product.rating?.rate)}
                            <small>(rating_count : {product.rating?.count})</small>
                        </div>
                        <p>Title: {product.title}</p>
                        <p>Price: {product.price}</p>
                        <p>Category: {product.category}</p>
                        <p>Description: {product.description}</p>
                    </div>
                </div>
            </section>
        </Main>
    );
}

export default Detail;
