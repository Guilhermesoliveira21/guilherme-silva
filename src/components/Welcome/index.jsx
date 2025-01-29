import { FaGithub, FaLinkedinIn, FaMailBulk, FaRegFilePdf } from "react-icons/fa"
import { Container, ContainerContent, ContainerImage, ContainerLink, Content, ContentLink, ContentLinks, ContentWelcome } from "./styles"
import profile from "../../assets/MyImage.png";
import { Button } from "../Button";
import { BsWhatsapp } from "react-icons/bs";
import { LuMailMinus } from "react-icons/lu";
import { useRef } from "react";

export const Welcome = () => {

    const downloadRef = useRef();

    const handleDownload = () => {

        const link = document.createElement('a');
        link.href = '/curriculo.pdf';
        link.download = 'curriculo.pdf';
        link.click();
    };

    return (
        <>
            <Container>
                <ContainerContent>
                    <Content>
                        <ContentWelcome>
                            <h2>Olá, meu nome é Guilherme!</h2>
                            <h1>Seja bem-vindo ao meu portfólio</h1>
                        </ContentWelcome>
                        <ContentLinks>
                            <ContentLink to='https://github.com/Guilhermesoliveira21' target="_blank">
                                <FaGithub size={20} style={{ zIndex: 999 }} />
                            </ContentLink>
                            <ContentLink to="https://www.linkedin.com/in/guilhermesoliveira21/" target="_blank">
                                <FaLinkedinIn size={20} style={{ zIndex: 999 }} />
                            </ContentLink>
                            <ContentLink to="https://api.whatsapp.com/send?phone=5511979623588" target="_blank">
                                <BsWhatsapp size={20} style={{ zIndex: 999 }} />
                            </ContentLink>
                            <ContentLink to="mailto:Guilherme.dev1@outlook.com">
                                <LuMailMinus size={20} style={{ zIndex: 999 }} />
                            </ContentLink>
                        </ContentLinks>
                        <ContainerLink>
                            <Button link="https://api.whatsapp.com/send?phone=5511979623588" target="_blank">Entre em contato</Button>
                            <Button click={handleDownload} color='transparent'>Download CV</Button>
                        </ContainerLink>
                    </Content>
                </ContainerContent>
                <ContainerImage>
                    <img src={profile} alt="Profile" />
                </ContainerImage>
            </Container>
        </>
    )
}