import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

export const ContainerDesktop = styled.header`

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 2rem 12rem;

    background-color: ${({theme}) => theme.colors.background};
    z-index: 9999;
    position: fixed;
    left: 0;
    width: 100%;

    @media (max-width: 999px) {
        display: none;
    }
   
    

`;

export const ContainerLogo = styled.div`

   display: flex;
   align-items: center;
   justify-content: center;
   gap: 1rem;

`;

export const ContainerLogoText = styled.div`

    text-align: start;

    line-height: 1.4rem;

    h1 {
        font-size: 1.6rem;
    }

    p {
        opacity: .5;
    }

`;

export const ContainerNavegation = styled.nav`

    ul {
        display: flex;
        gap: 2rem;
        list-style: none;
    }

`;

export const ContainerLink = styled.a`
color: ${({ theme }) => theme.colors.text_secondary};
text-decoration: none;
font-weight: 500;
transition: 0.2s;
position: relative;

&:hover {
  color: ${({ theme }) => theme.colors.secondary};
}

&::before {
  content: '';
  position: absolute;
  width: 6px;
  bottom: -14px;
  left: 50%;
  transform: translateX(-50%);
  height: 6px;
  background-color: transparent;
  border-radius: 10px;
  transition: 0.2s;
}

&:hover::before {
  background-color: ${({ theme }) => theme.colors.secondary};
}

&.active {
  color: ${({ theme }) => theme.colors.secondary};

  &::before {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
}
`;


export const ContainerTheme = styled.div`

    display: flex;
    align-items: center;
    gap: 1rem;

`;

export const ContainerThemeSelect = styled.div`

    height: 36px;
    width: 36px;
    background-color: ${({ theme }) => theme.colors.background};

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.colors.text_primary};

    cursor: pointer;

    @media (max-width: 549px) {
            
        height: 36px;
        width: 36px;
    }

`;


export const ContainerMobile = styled.header`

    display: flex;
    align-items: center;
    justify-content: space-between;

    position: relative;

    @media (min-width: 999px) {
            display: none;
        }

`;

export const ContainerMenuMobile = styled.div`

        position: absolute;
        top: 60px;
        width: 100%;

        background-color: ${({theme}) => theme.colors.color};
        min-height: 90vh;

        z-index: 99900;
        padding: 1rem;
        overflow-x: hidden;

        ul {
            list-style: none;
        }

        ul li {
            padding: .6rem 1rem;
            font-size: 2rem;
            background-color: ${({theme}) => theme.colors.primary};
            margin-bottom: 10px;
        }

`;