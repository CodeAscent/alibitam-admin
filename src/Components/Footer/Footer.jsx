import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import logo from "../../Images/logo-removebg-preview.png";

function Footer() {
  return (
    <>
      <footer className="container-fluid mt-5">
        <div>
          <div className="row text-white py-5">
            <div>
              <div className="card-body text-center ">
                <h2 className="mb-4">
                  <b>It's time to get started</b>
                </h2>
                <div className="row text-center justify-content-center">
                  <div className="col-auto">
                    <div className="input-group-append">
                      <button
                        className="btn btn-success mt-4"
                        type="button"
                        id="button-addon2"
                      >
                        {" "}
                        <b>TRY ALIBTISAM FOR FREE</b>
                      </button>
                      <p className="pl-0 ml-0 mt-4">No credit card required.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section id="footer" className="mb-4">
          <div className="container">
            <div className="row text-justify">
              <div className="col-xs-12 col-sm-6 col-md-3">
                <h5>SPORTS</h5>
                <ul className="list-unstyled quick-links">
                  <li>
                    <Link to="/basketball">Basket Ball</Link>
                  </li>
                  <li>
                    <Link to="/fieldhockey">Field Hockey</Link>
                  </li>
                  <li>
                    <Link to="/floorball">Floor Ball</Link>
                  </li>
                  <li>
                    <Link to="/handball">Hand Ball</Link>
                  </li>
                  <li>
                    <Link to="/icehockey">Ice Hockey</Link>
                  </li>
                </ul>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-3">
                <br />
                <ul className="list-unstyled quick-links">
                  <li>
                    <Link to="/performance">Performance</Link>
                  </li>
                  <li>
                    <Link to="/soccer">Soccer</Link>
                  </li>
                  <li>
                    <Link to="/tennis">Tennis</Link>
                  </li>
                  <li>
                    <Link to="/volleyball">Volley Ball</Link>
                  </li>
                  <li>
                    <Link to="/othersport">Other Sports</Link>
                  </li>
                </ul>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-3">
                <h5>EXPLORE</h5>
                <ul className="list-unstyled quick-links">
                  <li>
                    <a href="/">Customers</a>
                  </li>
                  <li>
                    <a href="/">Testimonials</a>
                  </li>
                  <li>
                    <a href="/">Blog</a>
                  </li>
                  <li>
                    <a href="/">Contact</a>
                  </li>
                  <li>
                    <a href="/">About Us</a>
                  </li>
                </ul>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-3">
                <h5>RESOURCES</h5>
                <ul className="list-unstyled quick-links">
                  <li>
                    <a href="/">Support</a>
                  </li>
                  <li>
                    <a href="/">Downloads</a>
                  </li>
                  <li>
                    <a href="/">Legal</a>
                  </li>
                  <li>
                    <a href="/">Social Media</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
                <ul className="list-unstyled list-inline social text-center">
                  <li className="list-inline-item">
                    <a href="/" target="_blank">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://twitter.com/Alibtisamclub" target="_blank">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      href="https://www.instagram.com/Alibtisamclub/"
                      target="_blank"
                    >
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="/" target="_blank">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <hr />
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center borderleft">
                <p>
                  <span>English</span>
                  <span>Arabic</span>
                </p>
              </div>
            </div>
          </div>
        </section>
        <div className="container lastfooter">
          <div className="row align-items-center">
            <div className="col-lg-4 col-md-4 col-sm-4">
              <img src={logo} alt="logo" width="100" height="60" />
            </div>
            <div className="col-lg-8 col-md-8 col-sm-8 text-white">
              <p>
                @2023 ALIBTISAM Sports. All rights reserved. Devloped By MAH IT.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
