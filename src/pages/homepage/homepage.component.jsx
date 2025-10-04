import React from 'react';
import HeroSection from '../../sections/hero/hero';
import FeatureSection from '../../sections/feature/feature';
import PartnerSection from '../../sections/partner/partnerSection';

import './homepage.style.scss'
import Footer from '../../sections/footer/footer';


const HomePage = () => (
    <div className="home-page">
        <HeroSection />
        <FeatureSection />
        <PartnerSection />
        <Footer />
    </div>
)

export default HomePage;