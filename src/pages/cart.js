import Main from "../layouts/main";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Cart() {
    const [cart, setCart] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/carts/user/1')
            .then(res => res.json())
            .then(json => setCart(json));
    }, []);

    useEffect(() => {
        // Fetch product details for all items in the cart
        const fetchProductDetails = async () => {
            const productDetails = await Promise.all(
                cart.flatMap((item) =>
                    item.products.map(async (product) => {
                        const response = await fetch(`https://fakestoreapi.com/products/${product.productId}`);
                        const productData = await response.json();
                        return { ...productData, quantity: product.quantity };
                    })
                )
            );
            setProducts(productDetails);
        };

        if (cart.length > 0) {
            fetchProductDetails();
        }
    }, [cart]);

    return (
        <Main>
            {/* Hero Start */}
            <div className="container-fluid bg-primary hero-header mb-5">
                <div className="container text-center">
                    <h1 className="display-4 text-white mb-3 animated slideInDown">Cart</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb justify-content-center mb-0 animated slideInDown">
                            <li className="breadcrumb-item"><a className="text-white" href="#">Home</a></li>
                            <li className="breadcrumb-item"><a className="text-white" href="#">Pages</a></li>
                            <li className="breadcrumb-item"><a className="text-white" href="#">Cart</a></li>
                        </ol>
                    </nav>
                </div>
            </div>
            {/* Hero End */}
            <div style={{ padding: '16px', minHeight: 'calc(100vh - 110px)' }}>
                {/* Products list */}
                <section>
                    <div className="container center">
                        <h3 className="display-4 text-gray mb-3 animated slideInDown text-primary" style={{ textAlign: "center", padding: '5%' }}>Products list</h3>
                        <div className="row justify-content-center">
                            {products.map((item, index) => (
                                <div key={item.id} className="col-md-4 mb-5" style={{ border: '1px solid lightgreen', padding: '16px' }}>
                                    <Link to={`detail/${item.id}`}>
                                        <img src={item.image} alt={item.title} style={{ padding: 'auto', width: '74px', height: '74px' }} />
                                        <br></br>
                                        <h5 style={{ padding: '10px 0px 0px 0px' }}>{item.title}</h5>
                                    </Link>

                                    <h6 style={{ fontStyle: "green" }}>price: {item.price}</h6>
                                    <p>Quantity: {item.quantity}</p>
                                    <p style={{ padding: '5px', color: 'lightgreen' }}>Total: ${(item.price * item.quantity).toFixed(2)}</p>

                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Calculate and display the total price for all products */}
                    <div style={{margin: '5px', top: '50%', left: '10px', padding: '5px', background: 'lightgreen', borderRadius: '5px' }}>
                        <p style={{paddingLeft: '80%', fontSize: '24px', color: 'white', fontWeight: 'bold', margin: '0' }}>Total Price</p>
                        <p style={{paddingLeft: '80%', fontSize: '24px', color: 'white', fontWeight: 'bold', margin: '0' }}>${(products.reduce((acc, item) => acc + item.price * item.quantity, 0)).toFixed(2)}</p>
                    </div>
                </section>
            </div>




        </Main>
    );
}

export default Cart;
