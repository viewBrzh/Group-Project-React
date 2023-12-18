import '../App.css';
import Main from '../layouts/main';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=4')
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  const [rec, setRac] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/category/jewelery')
      .then((res) => res.json())
      .then((json) => setRac(json));
  }, []);

  return (
    <Main>
      {/* Hero Start */}
      <div className="container-fluid bg-primary hero-header mb-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 text-center text-lg-start">
              <h3 className="fw-light text-white animated slideInRight">Natural & Organic</h3>
              <h1 className="display-4 text-white animated slideInRight">Product <span className="fw-light text-dark">Decorations</span> For Beauty</h1>
              <p className="text-white mb-4 animated slideInRight">Choosing beautiful accessories is not just about decorating yourself. But it is also an expression of your taste and personality. If you have jewelry that looks good It not only increases your beauty and excitement. But they can also be culturally valuable items and have important meanings..</p>
              <Link to={`/product`} className="btn btn-dark py-2 px-4 me-3 animated slideInRight">Shop Now</Link>
              <Link to={`/contact`} className="btn btn-outline-dark py-2 px-4 animated slideInRight">Contact Us</Link>
            </div>
          </div>
        </div>
      </div>
      {/* Hero End */}
      
      {/* Product Start */}
      <div className="container-fluid py-5">
        <div className="container">
          <div className="mx-auto text-center wow fadeIn" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
            <h1 className="text-primary mb-3"><span className="fw-light text-dark">normal products</span> Essential products</h1>
            <p className="mb-5">There are many products that you will be interested in. and hurry up and order now.</p>
          </div>
          <div style={{ padding: '16px', maxHeight: '450px' }}>
          <div className="row g-4 d-flex flex-wrap">
            {/* Render your product items here */}
            {data.map((product, index) => (
              <div className="col-md-3 flex-grow-1" key={index}>
                <div className="card" style={{height:'500px'}}>
                  <img src={product.image} className="card-img-top" alt={product.title} style={{height: '250px'}}/>
                  <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">Price: ${product.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          </div>
        </div>
      </div>
      {/* Product End */}

       {/* Product Start */}
       <div className="container-fluid py-5">
        <div className="container">
          <div className="mx-auto text-center wow fadeIn" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
            <h1 className="text-primary mb-3"><span className="fw-light text-dark">Popular product list </span> The most beautiful jewelry</h1>
            <p className="mb-5">Decorations that you will be interested in and impressed by it.</p>
          </div>
          <div style={{ padding: '16px', maxHeight: '450px' }}>
          <div className="row g-4 d-flex flex-wrap">
            {/* Render your product items here */}
            {rec.map((item, index) => (
              <div className="col-md-3 flex-grow-1" key={index}>
                <div className="card" style={{height:'500px'}}>
                  <img src={item.image} className="card-img-top" alt={item.title} style={{height: '250px'}} />
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">Price: ${item.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          </div>
        </div>
      </div>
      {/* Product End */}
    </Main>
  );
}

export default App;