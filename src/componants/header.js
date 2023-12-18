import { Link } from "react-router-dom";

function Header(props) {
    return (
        <body>
            {/* Navbar Start */}
            <div className="container-fluid sticky-top">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light p-0">
                        <Link to={`/`}>
                            <a className="navbar-brand">
                                <br></br>
                                <h2 className="text-black">Shopping</h2>
                            </a>
                        </Link>

                        <button type="button" className="navbar-toggler ms-auto me-0" data-bs-toggle="collapse"
                            data-bs-target="#navbarCollapse">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <div className="navbar-nav ms-auto">
                                {props.children}
                                <Link to={`/`}><a className="nav-item nav-link active">Shopping App</a></Link>
                                <Link to={`/product`}><a className="nav-item nav-link">Products</a></Link>
                                <Link to={`/contact`}><a className="nav-item nav-link">Contact</a></Link>
                                <Link to={`/cart`}><a className="nav-item nav-link">Cart</a></Link>
                            </div>
                            <Link to={`/register`} className="mx-2">
                                <a className="btn btn-dark py-2 px-4 d-none d-lg-inline-block">Sign Up</a>
                            </Link>
                            <span className="text-muted">|</span> {/* Separator */}
                            <Link to={`/login`} className="mx-2">
                                <div style={{ color: 'black' }}>Sign In</div>

                            </Link>
                        </div>
                    </nav>
                </div>
            </div>
            {/* Navbar End */}
        </body>
    );
}

export default Header;
