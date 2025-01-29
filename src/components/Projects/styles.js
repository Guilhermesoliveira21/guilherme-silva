import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`

    margin-top: 4rem;

    padding: 2rem;

`;

export const ContainerTabs = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    width: 100%;



`;

export const Tab = styled.button`
    border: none;
    padding: 0.5rem 1rem;
    width: 150px;
    border-radius: 6px;

    font-size: 1rem;
    font-weight: 600;
    background-color: ${({ theme, isActive }) =>
        isActive ? theme.colors.secondary : theme.colors.text_primary};
    color: ${({ theme, isActive }) =>
        isActive ? theme.colors.text_primary : theme.colors.color};

    cursor: pointer;
    transition: 0.2s;

    &:hover {
        background-color: ${({ theme }) => theme.colors.secondary};
        color: ${({ theme }) => theme.colors.text_primary};
    }
`;


export const ContainerProjects = styled.div`

    min-height: 60vh;
    background-color: ${({theme}) => theme.colors.primary};

    border-radius: 40px 0 40px 0;
    padding: 2rem;
    margin-top: 2rem;

    display: flex;
    align-items: center;
    flex-wrap: wrap;
    /* justify-content: center; */
    gap: 2rem;
    transition: .3s;

    @media (max-width: 549px) {
             padding: 1rem;
        }

`;

export const ContainerCard = styled.div`

    width: 31%;
    height: 100%;
    background-color: ${({theme}) => theme.colors.tercery};
    border-radius: 30px 30px 10px 10px;

    border: 1px solid ${({theme}) => theme.colors.text_secondary};

    transition: .3s;

    z-index: 99;

    @media (max-width: 1409px) {
        width: 48%;
    }

    @media (max-width: 1029px) {
        width: 100%;
    }


`;

export const CardImage = styled.div`

    width: 100%;
    border-radius: 30px 30px 0px 0px;
    overflow: hidden;

    img {
        width: 100%;
    }

`;

export const CartHeaderTitle = styled.div`

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 1rem;

    p {
        font-size: 1.8rem;
        font-weight: 600;
    }

`;

export const CardLink = styled(Link)`
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text_secondary};
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.colors.text_secondary};
    padding: 0.4rem 1rem;
    border-radius: 6px;
    position: relative;
    z-index: 1; /* Certifique-se de que o texto está em um nível superior */

    &::before {
        content: '';
        background-color: ${({ theme }) => theme.colors.secondary};
        width: 0%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        z-index: -1; /* Coloca o pseudo-elemento atrás do texto */
        text-align: center;
        border-radius: 6px;
        transition: 0.3s;
    }

    &:hover::before {
        width: 100%;
    }

    &:hover {
        color: #fff 
    }
`;

export const CardDescription = styled.div`

    padding: 1rem;

   


    color: ${({ theme }) => theme.colors.text_secondary};

    p {
        height: 130px;

        @media (max-width: 549px) {
            height: 100%;
        }
    }

`;

export const CardFooter = styled.div`

    display: flex;
    align-items: start;
    justify-content: center;

    flex-direction: column;
    gap: 1rem;

    padding: 1rem;

`;