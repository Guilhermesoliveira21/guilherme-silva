import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;

    flex-direction: column;
    

    h3 {
        position: relative;
        font-size: 3rem;
        /* opacity: .9; */
        /* width: 100%; */
        /* text-shadow: 0 0 10px ${({ theme }) => theme.colors.text_secondary}; */
        -webkit-text-stroke: 2px ${({ theme }) => theme.colors.text_secondary};
        /* margin-bottom: 1rem; */

       
    }

    

    p {
        font-size: 2rem;
        margin-bottom: 2rem;
        /* -webkit-text-stroke: 2px ${({ theme }) => theme.colors.text_secondary}; */
        font-weight: 500;
        opacity: .7;
        text-transform: capitalize;

        @media (max-width: 749px) {
            font-size: 1.4rem;
            text-align: center;

        }
    }
`;