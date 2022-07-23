import styled from 'styled-components';

export const LandingStyles = styled.div`
    color: white;
    /* animation: */
    > img {
        min-height: 550px;
        max-width: 100%;
        display: inline-block;
        object-fit: cover;
    }

    a {
        position: absolute;
        top: 0;
        left: 0;
        margin: 20px;
        text-decoration: none;
        color: white;
    }

    a:hover {
        color: grey;
        border-radius: 1px solid grey;
        border-radius: 50%;
    }

    nav {
        a:hover {
            border-radius: 50%;
            background-color: grey;
        }

        a img {
            margin: 0.5rem 0.7rem;
            width: 40px;
            height: 40px;
        }
    }

    header {
        margin: 5rem;
        position: absolute;
        top: 0;
        min-width: 40%;
        /* word-spacing: 0.2em; */

        h1 {
            font-size: 60px;
            line-height: 1em;
            letter-spacing: 1px;
        }
        p {
            max-width: 50%;
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

        animation: landing 1.5s ease-in;
        @keyframes landing {
            0% {
                top: 30px;
                opacity: 0;
            }
            25% {
                opacity: 0.3;
            }
            50% {
                opacity: 0.6;
            }
            100% {
                top: 0;
                opacity: 1;
            }
        }
    }
    @media (max-width: 768px) {
        > img {
            min-height: 650px;
        }
        header {
            margin: 2rem;
            position: absolute;
            top: 200px;
            width: 80%;
            h4 {
                font-size: 14px;
            }
            h1 {
                font-size: 30px;
            }
            p {
                font-size: 16px;
                letter-spacing: 0.2px;
                /* line-height: 1.6em; */
            }

            animation: landing 1.5s ease-in;
            @keyframes landing {
                0% {
                    top: 300px;
                    opacity: 0;
                }
                25% {
                    opacity: 0.3;
                }
                50% {
                    opacity: 0.6;
                }
                100% {
                    top: 200px;
                    opacity: 1;
                }
            }
        }
    }
`;
