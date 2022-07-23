import styled from 'styled-components';

export const FooterFormStyles = styled.div`
    margin: 80px 0;
    display: grid;
    grid-template-columns: 1fr 1fr;

    div:first-child {
        width: 80%;
        h1 {
            font-size: 40px;
        }
    }

    .form {
        margin-top: 40px;
        width: 80%;
        border: 1px solid grey;
        border-radius: 0.2rem;
    }

    input[type='text'] {
        padding: 15px;
        border: 0;
        width: 100%;
        box-sizing: border-box;
    }
    button {
        border: 0;
        color: white;
        background-color: black;
        border-radius: 0.5rem;
        padding: 10px 15px;
        font-size: 16px;
        margin: 20px 0;
    }
    .checkbox {
        margin-top: 20px;
        width: 70%;
        display: flex;
        justify-content: space-between;
        small {
            width: 90%;
        }
    }
    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        .form {
            margin-top: 10px;
        }
    }
`;
