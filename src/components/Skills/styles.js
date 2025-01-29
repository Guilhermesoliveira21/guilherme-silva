import styled from "styled-components";

export const Container = styled.div`

    margin-top: 4rem;

`;

export const ContainerSkills = styled.div`

    /* background-color: aqua; */

    border-radius: 0 60px 0 60px;

    min-height: 50vh;

    box-shadow: 0 2px 8px ${({theme}) => theme.colors.primary};
    padding: 2rem;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;

`;

export const Card = styled.div`

    width: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    background-color: ${({ theme }) => theme.colors.secondary};
    padding: 0.6rem 2rem;

    border-radius: 6px;

    p {
        color: #fff;
    }

    @media (max-width: 1589px) {
            width: 33%;

        }

    @media (max-width: 849px) {
            width: 48%;

        }

        @media (max-width: 500px) {
            width: 100%;

        }


`;