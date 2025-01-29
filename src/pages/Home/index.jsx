import { About } from "../../components/About"
import { Experiencia } from "../../components/Experiencia"
import { Projects } from "../../components/Projects"
import { Skills } from "../../components/Skills"
import { Welcome } from "../../components/Welcome"

export const HomePage = () => {


    return (
        <>
            <div id="home">
                <Welcome id="home" />
            </div>
            <div id="sobre">
                <About id="sobre" />
            </div>
            <div id="skills">
                <Skills id="skills" />
            </div>
            <div id="projetos">
                <Projects id="projetos" />
            </div>
            <div id="experiencia">
                <Experiencia id="experiencia" />
            </div>
        </>
    )
}