import styled from 'styled-components';

export const SupportStyles = styled.div`
    /* margin: 80px 0; */
    h1 {
        font-size: 40px;
    }
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 40px;
    div {
        word-wrap: break-word;
        h4 {
            font-size: 22px;
            font-weight: 600;
        }
        small {
            font-size: 15px;
            letter-spacing: 0.03rem;
            width: 40%;
            color: grey;
        }
        small:last-child {
            color: black;
            /* font-size: 16px; */
            text-decoration: underline;
            position: relative;
            top: 15px;
        }
    }
    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        margin: 0 10px;
    }
`;
