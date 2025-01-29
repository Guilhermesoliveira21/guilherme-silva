import styled from "styled-components";

export const Container = styled.div`

    margin-top: 4rem;
    border-radius: 12px;
    background-color: ${({ theme }) => theme.colors.primary};
    border: 1px solid ${({theme}) => theme.colors.secondary};

    padding: 2rem 0 3rem;
    
    @media (max-width: 999px) {
        /* background-color: aqua; */
    }

`;

export const ContainerContent = styled.div`

    
    padding: 1rem 2rem;

    display: flex;
    align-items: center;
    gap: 2rem;

    @media (max-width: 749px) {
            flex-direction: column-reverse;

        }

    
    `;

export const ContainerContentText = styled.div`

p {
    font-size: 1.2rem;
    padding: 0rem 0 1.4rem;
}

`;

export const ContainerContentMenu = styled.div`

    display: flex;
    align-items: start;
    justify-content: start;

    flex-direction: column;
    /* background-color: aqua; */
    height: 220px;
    width: 50%;
    gap: 1rem;

    @media (max-width: 749px) {
           width: 100%;

        }

`;

export const ContainerImageCertificados = styled.div`

    display: flex;
    align-items: center;
    justify-content: space-between;

    gap: 1rem;

    padding: 1rem 2rem;

    border-top: 1px solid ${({theme}) => theme.colors.secondary};

    margin-top: 2rem;

    @media (max-width: 1109px) {
            flex-direction: column;
            
        }

    div > img {
        width: 660px;
        border-radius: 8px;
        border: 1px solid ${({theme}) => theme.colors.primary};
        box-shadow: 0 0 4px #323232;

        @media (max-width: 1589px) {
            width: 500px;
        }

        @media (max-width: 1219px) {
            width: 450px;
        }

        @media (max-width: 1109px) {
            width: 600px;

        }
        @media (max-width: 749px) {
            width: 100%;

        }
    }

`;

export const ContainerCardCertificado = styled.div`

    display: flex;
    align-items: center;
    justify-content: space-between;


    background-color: ${({theme}) => theme.colors.primary};
    border: 1px solid ${({theme}) => theme.colors.primary};
    box-shadow: 0 0 4px #323232;
    margin-top: -10px;
    padding: 2rem 2rem;
    border-radius: 0 0 10px 10px;

    @media (max-width: 749px) {
            flex-direction: column;
            gap: 1rem;

        }

`;

