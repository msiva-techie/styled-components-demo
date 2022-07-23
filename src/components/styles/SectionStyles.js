import styled from 'styled-components';

export const SectionStyles = styled.div`
    display: grid;
    grid-template-columns: 1.5fr 1fr 1fr;
    /* justify-content: center;
  align-items: center; */
    /* grid-gap: 2rem; */
    margin: 80px 0;

    div:first-child {
        font-weight: 100;
        font-size: 50px;
        /* width: 80%; */
        color: black;
    }

    & > div {
        padding: 10px;
    }
    div {
        color: rgba(0, 0, 0, 0.8);
        letter-spacing: 0.02rem;
        h4 {
            font-size: 22px;
            font-weight: 600;
        }
        p {
            font-weight: lighter;
            font-size: 16px;
        }
    }

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        div:first-child {
            font-weight: 80;
            font-size: 30px;
            /* width: 80%; */
            color: black;
        }
        & > div {
            padding: 5px;
        }
        div {
            color: rgba(0, 0, 0, 0.8);
            letter-spacing: normal;
            h4 {
                font-size: 18px;
                font-weight: 600;
            }
            p {
                font-weight: lighter;
                font-size: 14px;
            }
        }
    }
`;
