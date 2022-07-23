import React from 'react';
import { ContainerStyles } from './styles/ContainerStyles';
import GlobalStyles from './styles/GlobalStyles';
import Slider from './Slider';
import Banner from './Banner';
import Cards from './Cards';
import Ask from './Ask';
import Support from './Support';
import FooterBanner from './FooterBanner';
import FooterForm from './FooterForm';
import Footer from './Footer';
import Landing from './Landing';
import Section from './Section';

export const Home = () => {
    return (
        <>
            <Landing />
            <ContainerStyles>
                <Section />
                <Slider />
            </ContainerStyles>
            <Banner />
            <ContainerStyles>
                <Cards />
            </ContainerStyles>
            <Ask />
            <footer>
                <ContainerStyles>
                    <Support />
                    <FooterBanner />
                    <FooterForm />
                    <hr />
                    <Footer />
                </ContainerStyles>
            </footer>
        </>
    );
};
