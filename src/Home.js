import React, { Component } from "react";
import pic from './Screenshot 2023-07-12 at 3.01.07 PM (1).png'

function handleButtonClick(imageIndex) {
    const inputFile = document.getElementById(`input-file${imageIndex}`);
    if (inputFile) {
      inputFile.click();
    }
  }

  const handleLogoImageChange = (event) => {
  const selectedImage = event.target.files[0];
  if (selectedImage) {
    const reader = new FileReader();
    reader.onload = () => {
      const logoImageElement = document.getElementById('logoimg');
      if (logoImageElement) {
        logoImageElement.src = reader.result;
      }
    };
    reader.readAsDataURL(selectedImage);
  }
};


  const handleImageChange = (event, imageIndex) => {
    const selectedImage = event.target.files[0];
    if (selectedImage) {
      const reader = new FileReader();
      reader.onload = () => {
        const imgElement = document.getElementById(`img-small${imageIndex}`);
        if (imgElement) {
          imgElement.src = reader.result;
        }
      };
      reader.readAsDataURL(selectedImage);
    }
  };

class Home extends Component {
  render() {
    return (
        
        <div>
        <section className="header-section">
        <h1>Welcome to Backyard Bar & Grill</h1>
        <p>
          The hottest destination in Sumter, SC! Nestled on 330 Rast St, our Bar & Grill promises an unforgettable
          experience that's as enticing as it is seductive. Step into our sultry ambiance where the tantalizing beats of
          good music fill the air, setting the perfect mood for an unforgettable night.
        </p>
        </section>
            <section className="content-container">
        <section className="image-container-section">
          <div className="image-container">
            <img src={pic} alt="Image 5" className="img-small" id='img-small5' />
            <button className="update-button" onClick={() => handleButtonClick(5)}>Update Image</button>
            <input type="file" accept="image/jpeg, image/jpg, image/png" id="input-file5" style={{ display: 'none' }} onChange={(e) => handleImageChange(e, 5)} />
          </div>
         
        </section>
      </section>
      
        
      <section className="custom-section-container">
        <div className="custom-content-box">
          <h1>About Backyard Bar & Grill</h1>
          <p>
            At Backyard Bar & Grill, we believe that it's the people who make the night truly special.
            Join our vibrant community and share laughter and unforgettable memories with friends and 
            strangers alike. Our doors are open for your next party or event, where you can dance and revel 
            until dawn.
      
            Whether you're seeking a casual lunch or a night of revelry, we've got you covered. Our lunch menu 
            boasts the best wings in town, prepared with a secret recipe that's been passed down through generations.
      
            But that's not all – our weeknights are packed with excitement. Every day from 4 p.m. to 8 p.m., we bring
            you happy hours that will leave you in high spirits. On Mondays, indulge in soul-stirring spoken words, while
            Tuesdays are a tantalizing affair of Taco's and Tequila. Wednesdays are for our sizzling "Kashed Out Wednesday's," 
            and Thursdays are all about R&B vibes. And let's not forget the thrilling $5 Feel Good Fridays to kickstart your weekend.
      
            Embrace the allure of Backyard Bar & Grill and discover a world of seduction, exquisite flavors, and unforgettable moments. 
            Come, join us, and let your senses be captivated in a night of pure indulgence.
          </p>
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
 
export default Home;