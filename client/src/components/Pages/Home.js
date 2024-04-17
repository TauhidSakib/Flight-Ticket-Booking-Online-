import React from "react";
import "./styles/Home.css";
import Slider from "./Slider";
import Footer from "./Footer";
const Home = () => {
  return (
    <>
      
      <div className="row" style={{ marginTop: "35px" }}>
        <div className="col-lg-4 align-items-center d-flex justify-content-center">
          <div className="white border-0" style={{ width: "40rem" }}>
            <div className="text-center">
              {" "}
              <img
                src={require("../../images/Destinations_Dekstop.png")}
                style={{ borderRadius: "20px" }}
                width="650"
                height="550"
              />
              <div className="card-body white border-0">
                <h5 className="card-title">
                  <strong style={{ fontSize: "25px" }}>
                    <br/>Discover the destinations you can
                    <br /> travel with FAST Airways
                  </strong>
                </h5>
              </div>
            </div>
          </div>
        </div>
        

        
      </div>

      <br></br>
      <br></br>

      <div className="row">
        <div className="col-lg-6 align-items-center d-flex justify-content-center">
          <div
            className=" text-center"
            style={{ width: "35rem" }}
          >
            <h1>Exceptional experiences with FAST Airways</h1>
            <h5>
              Explore the world, earn rewards and live the best adventures with
              FAST Airways.{" "}
            </h5>
            <br></br>
            {/* <a href="contact.php"><button type="button" className="btn btn-primary">Contact us</button></a> */}
          </div>
        </div>

        <div className="col-lg-6 align-items-center d-flex justify-content-center">
          <div className="row">
            <div className="col-lg-12 align-items-center d-flex justify-content-center">
              <div className="card border-0" style={{ width: "50rem" }}>
                <div className="row">
                  <div className="col-lg-6">
                    <img
                      src={require("../../images/Large-Sustainability.jpg")}
                      className="card-img-top"
                      alt="..."
                    />
                  </div>
                  <div className="col-lg-6">
                  </div>
                </div>
              </div>
            </div>

            
            
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default Home;
