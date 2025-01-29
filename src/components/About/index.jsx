import { Button } from "../Button"
import { Title } from "../Title"
import { Container, ContainerCardCertificado, ContainerContent, ContainerContentMenu, ContainerContentText, ContainerImageCertificados } from "./styles"
import backend from '../../assets/back-end.png';
import frontend from '../../assets/front-end.png';
import { useRef } from "react";

export const About = () => {

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
                <Title title="Sobre">
                    <p>A História Por Trás do Meu Código</p>
                </Title>

                <ContainerContent>
                    <ContainerContentMenu>
                        <Button w='100%'>Sobre</Button>
                        <Button click={handleDownload} color="transparent" w="100%">
                            Download CV
                        </Button>
                        <Button link='https://api.whatsapp.com/send?phone=5511979623588' target='_blank' color='transparent' w='100%'>Entre em contato</Button>
                    </ContainerContentMenu>
                    <ContainerContentText>
                        <p>Olá, sou um desenvolvedor front-end apaixonado por criar soluções digitais que realmente fazem a diferença. Meu foco está em entregar interfaces intuitivas e funcionais, que ofereçam uma experiência incrível para os usuários.</p>
                        <p>Tenho mais de 5 meses de experiência prática trabalhando com tecnologias como React.js, Styled Components, Context API, Axios e React Router DOM, sempre buscando criar interfaces dinâmicas e responsivas. Além disso, também tenho conhecimento em JavaScript, Node.js, APIs REST, PHP e MySQL, o que me permite colaborar em projetos full-stack de forma versátil.</p>
                        <p>Sou movido pela curiosidade e pela vontade de aprender, e acredito que cada novo desafio é uma oportunidade para crescer e criar algo especial. Se você valoriza soluções criativas e bem construídas, vamos conversar!</p>
                    </ContainerContentText>
                </ContainerContent>
                <ContainerImageCertificados>
                    <div>
                        <img src={frontend} alt="Front end" />
                        <ContainerCardCertificado>
                            <h2>Front end</h2>
                            <Button>Certificados</Button>
                        </ContainerCardCertificado>
                    </div>
                    <div>
                        <img src={backend} alt="" />
                        <ContainerCardCertificado>
                            <h2>Back end</h2>
                            <Button>Certificados</Button>
                        </ContainerCardCertificado>
                    </div>
                </ContainerImageCertificados>
            </Container>
        </>
    )
}