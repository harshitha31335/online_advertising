import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Appointment = () => {
  return (
    <div>
      {/* Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <a className="navbar-brand" href="#">Product Catalog</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Categories</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Main Content Area */}
      <div className="container mt-5">
        <div className="row">
          {/* Product Cards */}
          <div className="col-lg-4 col-md-6">
            <div className="card product-card">
              <img src="product1.jpg" className="card-img-top" alt="Product 1" />
              <div className="card-body">
                <h5 className="card-title">Product 1</h5>
                <p className="card-text">Description of Product 1.</p>
                <a href="#" className="btn btn-primary">View Details</a>
              </div>
            </div>
          </div>

          {/* Repeat the above product card structure for additional products */}

        </div>
      </div>
    </div>
  );
};

export default Appointment