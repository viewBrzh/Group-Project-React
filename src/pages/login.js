import { useEffect, useState } from "react";
import Main from "../layouts/main";
import { Link } from "react-router-dom";
import React from 'react';

function Login() {

  const [data, setData] = useState([]);

  useEffect(() => {


        fetch('https://fakestoreapi.com/auth/login',{
            method:'POST',
            body:JSON.stringify({
                username: "mor_2314",
                password: "83r5^_"
            })
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
  })

  

  return (
    <Main>


       
    <section className="vh-100" style={{ backgroundColor: '#7bccb5' }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card shadow-2-strong" style={{ borderRadius: '1rem' }}>
              <div className="card-body p-5 text-center">

                <h3 className="mb-5">Sign in</h3>

                <div className="form-outline mb-4">
                  <input type="email" id="typeEmailX-2" className="form-control form-control-lg" />
                  <label className="form-label" htmlFor="typeEmailX-2">Email</label>
                </div>

                <div className="form-outline mb-4">
                  <input type="password" id="typePasswordX-2" className="form-control form-control-lg" />
                  <label className="form-label" htmlFor="typePasswordX-2">Password</label>
                </div>

              
                <div className="form-check d-flex justify-content-start mb-4">
                  <input className="form-check-input" type="checkbox" value="" id="form1Example3" />
                  <label className="form-check-label" htmlFor="form1Example3"> Remember password </label>
                </div>
                <Link to={`/`}>
                <button className="btn btn-primary btn-lg btn-block" type="submit">Login</button>
                </Link>
                

                <hr className="my-4" />

                <button className="btn btn-lg btn-block btn-primary" style={{ backgroundColor: '#36454f' }} type="submit">
                  <i className="fab fa-google me-2"></i> Sign in with Google
                </button>
                <button className="btn btn-lg btn-block btn-primary mb-2" style={{ backgroundColor: '#3b5998' }} type="submit">
                  <i className="fab fa-facebook-f me-2"></i> Sign in with Facebook
                </button>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
    </Main>
  );
}

export default Login;
