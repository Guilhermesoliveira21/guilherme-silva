import { Link } from "react-router-dom";
import styled from "styled-components";

export const ContainerLink = styled(Link)`

    background-color: ${({ color, theme }) => color == 'transparent' ? 'transparent' : theme.colors.secondary};
    
    color: ${({ color, theme }) => color == 'transparent' ? theme.colors.text_secondary : "#fff"};

    border: 1px solid ${({ color, theme }) => color == 'transparent' ? "" : "#fff"};

    padding: .6rem 2rem;

    text-decoration: none;

    box-sizing: border-box;
    border-radius: 6px;

    width: ${({w}) => w};

    text-align: center;

    @media (max-width: 589px) {
           width: 100%;
           text-align: center;
        }

`;