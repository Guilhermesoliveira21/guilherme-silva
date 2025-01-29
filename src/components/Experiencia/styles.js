import styled from "styled-components";

export const Container = styled.div`

    margin-top: 4rem;

`;

export const ContainerWork = styled.div`

    display: flex;
    align-items: start;
    /* justify-content: space-between; */
    gap: 2rem;

    @media (max-width: 1011px) {
        flex-direction: column;
    }


`;

export const ContainerMenu = styled.div`

    display: flex;
    flex-direction: column;
/* background-color: aqua; */
width: 30%;
    gap: 1rem;

    @media (max-width: 1011px) {
        flex-direction: row;
        align-items: center;
        justify-content: center;
        width: 100%;
    }

`;

export const MenuEmpresa = styled.button`

    /* background-color: aqua; */
    display: flex;
    align-items: center;
    /* justify-content: center; */
    padding: .6rem;
    gap: .4rem;
    font-size: 1.2rem;
    font-weight: 500;
    border: none;

    border-radius: 8px;

    cursor: pointer;

`;

export const LogoEmpresa = styled.div`

    width: 40px;
    height: 40px;

    display: flex;
    align-items: center;
    justify-content: center;

   

    img {
        width: 100%;
    }

`;

export const ContainerContent = styled.div`

    background-color: ${({ theme }) => theme.colors.primary};
    height: 100%;
    width: 100%;

    padding: 1rem 2rem;

`;

export const ContainerTime = styled.div`

    border-left: 2px solid #fff;
    padding-left: 21px;
    margin-top: 2rem;

    gap: 2rem;
    display: flex;
    flex-direction: column;

    ul {
        font-size: 2rem;
        display: flex;
        align-items: center;
        /* justify-content: center; */
    }
    

    ul > li > p {
        font-size: 16px;
    }

`;

export const ExperienciaDescricao = styled.div`

    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1.4rem;

    p {
        /* margin: 10rem; */
        font-size: 17px;
    }

`;