import styled from 'styled-components';

export const FooterBannerStyles = styled.div`
    margin: 80px 0;
    /* position: relative; */
    height: 500px;
    img {
        width: 100%;
        height: 500px;
        object-fit: cover;
        position: absolute;
        left: 0px;
    }
    div {
        /* position: absolute; */
        /* top: 30%; */
        /* left: 0; */
        color: white;
        margin-top: 5rem;
        position: absolute;
        width: 50%;
        /* word-spacing: 0.2em; */

        h1 {
            font-size: 50px;
            line-height: 1em;
            letter-spacing: 1px;
        }
        p {
            font-size: 18px;
            letter-spacing: 0.6px;
            line-height: 1.6em;
        }
        h4 {
            font-size: 18px;
        }
        button {
            background-color: #fe375c;
            color: white;
            border: 0;
            padding: 15px 20px;
            border-radius: 5%;
            font-size: 18px;
            cursor: pointer;
        }
        /* margin: 600px; */
        /* background-color: red; */
    }

    @media (max-width: 768px) {
        height: 350px;

        img {
            /* width: auto; */
            height: 400px;
        }

        div {
            margin-top: 2rem;
            h1 {
                font-size: 40px;
            }
        }
    }
`;
