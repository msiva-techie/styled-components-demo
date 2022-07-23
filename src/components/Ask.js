import React from 'react';
import ask from '../images/ask.jpg';
import { AskStyles } from './styles/AskStyles';
import { ContainerStyles } from './styles/ContainerStyles';

const Ask = () => {
    return (
        <AskStyles>
            <ContainerStyles>
                <div>
                    <h4>HAVE QUESTIONS?</h4>
                    <h1>Get free one-on-one help from Airbnb’s best Hosts</h1>
                    <button>Ask a Superhost</button>
                </div>
            </ContainerStyles>
            <img src={ask}></img>
        </AskStyles>
    );
};

export default Ask;
