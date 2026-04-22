import React from "react";
import logo from "../Component/assets/logo-light.svg";
import "../Component/Footer.css";

function Footer() {
  return (
    <footer className="footer py-5 px-3 px-md-5">
      <div className="container">
        {/* Top Row */}
        <div className="row gy-4 py-4">
          {/* Logo & Social */}
          <div className="col-12 col-md-6 col-lg-3">
            <div className="mb-3">
              <img src={logo} alt="Logo" className="mb-3" />
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="d-flex gap-3 mt-3">
              <p>F</p>
              <p>E</p>
              <p>In</p>
              <p>Be</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-6 col-md-6 col-lg-2">
            <h5 className="mb-4">Quick Links</h5>
            <p className="text-secondary mb-2">Home</p>
            <p className="text-secondary mb-2">Product</p>
            <p className="text-secondary mb-2">Careers</p>
            <p className="text-secondary mb-0">Pricing</p>
          </div>

          {/* Services */}
          <div className="col-6 col-md-6 col-lg-2">
            <h5 className="mb-4">Services</h5>
            <p className="text-secondary mb-2">Web Development</p>
            <p className="text-secondary mb-2">App Development</p>
            <p className="text-secondary mb-2">Digital Marketing</p>
            <p className="text-secondary mb-0">UI/UX Design</p>
          </div>

          {/* Support */}
          <div className="col-6 col-md-6 col-lg-2">
            <h5 className="mb-4">Support</h5>
            <p className="text-secondary mb-2">Company</p>
            <p className="text-secondary mb-2">Press Media</p>
            <p className="text-secondary mb-2">Our Blog</p>
            <p className="text-secondary mb-0">Contact Us</p>
          </div>

          {/* Newsletter */}
          <div className="col-12 col-md-6 col-lg-3">
            <h5 className="mb-4">Newsletter</h5>
            <p className="text-secondary mb-2">Subscribe to receive future</p>
            <p className="text-secondary mb-3">updates</p>
            <input
              placeholder="Email Address"
              className="form-control"
              type="email"
            />
          </div>
        </div>

        <hr />

        {/* Bottom Row */}
        <div className="row mt-4 text-secondary small gy-3">
          <div className="col-12 col-md-6 d-flex flex-wrap gap-3">
            <p className="mb-0">English</p>
            <p className="mb-0">Privacy Policy</p>
            <p className="mb-0">Support</p>
          </div>
          <div className="col-12 col-md-6 text-md-end">
            <p className="mb-0">
              © 2025 Base. created by Raji sulaion
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
