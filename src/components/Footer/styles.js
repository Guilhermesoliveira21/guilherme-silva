import styled from "styled-components";

export const Container = styled.footer`

    padding: 4rem 0 2rem;

`;

export const ContainerFooter = styled.div`

    display: flex;
    align-items: center;
    justify-content: space-between;

    border-bottom: 2px solid ${({theme}) => theme.colors.text_secondary};
    padding-bottom: 1rem;

    @media (max-width: 1011px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        gap: 1rem;
    }

`;

export const ContainerButton = styled.div`

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 2rem 0 0;

`;

export const FooterTitle = styled.div`

    h4 {
        font-size: 2rem;
    }

`;