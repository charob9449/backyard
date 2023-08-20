import React, { Component } from "react";
import './App.css';
import pic2 from './Screenshot 2023-07-12 at 3.01.07 PM (1).png'
import pic1 from './drinks.jpg'
import pic3 from './Backyardpic (1).jpg'
import pic4 from './backyard.jpg'
class NightLounge extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlide: 0,
    };
  }

  componentDidMount() {
    this.startSlideshow();
  }

  componentWillUnmount() {
    this.stopSlideshow();
  }

  startSlideshow = () => {
    this.slideInterval = setInterval(() => {
      this.showSlide(this.state.currentSlide + 1);
    }, 4000); // Change slide every 4 seconds (adjust as needed)
  }

  stopSlideshow = () => {
    clearInterval(this.slideInterval);
  }

  showSlide = (slideIndex) => {
    const slides = document.querySelectorAll(".slide-fade");
    if (slideIndex >= slides.length) {
      slideIndex = 0;
    }
    if (slideIndex < 0) {
      slideIndex = slides.length - 1;
    }

    slides.forEach((slide, index) => {
      if (index === slideIndex) {
        slide.style.display = "block";
      } else {
        slide.style.display = "none";
      }
    });

    this.setState({ currentSlide: slideIndex });
  }

  render() {
    return (
      <div>
        <section className="custom-section-container">
          <div className="custom-content-box">
            <div className="bay-window-slider">
              <img src={pic2} alt="Back Yard" className="slide-fade" id="monday" />
              <img src={pic1} alt="Back Yard" className="slide-fade" id="tuesday" />
              <img src={pic3} alt="Back Yard" className="slide-fade" id="wednesday" />
              <img src={pic4} alt="Back Yard" className="slide-fade" id="thursday" />
            </div>
          </div>
        </section>
      
            <footer className="footer">
        <div className="footer-section">  <h1>ORDER</h1>
        <a href="#">Egg Rolls</a> <a href="#">Kitchen Fries</a> <a href="#">Philly Cheese</a> <a href="#">Wings</a>
        <a href="#">Queso,</a> <a href="#">Bacon Cheese Fries & Crispy Kitchen Fries</a> <a href="#">Drinks</a> 
        <a href="#">Fried Shrimp</a><a href="#">Santa Fe Philly Cheese</a><a href="#">Fried Pickles Spears</a>
        <a href="#">Fried Broccoli</a><a href="#">Jalapeno Poppers</a><a href="#">Salads</a><a href="#">Grilled Chicken</a>
        <a href="#">Crispy Chicken</a><a href="#">Tacos(Shrimp, Chicken, or Beef,)</a><a href="#">Burgers</a><a href="#">Pasta</a>
        </div>
        <div className="footer-section">
        <h1>ABOUT US</h1>
        <a href="https://www.facebook.com/TheKitchen330RastSt?mibextid=LQQJ4d">FaceBook</a>
        </div>
        <div className="footer-section">
        <h1>MY ACCOUNT</h1>
        <a href="#">Create an Account</a> <a href="signIn.php">Sign In</a> <a href="#">Order Status</a>
        <address>
          Backyard Bar & Grill <br />
          330 Rast St <br />
          Sumter, SC 29150  <br />
          (803) 757 - 111
        </address>
        </div>
      </footer>
    </div>
  );
}
}

export default NightLounge;