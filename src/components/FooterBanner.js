import React from 'react';
import getStarted from '../images/getstarted.jpg';
import { FooterBannerStyles } from './styles/FooterBannerStyles';

const FooterBanner = () => {
    return (
        <FooterBannerStyles>
            <img src={getStarted}></img>
            <div>
                <h1>Start your hosting journey</h1>
                <p>Let’s get your listing set up, together.</p>
                <button>Get started</button>
            </div>
        </FooterBannerStyles>
    );
};

export default FooterBanner;
