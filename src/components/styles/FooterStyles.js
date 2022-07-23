import styled from 'styled-components';

export const FooterStyles = styled.div`
    & > div {
        display: grid;
        margin: 30px 0;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        h5 {
            margin: 10px 0;
        }
        ul {
            padding: 0;
            list-style-type: none;
            display: flex;
            flex-direction: column;
            li {
                padding: 10px 0;
                font-size: 14px;
                color: grey;
                cursor: pointer;
            }
            li:hover {
                text-decoration: underline;
            }
        }
        @media (max-width: 768px) {
            display: flex;
            flex-direction: column;
        }
    }
`;
