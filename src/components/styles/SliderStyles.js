import styled from 'styled-components';

export const SliderStyles = styled.div`
    position: relative;
    margin: 80px 0;

    .mySlides {
        animation: slide 1s ease-in;
    }

    @keyframes slide {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    .currentSlider {
        display: flex;
        margin: 10px;
        background-color: white;
        justify-content: center;
        align-items: center;

        span {
            margin-left: 10px;
            padding: 3px;
            border-radius: 50%;
            background-color: gray;
        }
        .active {
            background-color: black;
        }
    }

    button {
        background-color: white;
        border: 0;
        border-radius: 50%;
        cursor: pointer;
        &:hover {
            background-color: grey;
        }
    }

    .btnLeft {
        position: absolute;
        top: 200px;
        margin-left: -15px;
        padding: 5px 10px;
    }

    .btnRight {
        position: absolute;
        top: 200px;
        right: -15px;
        padding: 5px 10px;
    }

    div {
        display: grid;
        background-color: #f7f7f7;
        grid-template-columns: 1fr 1fr;
        border-radius: 1rem;
        img {
            width: 500px;
            height: 400px;
            object-fit: cover;
            border-top-left-radius: 1rem;
            border-bottom-left-radius: 1rem;
        }

        & > p {
            font-size: 24px;
            font-weight: lighter;
            margin: 15% auto;
            width: 80%;
            & > div:first-child {
                display: inline-block;
                margin-top: 2rem;
                font-size: 14px;
                text-decoration: none;
            }
            & > div {
                margin-top: 1rem;
                font-size: 14px;
                text-decoration: underline;
                cursor: pointer;
            }
        }
    }

    @media (max-width: 768px) {
        div {
            grid-template-columns: auto;
            grid-template-rows: 1fr 1fr;
            img {
                width: 100%;
                height: 300px;
                object-fit: cover;
                border-top-left-radius: 1rem;
                border-top-right-radius: 1rem;
                border-bottom-left-radius: 0;
            }
            & > p {
                margin: 5% auto;
            }
        }
    }
`;
