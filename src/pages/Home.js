import React from "react";
import "./Home.css";
import cupcake from "../files/cupcake.jpg";
import cake from "../files/cake.jpg";
import pastries from "../files/pastries.jpg";

function Home() {
  return (
    <div>
      <div
        className="uk-section uk-dark uk-background-cover main-section"
        id="home"
      >
        <div className="uk-container">
          <h3>Section with Images</h3>
          <div className="uk-grid-match uk-child-width-1-3@m" data-uk-grid>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="uk-section uk-section-muted card-section">
        <div className="uk-container">
          <h3>SHOP OUR BESTSELLERS</h3>
          <div
            className="uk-child-width-1-3@m"
            data-uk-grid
            data-uk-scrollspy="cls: uk-animation-slide-bottom; target: .uk-card; delay: 300; repeat: true"
          >
            <div>
              <div className="uk-card uk-card-default uk-card-body uk-padding-remove special-card">
                <img src={cake} />
                <div className="overlay">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div
                className="uk-card uk-card-default uk-card-body uk-padding-remove special-card"
                uk-scrollspy-class="uk-animation-slide-top"
              >
                <img src={cupcake} />
                <div className="overlay">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="uk-card uk-card-default uk-card-body uk-padding-remove special-card">
                <img src={pastries} />
                <div className="overlay">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="uk-section uk-section-muted">
        <div className="uk-container">
          <h3>Section Muted</h3>
          <div className="uk-grid-match uk-child-width-1-3@m" data-uk-grid>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="uk-section uk-section-secondary uk-light">
        <div className="uk-container">
          <div className="uk-grid-match uk-child-width-1-4@m" data-uk-grid>
            <div>
              <h3>LOGO</h3>
              <p>icons for socials</p>
              <p>Copyright &copy; 2022 SmoochiesBakes</p>
            </div>
            <div>
              <h3>Shop Cakes</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
            </div>
            <div>
              <h3>Shop Treats</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
            </div>
            <div>
              <h3>Contact Us</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
