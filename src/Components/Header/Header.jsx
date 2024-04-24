import React from "react";
import logo from "../../Images/logo-removebg-preview.png";
import "./header.css";
import { Link } from "react-router-dom";
import { CiBasketball } from "react-icons/ci";
import {
  MdSportsHockey,
  MdSportsTennis,
  MdCalendarMonth,
  MdOutlineOndemandVideo,
  MdFeaturedPlayList,
} from "react-icons/md";
import { PiBaseball } from "react-icons/pi";
import {
  FaFootballBall,
  FaHockeyPuck,
  FaDumbbell,
  FaRegThumbsUp,
} from "react-icons/fa";
import { GiSoccerBall, GiVolleyballBall } from "react-icons/gi";
import { SlSupport } from "react-icons/sl";
import { ImBlog } from "react-icons/im";
import { IoCloudDownloadSharp } from "react-icons/io5";
import {
  BsSpeedometer2,
  BsClipboard2PulseFill,
  BsFillCollectionPlayFill,
  BsHeartPulse,
} from "react-icons/bs";
import { BiMessage } from "react-icons/bi";

function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg backcolor larger shadow ">
        <div className="container">
          <Link to="/" className="navbar-brand" href="#">
            <img src={logo} alt="Bootstrap" width="65" height="45" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className=" nav navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="dropdown nav-item m-2 ps-3 rounded-1 ">
                <a
                  className="navbar-brand "
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Sports
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link
                      to="/basketball"
                      className="dropdown-item d-flex justify-content-between align-items-center"
                      href="/"
                    >
                      Basket Ball <CiBasketball />
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/fieldhockey"
                      className="dropdown-item d-flex justify-content-between align-items-center"
                      href="/"
                    >
                      Field Hockey <MdSportsHockey />
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/floorball"
                      className="dropdown-item d-flex justify-content-between align-items-center"
                      href="/"
                    >
                      Floor Ball <PiBaseball />
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/handball"
                      className="dropdown-item d-flex justify-content-between align-items-center"
                      href="/"
                    >
                      Hand Ball <FaFootballBall />
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/icehockey"
                      className="dropdown-item d-flex justify-content-between align-items-center"
                      href="/"
                    >
                      Ice Hockey <FaHockeyPuck />
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/performance"
                      className="dropdown-item d-flex justify-content-between align-items-center"
                      href="/"
                    >
                      Performance <FaDumbbell />
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/soccer"
                      className="dropdown-item d-flex justify-content-between align-items-center"
                      href="/"
                    >
                      Soccer <GiSoccerBall />
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/tennis"
                      className="dropdown-item d-flex justify-content-between align-items-center"
                      href="/"
                    >
                      Tennis <MdSportsTennis />
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/volleyball"
                      className="dropdown-item d-flex justify-content-between align-items-center"
                      href="/"
                    >
                      Volley Ball <GiVolleyballBall />
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/othersport"
                      className="dropdown-item d-flex justify-content-center align-items-center"
                      href="/"
                    >
                      Other Sports
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="dropdown nav-item m-2 ps-3 rounded-1">
                <Link
                  to="/features"
                  className="navbar-brand "
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Features
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <a
                      className="dropdown-item d-flex justify-content-between align-items-center"
                      href="/"
                    >
                      Planning & Management <MdCalendarMonth />
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item d-flex justify-content-between align-items-center"
                      href="/"
                    >
                      Monitoring & Evaluations <BsSpeedometer2 />
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item d-flex justify-content-between align-items-center"
                      href="/"
                    >
                      Communication <BiMessage />
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item d-flex justify-content-between align-items-center"
                      href="/"
                    >
                      Tactics & Diagrams <BsClipboard2PulseFill />
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item d-flex justify-content-between align-items-center"
                      href="/"
                    >
                      Video Analysis <MdOutlineOndemandVideo />
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item d-flex justify-content-between align-items-center"
                      href="/"
                    >
                      Collections <BsFillCollectionPlayFill />
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item d-flex justify-content-between align-items-center"
                      href="/"
                    >
                      Injury Management <BsHeartPulse />
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item d-flex justify-content-between align-items-center"
                      href="/"
                    >
                      All Features <MdFeaturedPlayList />
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item m-2 ps-3 rounded-1">
                <Link
                  to="/"
                  className="navbar-brand "
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  User Stories
                </Link>

                {/* <a className="navbar-brand " href="" target="_blank">User Stories</a> */}
              </li>
              <li className="dropdown nav-item m-2 ps-3 rounded-1">
                <a
                  className="navbar-brand "
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Resources
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link
                      to="/"
                      className="dropdown-item d-flex justify-content-between align-items-center"
                      href="/"
                    >
                      Support <SlSupport />
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="dropdown-item d-flex justify-content-between align-items-center"
                      href="/"
                    >
                      Blog <ImBlog />
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="dropdown-item d-flex justify-content-between align-items-center"
                      href="/"
                    >
                      Downloads <IoCloudDownloadSharp />
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="dropdown-item d-flex justify-content-between align-items-center"
                      href="/"
                    >
                      Social Media <FaRegThumbsUp />
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item rounded-1 m-2 ps-3 freetutorial text-white">
                <Link
                  to="/LoginForm"
                  className="navbar-brand   text-white"
                  href="/"
                >
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
