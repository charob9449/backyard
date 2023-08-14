import React, { Component } from "react";
import './App.css';
import pic2 from './Screenshot 2023-07-12 at 3.01.07 PM (1).png'

class NightLounge extends Component {
  componentDidMount() {
    // Add scroll event listener
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    // Remove scroll event listener when component unmounts
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    // Calculate the position of the images
    const imageElements = document.querySelectorAll(".fade-in");
    imageElements.forEach(image => {
      const imageTop = image.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (imageTop < windowHeight) {
        image.classList.add("fade-in-visible");
      }
    });
  }

  render() {
    return (
      <div>
        <section className="custom-section-container">
          <div className="custom-content-box">
            <div className="bay-window-slider">
              <img src={pic2} alt="Back Yard" className="fade-in" id="monday" />
              <img src={pic2} alt="Back Yard" className="fade-in" id="tuesday" />
              <img src={pic2} alt="Back Yard" className="fade-in" id="wednesday" />
              <img src={pic2} alt="Back Yard" className="fade-in" id="thursday" />
              <img src={pic2} alt="Back Yard" className="fade-in" id="friday" />
              <img src={pic2} alt="Back Yard" className="fade-in" id="monday" />
              <img src={pic2} alt="Back Yard" className="fade-in" id="tuesday" />
              <img src={pic2} alt="Back Yard" className="fade-in" id="wednesday" />
              <img src={pic2} alt="Back Yard" className="fade-in" id="thursday" />
              <img src={pic2} alt="Back Yard" className="fade-in" id="friday" />
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