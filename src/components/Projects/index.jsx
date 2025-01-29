import { Link } from "react-router-dom"
import { Button } from "../Button"
import { Title } from "../Title"
import { CardDescription, CardFooter, CardImage, CardLink, CartHeaderTitle, Container, ContainerCard, ContainerProjects, ContainerTabs, Tab } from "./styles"
import image from "../../assets/image.png";
import { ProjectsJson } from "../../utils/Projects";
import { useState } from "react";

export const Projects = () => {


    const [filter, setFilter] = useState('todos');

    console.log(filter)

    const projectFilter = filter === 'todos' 
    ? ProjectsJson 
    : ProjectsJson.filter((project) => project.type === filter);


    console.log(projectFilter)


    return (
        <>
            <Container>
                <Title title='Projetos'>
                    <p>Resultados do Meu Trabalho</p>
                </Title>
                <ContainerTabs>
                    <Tab value="todos" isActive={filter === 'todos'} onClick={() => setFilter('todos')}>Todos</Tab>
                    <Tab value="front-end" isActive={filter === 'front-end'} onClick={() => setFilter('front-end')}>Front end</Tab>
                    <Tab value="back-end" isActive={filter === 'back-end'} onClick={() => setFilter('back-end')}>Back end</Tab>
                </ContainerTabs>
                <ContainerProjects>
                    {projectFilter.map((proj) => (

                        <ContainerCard>
                            <CardImage>
                                <img src={proj.image} alt={proj.title} />
                            </CardImage>
                            <CartHeaderTitle>
                                <p>{proj.title}</p>

                            </CartHeaderTitle>
                            <CardDescription>
                                <p>{proj.description}</p>
                            </CardDescription>
                            <CardFooter>
                                <div style={{ gap: '1rem', display: 'flex' }}>
                                    <CardLink to={proj.link_deploy} target="_blank">Visite o site</CardLink>
                                    <CardLink to={proj.link_github} target="_blank">Repositorio</CardLink>
                                </div>
                                {/* <div>
                                    <button>Next</button>
                                    <button>react</button>
                                </div> */}
                            </CardFooter>
                        </ContainerCard>
                    ))}

                </ContainerProjects>
            </Container>
        </>
    )
}