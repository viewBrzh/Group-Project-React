import React from 'react';
import Main from '../layouts/main';
import { Link } from 'react-router-dom';

function Contact() {
    return (
        <Main>
            <div className="container-fluid bg-primary hero-header mb-5">
                <div className="container text-center">
                    <h1 className="display-4 text-white mb-3 animated slideInDown">Contact</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb justify-content-center mb-0 animated slideInDown">
                            <li className="breadcrumb-item"><Link to={`/`}><a className="text-white" href="#">Home</a></Link></li>
                            <li className="breadcrumb-item"><a className="text-white" href="#">Pages</a></li>
                            <li className="breadcrumb-item text-white active" aria-current="page">Contact</li>
                        </ol>
                    </nav>
                </div>
            </div>

            <div className="container-fluid py-5">
                <div className="container">
                    <div className="mx-auto text-center wow fadeIn" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
                        <h1 className="text-primary mb-3">
                            <span className="fw-light text-dark" style={{ fontSize: 'smaller' }}>Welcome to</span>
                        </h1>
                        <h1 className="text-primary mb-5"><span className="fw-light text-dark"></span>TrendEnsemble Style Group</h1>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-4 wow fadeIn" data-wow-delay="0.1s">
                            <div className="contact-info-item position-relative bg-primary text-center p-3">
                                <div className="border py-5 px-3">
                                    <i className="fa fa-map-marker-alt fa-3x text-dark mb-4"></i>
                                    <h5 className="text-white">Address</h5>
                                    <h5 className="fw-light text-white">Walailak 222 Thaiburi 80161</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 wow fadeIn" data-wow-delay="0.3s">
                            <div className="contact-info-item position-relative bg-primary text-center p-3">
                                <div className="border py-5 px-3">
                                    <i className="fa fa-phone-alt fa-3x text-dark mb-4"></i>
                                    <h5 className="text-white">Call Us</h5>
                                    <h5 className="fw-light text-white">+0242855487</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 wow fadeIn" data-wow-delay="0.5s">
                            <div className="contact-info-item position-relative bg-primary text-center p-3">
                                <div className="border py-5 px-3">
                                    <i className="fa fa-envelope fa-3x text-dark mb-4"></i>
                                    <h5 className="text-white">Mail Us</h5>
                                    <h5 className="fw-light text-white">wesixshop@gmail.com</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row g-5">
                    <div className="col-lg-7 wow fadeIn mx-auto" data-wow-delay="0.1s">
                    <div className="col-lg-5 wow fadeIn" data-wow-delay="0.5s">
                        <iframe
                            title="Google Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15778.080495299922!2d99.89196754021961!3d8.641980437421942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3053a1796fcd307f%3A0x7aadb40e612ebad!2z4Lih4Lir4Liy4Lin4Li04LiX4Lii4Liy4Lil4Lix4Lii4Lin4Lil4Lix4Lii4Lil4Lix4LiB4Lip4LiT4LmM!5e0!3m2!1sth!2sth!4v1702731503731!5m2!1sth!2sth"
                            width="600"
                            height="450"
                            style={{ border: '0', margin: 'auto' }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="mx-auto"  // Add this class to center the iframe
                        ></iframe>
                    </div>
                        
                    </div>
                </div>
            </div>

            <div className="container-fluid py-5">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-7 wow fadeIn" data-wow-delay="0.1s">
                            <h4 className="mb-4">If You Have Any Query Please Contact Us</h4>
                            <div className="wow fadeIn" data-wow-delay="0.3s">
                                <form>
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input type="text" className="form-control" id="name" placeholder="Your Name" />
                                                <label htmlFor="name">Your Name</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input type="email" className="form-control" id="email" placeholder="Your Email" />
                                                <label htmlFor="email">Your Email</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <input type="text" className="form-control" id="subject" placeholder="Subject" />
                                                <label htmlFor="subject">Subject</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <textarea className="form-control" placeholder="Leave a message here" id="message" style={{ height: '150px' }}></textarea>
                                                <label htmlFor="message">Message</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button className="btn btn-primary w-100 py-3" type="submit">Send Message</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Main>
    );
}

export default Contact;
