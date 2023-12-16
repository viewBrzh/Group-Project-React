import { useEffect, useState } from "react";
import Main from "../layouts/main";
import { Link } from "react-router-dom";

function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    return (
        <Main>
            <div className="container-fluid bg-primary hero-header mb-5">
                <div className="container text-center">
                    <h1 className="display-4 text-white mb-3 animated slideInDown">Products</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb justify-content-center mb-0 animated slideInDown">
                            <li className="breadcrumb-item"><a className="text-white" href="#">Home</a></li>
                            <li className="breadcrumb-item"><a className="text-white" href="#">Pages</a></li>
                            <li className="breadcrumb-item text-white active" aria-current="page">Products</li>
                        </ol>
                    </nav>
                </div>
            </div>
            <div className="container-fluid py-5">
                <div className="container">
                    <div className="mx-auto text-center wow fadeIn br" data-wow-delay="0.1s">
                        <h1 className="text-primary mb-3"><span className="fw-light text-dark">Shop </span> Products</h1>
                        <p className="mb-5">There are many products for you to choose from as desired.</p>
                    </div>
                    <div className="row g-4">
                        {products.map(product => (
                            <div key={product.id} className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s">
                                <div className="product-item text-center border h-100 p-4 d-flex flex-column">
                                    <Link to={`detail/${product.id}`}>
                                        <img className="img-fluid mb-4" src={product.image} alt={product.title} style={{ height: '200px' }} />
                                    </Link>
                                    <h6 className="mb-3">{product.title}</h6>
                                    <div className="mt-auto">
                                        <a href="#" className="btn btn-outline-primary px-3">Add To Cart</a>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div className="col-12 text-center mt-4">
                            <a className="btn btn-outline-primary py-2 px-4" href="#">Load More Products</a>
                        </div>
                    </div>
                </div>
            </div>
        </Main>
    );
}

export default Products;