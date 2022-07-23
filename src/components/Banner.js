import React from 'react';
import { BannerStyles } from './styles/BannerStyles';
import house from '../images/house.jpg';
import { ContainerStyles } from './styles/ContainerStyles';

const Banner = () => {
    return (
        <BannerStyles>
            <div className="image">
                <img src={house}></img>;
            </div>
            <ContainerStyles>
                <div>
                    <header>
                        <h4>CHECK IT OUT FOR YOURSELF</h4>
                        <h1>
                            Host your entire place,<br></br>
                            for 4 guests <br></br>
                            in CHENNAI<br></br>
                            and earn up to{' '}
                            <span style={{ color: '#fe375c' }}>
                                &#8377;12,208{' '}
                            </span>
                            a month*
                        </h1>
                        <button>Get started</button>
                        <small>How we estimate your earnings potential</small>
                    </header>
                </div>
            </ContainerStyles>
        </BannerStyles>
    );
};

export default Banner;
