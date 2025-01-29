import { Title } from "../Title"
import { Card, Container, ContainerSkills } from "./styles"
import { skillsJson } from '../../utils/Skills';

export const Skills = () => {

    console.log(skillsJson)

    return (
        <>
            <Container>
                <Title title="Skills">
                    <p>Minhas Habilidades Técnicas</p>
                </Title>
                <ContainerSkills>
                    {skillsJson.map((skill) => (
                        <Card>
                           
                                <div>
                                    <skill.icon color={skill.color} size={30}/>
                                </div>
                                <p>{skill.name}</p>
                            
                        </Card>
                    ))}
                </ContainerSkills>
            </Container>
        </>
    )
}