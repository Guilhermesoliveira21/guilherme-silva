import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.section`

    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 90vh;

    padding: 14rem 0 8rem;

    position: relative;

    width: 100%;

    @media (max-width: 999px) {
            flex-direction: column-reverse;
            padding: 2rem;
        }

`;

export const ContainerContent = styled.div`

    display: flex;
    align-items: start;
    justify-content: start;

    /* background-color: antiquewhite; */
    width: 50%;

    @media (max-width: 1410px) {
            width: 60%;
        }

    @media (max-width: 999px) {
        width: 100%;
    }

`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;

    gap: 1rem;
`;

export const ContentWelcome = styled.div`

    line-height: 4.3rem;
    position: relative;

    padding: 1rem 0 1rem;

    @media (max-width: 999px) {
        text-align: center;
    }

    @media (max-width: 549px) {
        line-height: 2.4rem;
        }

    h2 {
        font-size: 2rem;
        text-shadow: 4px 2px 4px #ccc;
        opacity: .7;

        @media (max-width: 549px) {
            font-size: 1.4rem;
        }
    }

    h1 {
        font-size: 4.4rem;
        font-weight: bold;
        color: transparent;
        -webkit-text-stroke: 2px ${({ theme }) => theme.colors.text_secondary};
        position: relative;   

        transition: .2s;

        cursor: grabbing;


        &:hover {
           color: ${({ theme }) => theme.colors.text_primary};
           text-shadow: 4px 2px 4px ${({ theme }) => theme.colors.text_secondary};
        }

        @media (max-width: 1410px) {
            font-size: 3rem;
        }

        @media (max-width: 549px) {
            font-size: 2rem;
            -webkit-text-stroke: 1px ${({ theme }) => theme.colors.text_secondary};
        }
    }

`;

export const ContentLinks = styled.div`

    display: flex;
    gap: 1rem;
    /* margin-top: 1rem; */

    @media (max-width: 999px) {
        align-items: center;
        justify-content: center;
    }

  

`;

export const ContentLink = styled(Link)`
  width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        border: 1px solid ${({ theme }) => theme.colors.text_secondary};
        position: relative;
        color:  ${({ theme }) => theme.colors.text_primary};
        overflow: hidden;
        

        &::before {
            content: '';
            width: 0%;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
            background-color: ${({ theme }) => theme.colors.secondary};
            border-radius: 50%;

            transition: .3s;
        }

        &:hover::before {
            width: 100%;
        }
`;

export const ContainerLink = styled.div`

        display: flex;
        align-items: center;

        gap: 1rem;

        margin-top: 2rem;

        @media (max-width: 999px) {
        align-items: center;
        justify-content: center;
    }

    @media (max-width: 549px) {
            flex-direction: column;
            width: 100%;
        }

`;

export const ContainerImage = styled.div`

        /* background-color: aqua; */

        position: relative;
        width: 600px;

        height: 600px;
        box-shadow: 0 0 8px ${({ theme }) => theme.colors.text_secondary};
        overflow: hidden;

        background-color: ${({ theme }) => theme.colors.secondary};
        border: 2px solid #cccccc70;
        border-radius: 50%;

        @media (max-width: 1410px) {
            width: 400px;

            height: 400px;
        }

        @media (max-width: 999px) {
            margin-top: 2rem;
        }

        @media (max-width: 549px) {
            width: 280px;

            height: 280px;
        }

        img {
            /* display: block;
            margin: 0 auto;
            box-shadow: 0px 0px 15px 5px #fff;
            border-radius: 10px;
            mix-blend-mode: multiply; /* Mescla com o fundo do site */
            /* background-color: aqua;  */
            width: 100%;
            height: 100%;

            /* position: absolute;
            left: 40px;
            bottom: 0; */
        }

`;