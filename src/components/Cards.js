import React from 'react';
import { CardStyles } from './styles/CardStyles';
import card1 from '../images/card1.jpg';
import card2 from '../images/card2.jpg';
import card3 from '../images/card3.jpg';

const Cards = () => {
    return (
        <>
            <h1 style={{ fontSize: '40px' }}>How hosting works</h1>
            <CardStyles>
                <div>
                    <img src={card1}></img>
                    <div>
                        <h4>Secrets from a seasoned Superhost</h4>
                        <small>
                            Superhost Nikki shares her tips, from setting up to
                            standing out.
                        </small>
                    </div>
                </div>
                <div>
                    <img src={card2}></img>
                    <div>
                        <h4>How to get started on Airbnb</h4>
                        <small>
                            From creating your listing to prepping your space,
                            learn how to start hosting.
                        </small>
                    </div>
                </div>
                <div>
                    <img src={card3}></img>
                    <div>
                        <h4>Designing your space</h4>
                        <small>
                            Designing your space for guests can be a quick way
                            to boost your bookings
                        </small>
                    </div>
                </div>
                <div>
                    <img src={card2}></img>
                    <div>
                        <h4>How to get started on Airbnb</h4>
                        <small>
                            From creating your listing to prepping your space,
                            learn how to start hosting.
                        </small>
                    </div>
                </div>
            </CardStyles>
        </>
    );
};

export default Cards;
