import React from 'react'

const Hk = () => {
  return (
    <div>
  <header className="header" id="header">
    <a href="#home" className="logo"> <img src="img/icon.png" /> Food Zone </a>
    <div className="fa-solid fa-bars" id="menu-icon" />
    <div className="fa-solid fa-xmark" id="close-icon" />
    <ul className="navbar">
      <li><a href="#home">HOME</a></li>
      <li><a href="#about">ABOUT</a></li>
      <li><a href="#menu">MENU</a></li>
      <li><a href="#services">SERVICES</a></li>
      <li><a href="#contact">CONTACT</a></li>
    </ul>
  </header>
  {/* Home Section: */}
  <section className="home" id="home">
    <div className="home-text">
      <h1>Food Zone</h1>
      <h2>Food The <br /> Most Precious Things</h2>
      <a href="#" className="btn">Today's Menu</a>
    </div>
    <div className="home-img">
      <img src="img/home.png" />
    </div>
  </section>
  {/* About Section: */}
  <section className="about" id="about">
    <div className="about-img">
      <img src="img/about.png" />
    </div>
    <div className="about-text">
      <span>About Us</span>
      <h2>We speak the good <br /> food language</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero sed dolorum praesentium aspernatur.</p>
      <a href="#" className="btn">Learn More</a>
    </div>
  </section>
  {/* Menu Section: */}
  <section className="menu" id="menu">
    <div className="heading">
      <span>Food Menu</span>
      <h2>Fresh taste and great price</h2>
    </div>
    <div className="menu-container">
      <div className="box">
        <div className="box-img">
          <img src="img/food1.png" />
        </div>
        <h2>Chicken Burger</h2>
        <h3>Tasty Food</h3>
        <span>₹149/-</span>
        <i className="bx bx-cart-alt" />
      </div>
      <div className="box">
        <div className="box-img">
          <img src="img/food2.png" />
        </div>
        <h2>Crispy Chicken Burger</h2>
        <h3>Tasty Food</h3>
        <span>₹199/-</span>
        <i className="bx bx-cart-alt" />
      </div>
      <div className="box">
        <div className="box-img">
          <img src="img/food3.png" />
        </div>
        <h2>Fried Chicken Pack</h2>
        <h3>Tasty Food</h3>
        <span>₹249/-</span>
        <i className="bx bx-cart-alt" />
      </div>
    </div>
  </section>
  {/* Service Section: */} 
  <section className="services" id="services">
    <div className="heading">
      <span>Services</span>
      <h2>We Provide best quality food</h2>
    </div>
    <div className="service-container">
      <div className="s-box">
        <img src="img/s1.png" />
        <h3>Order</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero sed dolorum praesentium aspernatur.</p>
      </div>
      <div className="s-box">
        <img src="img/s2.png" />
        <h3>Shipping</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero sed dolorum praesentium aspernatur.</p>
      </div>
      <div className="s-box">
        <img src="img/s3.png" />
        <h3>Delivered</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero sed dolorum praesentium aspernatur.</p>
      </div>
    </div>
  </section>
  {/* Call Us: */}
  <section className="call">
    <h2>We make quality food <br /> Everyday</h2>
    <a href="#" className="btn">Let's talk</a>
  </section>
  {/* footer: */}
  <section id="contact">
    <div className="footer">
      <div className="main">
        <div className="col">
          <h4>Menu Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="col">
          <h4>Information</h4>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Delivery Information</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms &amp; Conditions</a></li>
          </ul>
        </div>
        <div className="col">
          <h4>Location</h4>
          <p>No : 419, 1st Floor, <br /> LIC Colony Rd, <br /> New LIC Colony, Anna Nagar, Tamil Nadu, <br /> Madurai-625020. </p>
          <br />
          <p> <i className="fa-solid fa-phone" /> Call : 7272911100</p>
          <br />
          <p> <i className="fa-solid fa-envelope" /> Email: info@redotsolutions.com</p>
        </div>
        <div className="col">
          <h4>Contact Us</h4>
          <div className="social">
            <a href="https://m.facebook.com/redotsolutions?_rdr" target="_blank"><i className="fa-brands fa-facebook-f" /></a>
            <a href="https://www.instagram.com/redot.solutions/?igshid=MzRlODBiNWFlZA%3D%3D" target="_blank"><i className="fa-brands fa-instagram" /></a>
            <a href="https://twitter.com/RedotSolutions" target="_blank"><i className="fa-brands fa-x-twitter" /></a>
            <a href="https://www.youtube.com/@redotacademy" target="_blank"><i className="fa-brands fa-youtube" /></a>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

  )
}

export default Hk