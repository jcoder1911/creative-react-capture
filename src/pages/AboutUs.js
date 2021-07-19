import React from 'react';
//Page Components
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';

const AboutUs = () => {
    return(
        <React.Fragment>
            <AboutSection />
            <ServicesSection />
        </React.Fragment>
    );
};

export default AboutUs;