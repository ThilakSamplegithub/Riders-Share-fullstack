import React from "react";
import "../Components/HomePage.css";

function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="logo">
          {/* <img
            className="logo"
            // src="https://raw.githubusercontent.com/Elson0509/uber-homepage-clone/main/imgs/logo.webp"
            src=""
            alt=""
          /> */}
        </div>
        <div>
          <a href="#" className="footer-visit-link">
            Visit Help Center
          </a>
        </div>
        <div className="footer-themes">
          <div>
            <ul>
              <h2>Company</h2>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Our offerings</a>
              </li>
              <li>
                <a href="#">Newsroom</a>
              </li>
              <li>
                <a href="#">Investors</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">AI</a>
              </li>
              <li>
                <a href="#">Gift cards</a>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <h2>Products</h2>
              <li>
                <a href="#">Ride</a>
              </li>
              <li>
                <a href="#">Drive</a>
              </li>
              <li>
                <a href="#">Eat</a>
              </li>
              <li>
                <a href="#">Uber for Business</a>
              </li>
              <li>
                <a href="#">Uber Freight</a>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <h2>Global citizenship</h2>
              <li>
                <a href="#">Safety</a>
              </li>
              <li>
                <a href="#">Diversity and Inclusion</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-social">
          <div className="footer-social-icons">
            <a href="#">
              <i className="fab fa-facebook-square"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="#">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
          <div>
            <div className="footer-icon-text footer-social-icons">
              <a href="#">
                <i className="fas fa-globe"></i>
                <p>English</p>
              </a>
            </div>
            <div className="footer-icon-text footer-social-icons">
              <a href="#">
                <i className="fas fa-map-marker-alt"></i>
                <p>London, Ont</p>
              </a>
            </div>
          </div>
          <div
            className="stores"
            style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}
          >
            <a href="#">
              <img
                src="https://raw.githubusercontent.com/Elson0509/uber-homepage-clone/1a5cb53774c547ac1b94ed2637084eff885b7638/imgs/googleplay.svg"
                alt="Google Play Store"
              />
            </a>
            <a href="#">
              <img
                src="https://raw.githubusercontent.com/Elson0509/uber-homepage-clone/1a5cb53774c547ac1b94ed2637084eff885b7638/imgs/appstore.svg"
                alt="Apple App Store"
              />
            </a>
          </div>
        </div>
        <div className="footer-privacy">
          <div>
            <p>© 2021 Uber Technologies Inc.</p>
          </div>
          <div>
            <ul>
              <li>
                <a href="#">Privacy</a>
              </li>
              <li>
                <a href="#">Accessibility</a>
              </li>
              <li>
                <a href="#">Terms</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;