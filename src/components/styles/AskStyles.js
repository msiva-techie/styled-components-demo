import styled from 'styled-components';
import { ContainerStyles } from './ContainerStyles';

export const AskStyles = styled(ContainerStyles)`
    display: grid;
    grid-template-columns: 0.9fr 1.1fr;
    margin: 80px 0;

    div {
        margin: auto 0;

        h4 {
            letter-spacing: 0.1rem;
        }
        h1 {
            font-size: 40px;
            width: 80%;
        }
        button {
            border: 0;
            color: white;
            background-color: black;
            border-radius: 0.5rem;
            padding: 10px 15px;
            font-size: 18px;
        }
    }

    img {
        width: 100%;
        height: 400px;
        object-fit: cover;
        border-radius: 1rem;
    }

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column-reverse;
        overflow: hidden;
        img {
            width: 100%;
            height: 300px;
            /* transform: translate(calc(var(--container-margin) * -1)); */
            object-fit: cover;
            border-radius: 0;
        }
        div {
            h1 {
                font-size: 30px;
            }
            button {
                font-size: 16px;
            }
        }
    }
`;
