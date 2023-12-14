import React from 'react'
 import './About.css'
 import Footer from '../Component/Footer'

export default function About() {

    const containerStyles = {
        display: 'flex',
        flexDirection: 'column',
        height: '30vh',
      };
    
      const rowStyles = {
        display: 'flex',
        flex: 1,
      };
    
      const columnStyles = {
        flex: 1,
        border: '1px solid #ccc',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      };
    

  return (
    <div>
      
      <header>
        <h1>E - Waste Management</h1>
      </header>

      <br />
      
      <section
        id="about"
        style={{ padding: '10px', margin: '10px 100px' }}
      >
        <h2 id="about-text">
          About
          <b
            style={{
              color: '#002a54ef',
              textShadow: '1px 1px 3px lightblue',
              textDecoration: 'underline',
            }}
          >
            E-Waste Management
          </b>
        </h2>
        <br />
        <br />
        <main>
        <p>
          Welcome to our e-waste management webpage! Here, we are dedicated to
          promoting responsible and sustainable practices for the disposal and
          recycling of electronic waste. Our goal is to protect the environment,
          conserve valuable resources, and raise awareness about the impact of
          e-waste on our planet.
          <br />
          <br />
          We understand the growing concern surrounding the improper handling of
          electronic waste and its detrimental effects on both human health and
          the environment. With our expertise in e-waste management, we offer
          comprehensive solutions to individuals, businesses, and communities,
          ensuring that their electronic devices are handled and disposed of
          responsibly.
        </p>
        </main>
      </section>
    

      <div className="container" style={containerStyles}>
      <div className="row" style={rowStyles}>
        <div className="column" style={columnStyles}>
    
            <h3>Who are we? </h3>
          <p> E-waste_buy is authorized By Maharashtra Pollution Control Board E -Waste Collection Segregation Refurbishing Dismantling organization to a wide range of businesses all over India, our company since 2023, located at pune India.</p>
        </div>
        <div className="column"  style={columnStyles}>
        <h3>Our Mission</h3>
          <p>To propagate and serve the cause of environment protection through technology and efficient management of resources.</p>
        </div>
        <div className="column"  style={columnStyles}>
        <h3>Our Team</h3>
         <p>We have a very proficient and experienced team of technicians and professionals working in the field of recycling. Our team comprises of IT hardware experts and quick response team, marketing professionals and qualified engineers.


</p>
        </div>
      </div>
    </div>

<br/>
<br/>
<div><Footer /></div>
      {/* <footer>
        <div className="footer-content">
          <p>&copy; 2023 E-Waste Management. All rights reserved.</p>
          <ul className="social-links">
            <li>
              <a href="#" target="_blank">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
          </ul>
        </div>
      </footer> */}
    </div>
  );
}



