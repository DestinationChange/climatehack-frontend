import React, { useState }from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel"; 
import '../styles/design.css';
import { aboutData } from '../aboutData';
import '../styles/About.css';
import Footer from '../components/Footer';
const renderSlides = aboutData.map((image) => (
    <div key={image.alt}>
      <p>{image.quote}</p>
      <img src={image.url} alt={image.alt} />
      <p className="legend">{image.label}</p>
     
    </div>
  ));
 function About() {
    const [currentIndex, setCurrentIndex] = useState();
    function handleChange(index) {
      setCurrentIndex(index);
    }
    return (
        <div>
            <h2>About Project 🌍</h2>
            <div className='aboutpj'>
            <p>Destination Change is a unique web platform that empowers users to take actionable steps towards mitigating the impacts of climate change. The idea for Destination Change was born during a hackathon, where we realized the need for a platform that not only educates people about climate change but also connects them with like-minded individuals to work together towards a sustainable future. With dozens of ideas in mind, we decided to focus on climate change and created a platform where users can learn, share, and connect to create a positive impact on the world we live in. Our platform provides users with prompt ideas on how to improve their carbon footprint and connects them with others who are passionate about making a difference. Whether you are an environmental enthusiast or just getting started, Destination Change is the perfect destination to learn and take action towards a sustainable future. </p>
            </div>
            <div className='display'>
            <h1>About Devs 🌍</h1>
            <div className="About">
            
            <Carousel
             showArrows={true}
             autoPlay={true}
             infiniteLoop={true}
             selectedItem={aboutData[currentIndex]}
             onChange={handleChange}
             className="carousel-container"
             >
            {renderSlides}
            </Carousel>
            </div>
            </div>
        </div>
    );
}

export default About;