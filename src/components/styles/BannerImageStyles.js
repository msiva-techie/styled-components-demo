import styled from 'styled-components';

const BannerImageStyles = styled.div`
    img {
        background-color: red;
        width: 100vw;
        height: 500px;
        object-fit: cover;
        border-radius: 1rem;
    }
    @media (max-width: 768px) {
        overflow: hidden;
        img {
            /* left: 0; */
            width: 100vw;
            /* transform: translate(calc(var(--container-margin) * -1)); */
            height: 500px;
            object-fit: cover;
            border-radius: 0;
        }
    }
`;

export default BannerImageStyles;
