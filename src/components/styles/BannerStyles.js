import styled from 'styled-components';

export const BannerStyles = styled.div`
    position: relative;
    margin: 80px 0;
    color: white;
    .image {
        margin: 0 var(--container-margin);
    }
    img {
        /* margin-left: var(--container-margin); */
        width: 100%;
        height: 500px;
        object-fit: cover;
        border-radius: 1rem;
    }
    header {
        margin: 5rem;
        position: absolute;
        top: 0;
        width: 80%;
        /* word-spacing: 0.2em; */

        h1 {
            font-size: 43px;
            line-height: 1.2em;
            letter-spacing: 1px;
        }
        p {
            font-size: 20px;
            letter-spacing: 0.6px;
            line-height: 1.6em;
        }
        h4 {
            font-size: 18px;
        }
        small {
            text-decoration: underline;
            margin-left: 40px;
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
    }
    @media (max-width: 768px) {
        overflow: hidden;
        margin-left: calc(var(--container-margin) * -1);
        img {
            width: 100vw;
            height: 500px;
            object-fit: cover;
            border-radius: 0;
        }
        header {
            margin: var(--container-margin);
            h1 {
                font-size: 38px;
                line-height: 1.2em;
                letter-spacing: 1px;
            }
        }
    }
`;
