
import React from "react";

const Home = () => {
  return (
    <>
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3">
          <img
            className="card-img img-fluid"
            src="./assets/main.jpg"
            alt="Card"
            height={500}
          />
          <div className="card-img-overlay d-flex align-items-center">
            <div className="container">
              <h5 className="card-title text fw-lighter" style={{ color: "white", fontSize: "150px" }}>New Season Arrivals</h5>
              <p className="card-text" style={{ color: "white", fontSize: "50px" }}>
                This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
