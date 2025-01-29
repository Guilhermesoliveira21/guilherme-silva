import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Button } from "../Button";
import { ContentLink, ContentLinks } from "../Welcome/styles";
import { Container, ContainerButton, ContainerFooter, FooterTitle } from "./styles";
import { BsWhatsapp } from "react-icons/bs";
import { LuMailMinus } from "react-icons/lu";

export const Footer = () => {

    return (
        <>
            <Container>
                <ContainerFooter>
                    <FooterTitle>

                        <h4>

                            Vamos
                            Trabalhar Juntos</h4>
                    </FooterTitle>
                    <Button link='mailto:Guilherme.dev1@outlook.com' color='transparent'>Guilherme.dev1@outlook.com</Button>
                </ContainerFooter>
                <ContainerButton>
                <p>© 2025 Guilherme. Todos os direitos reservados.</p>
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
                </ContainerButton>
            </Container>
        </>
    )
}