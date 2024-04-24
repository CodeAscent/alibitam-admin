import React, { useState, useEffect } from "react";
import "./home.css";
import Footer from "../Footer/Footer.jsx";
import Header from "../Header/Header.jsx";
import { FcCheckmark } from "react-icons/fc";
import image1 from "../../Images/1.jpg";
import image2 from "../../Images/2.jpg";
import image3 from "../../Images/3.jpg";
import image4 from "../../Images/4.jpg";
import image5 from "../../Images/5.jpg";
import image6 from "../../Images/6.jpg";
import image7 from "../../Images/7.jpg";

const imageData = [
  {
    id: 1,
    image: image1,
  },
  {
    id: 2,
    image: image2,
  },
  {
    id: 3,
    image: image3,
  },
  {
    id: 4,
    image: image4,
  },
  {
    id: 5,
    image: image5,
  },
  {
    id: 6,
    image: image6,
  },
  {
    id: 7,
    image: image7,
  },
];

function Home() {
  const [randomImage, setRandomImage] = useState(null);
  useEffect(() => {
    const getRandomImage = () => {
      const randomIndex = Math.floor(Math.random() * imageData.length);
      return imageData[randomIndex].image;
    };

    setRandomImage(getRandomImage());
  }, []);
  return (
    <>
      <Header />

      <div className="container-fluid ">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-6 col-sm-12 mt-5">
            <h1>
              <b>
                We power your <br /> performance
              </b>
            </h1>
            <h5 className="mt-3">
              <b>Complete software solution for modern clubs and coaches</b>
            </h5>

            <h5>
              <b>
                <FcCheckmark />
                Monitor and analyze all training data
              </b>
            </h5>
            <h5>
              <b>
                <FcCheckmark />
                Make data-driven coaching decisions
              </b>
            </h5>
            <h5>
              <b>
                <FcCheckmark />
                Give instant feedback to your players
              </b>
            </h5>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            {randomImage ? (
              <img
                src={randomImage}
                alt="Random"
                width="350"
                height="300"
                className="mt-5 img-fluid"
              />
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
      </div>
      <div className="container-fluid mtop">
        <div className="row justify-content-between align-items-center ">
          <div className="col-lg-6 col-md-6 col-sm-12 pe-5 ">
            <h1>
              <b>You need a powerful solution for your athletes to excel</b>
            </h1>
            <p>
              <b>Save time and keep everything in one place</b>
            </p>
            <h5>
              <b>Communicate with your athletes</b>
            </h5>
            <hr />
            <h5>
              <b>Analyze performance and training</b>
            </h5>
            <hr />
            <h5>
              <b>Create high levels of accountability and feedback</b>
            </h5>
            <hr />
            <h5>
              <b>Build your lifetime of coaching observation</b>
            </h5>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 ">
            <img
              src="images/dashboard.jpeg"
              alt="products"
              width="550"
              className="img-fluid"
            />
          </div>
        </div>
      </div>

      <div className="container-fluid mtop">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-6 col-sm-12 mt-5">
            <img
              src="images/planning.png"
              alt="image"
              width="500"
              className="img-fluid"
            />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 mt-5">
            <h1 className="mb-5">
              <b>Organization & Planning</b>
            </h1>
            <h5 className="mt-5">
              <b>Build your curriculum based on your coaching philosophy</b>
            </h5>
            <hr />
            <h5>
              <b>Plan all team and individual training</b>
            </h5>
            <hr />
            <h5>
              <b>Get a complete overview of what's happening in your club</b>
            </h5>
          </div>
        </div>
      </div>

      <div className="container-fluid color mtop">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-6 col-sm-12 mt-5">
            <h1 className="mb-5">
              <b>Communication</b>
            </h1>
            <h5 className="mt-5">
              <b>Share all preparations for match and training</b>
            </h5>
            <hr />
            <h5>
              <b>Give instructions impossible to misunderstand</b>
            </h5>
            <hr />
            <h5>
              <b>Keep all communication in one place</b>
            </h5>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 mt-5">
            <img
              src="images/communication.png"
              alt="image"
              width="400"
              height="300"
              className="img-fluid"
            />
          </div>
        </div>
      </div>

      <div className="container-fluid mtop">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-6 col-sm-12 mt-5">
            <img
              src="images/monitoring1.png"
              alt="image"
              width="400"
              height="300"
              className="img-fluid"
            />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 mt-5">
            <h1 className="mb-5">
              <b>Monitoring</b>
            </h1>
            <h5 className="mt-5">
              <b>Analyze performance and training data</b>
            </h5>
            <hr />
            <h5>
              <b>Monitor readiness, wellness and training load</b>
            </h5>
            <hr />
            <h5>
              <b>Make data-driven coaching decisions</b>
            </h5>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Home;
