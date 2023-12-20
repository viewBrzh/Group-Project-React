import React from 'react';
import Main from '../layouts/main';
import { Link } from "react-router-dom";

function Register() {
    return (
        <Main>
            <div className='Bbody'>
                <section className="container Ccontainer" style={{ width: '700px', background: 'linear-gradient(135deg, #72eab6, #e99df5)' }}>                <div class="content">
                    <form>
                        <div className="title"> Register </div>
                        <div className="content">
                            <div className="user-details">
                                <div class="input-box">
                                    <label for="fullName"> Name </label>
                                    <input type="text" class="form-control" placeholder="Input your fullname"></input>
                                </div>

                            </div>
                            <div className="user-details">
                                <div className="input-box">
                                    <label htmlFor="email"> Email </label>
                                    <input type="email" className="form-control" id="email" placeholder="Input your Email" ></input>
                                </div>
                                <div className="input-box">
                                    <label htmlFor="sPhone"> Password </label>
                                    <input type="tel" className="form-control" id="sPhone" placeholder="Input your Password" ></input>
                                </div>
                            </div>

                            <div className="title">Personal information </div>
                            <div className="content">
                                <div className="user-details">
                                    <div className="input-box">
                                        <label htmlFor="homeAddress">Address</label>
                                        <input type="text" className="form-control" id="homeAddress"  ></input>
                                    </div>
                                    <div className="input-box">
                                        <label htmlFor="village">Village No.</label>
                                        <input type="text" className="form-control" id="village"  ></input>
                                    </div>
                                    <div className="input-box">
                                        <label htmlFor="road"> Street </label>
                                        <input type="text" className="form-control" id="road"  ></input>
                                    </div>
                                    <div className="input-box">
                                        <label htmlFor="subDistrict"> Subdistrict </label>
                                        <input type="text" className="form-control" id="subDistrict" ></input>
                                    </div>
                                    <div className="input-box">
                                        <label htmlFor="district"> District </label>
                                        <input type="text" className="form-control" id="district" ></input>
                                    </div>
                                    <div className="input-box">
                                        <label htmlFor="province"> province </label>
                                        <input type="text" className="form-control" id="province"  ></input>
                                    </div>
                                    <div className="input-box">
                                        <label htmlFor="postalCode"> Postalcode </label>
                                        <input type="text" className="form-control" id="postalCode" ></input>
                                    </div>
                                </div>


                            </div>



                            <Link to={`/login`}>
                            <div class="button">
                                <input id="submitBtn" type="submit" value="Register"></input>
                            </div>
                            </Link>
                        </div>

                    </form >
                </div >
                </section >
            </div>
        </Main>
    );
}

export default Register;