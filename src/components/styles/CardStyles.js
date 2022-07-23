import styled from 'styled-components';

export const CardStyles = styled.div`
    margin: 80px 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, 300px);
    grid-gap: 3rem;

    & > div {
        width: 300px;
        height: 300px;
        margin: 0 15px;
        img {
            width: 300px;
            height: 200px;
            object-fit: cover;
            border-radius: 1rem;
        }
        small {
            position: relative;
            top: -10px;
        }
    }

    /* @media (max-width: 768px) {
        display: grid;
        grid-template-columns: repeat(auto-fit, 300px);
        grid-gap: 3rem;
    } */
`;
