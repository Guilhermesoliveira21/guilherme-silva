import { useState } from "react"
import { Title } from "../Title"
import { Container, ContainerContent, ContainerMenu, ContainerTime, ContainerWork, ExperienciaDescricao, LogoEmpresa, MenuEmpresa } from "./styles"

export const Experiencia = () => {

    const experienciaJson = [
        {
            'name': 'Escala Web',
            'date': [
                {
                    'inicio': '13/01/2024',
                    'cargo': 'Desenvolvedor Web - Junior'
                },
                {
                    'fim': 'Atual',
                    'cargo': 'Desenvolvedor Web - Junior'
                }
            ],
            'descricao': [
                'Atuo na criação e manutenção de sites, sempre com o objetivo de entregar soluções funcionais e de alta qualidade que atendam às necessidades dos clientes. Sou responsável pelo desenvolvimento de funcionalidades robustas utilizando PHP e JavaScript, além de integrar APIs e sistemas back-end para garantir uma comunicação fluida e eficiente entre os diferentes componentes do sistema.',
                'Sou responsável por diagnosticar e solucionar problemas técnicos, com o foco contínuo em aprimorar a experiência do usuário e a performance das plataformas. A resolução ágil de desafios técnicos é essencial para garantir um serviço de qualidade e sem falhas.',
                'Por fim, possuo 6 meses de experiência prática com React.js, Styled Components, useContext, React Router Dom e outras tecnologias, o que me permite criar interfaces dinâmicas e de alto desempenho, sempre prezando pela qualidade e escalabilidade do código.'
            ]
        },
        {
            'name': 'Suzano S.A',
            'date': [
                {
                    'inicio': '27/02/2022',
                    'cargo': 'Auxiliar administrativo - Jovem Aprendiz'
                },
                {
                    'fim': '06/06/2023',
                    'cargo': 'Auxiliar administrativo - Jovem Aprendiz'
                }
            ],
            'descricao': [
                'Durante esse período, atuei no setor administrativo, cuidando dos processos de admissão de novos colaboradores. Meu trabalho envolvia desde a recepção e conferência de documentos até a finalização do registro no sistema, garantindo uma experiência acolhedora e eficiente para quem estava começando na empresa.',
                'Também fui responsável pela gestão das férias dos colaboradores, organizando cronogramas e atendendo às solicitações com atenção para assegurar que todos tivessem seu descanso respeitado sem comprometer as atividades da equipe.',
                'Além disso, contribuí na criação e formatação de planilhas que ajudavam a organizar dados importantes de forma clara e prática. Uma das minhas responsabilidades mais marcantes foi a elaboração de relatórios de auditoria, onde busquei sempre apresentar informações precisas e úteis, ajudando a equipe de gestão a tomar decisões com confiança.'
            ]
        }
    ]

    const [filter, setFilter] = useState('Escala Web');

    const filterWork = experienciaJson.filter((f) => f.name === filter)

    return (
        <>
            <Container>
                <Title title='Experiência'>
                    <p>Experiência Profissional em Desenvolvimento</p>
                </Title>
                <ContainerWork>
                    <ContainerMenu onClick={(event) => setFilter(event.target.value)}>
                       <MenuEmpresa value='Escala Web'>
                            <LogoEmpresa>
                                <img src="https://escalaweb.com.br/images/favicon.ico" alt="" />
                            </LogoEmpresa>
                            Escala Web
                       </MenuEmpresa>
                       <MenuEmpresa value='Suzano S.A'>
                            <LogoEmpresa>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0zeMw8scZ74p7Ba0CbYhLgSvLtpfV1B2Xv97JicjyrFFYz673bE2IE8VEK7VHM1vPTnw&usqp=CAU" alt="" />
                            </LogoEmpresa>
                            Suzano S.A
                       </MenuEmpresa>
                    </ContainerMenu>
                    <ContainerContent>

                        <div>
                            <h2>{filterWork[0].name}</h2>
                        </div>
                        <ContainerTime>
                            <ul>
                                <li>
                                    <p>{filterWork[0].date[0].cargo}</p>
                                    <p>Fim: {filterWork[0].date[1].fim}</p>
                                </li>
                            </ul>
                            <ul style={{ listStyle: 'circle' }}>
                                <li>
                                    <p>{filterWork[0].date[0].cargo}</p>
                                    <p>Inicio: {filterWork[0].date[0].inicio}</p>
                                </li>
                            </ul>
                        </ContainerTime>
                        <ExperienciaDescricao>
                            {filterWork.map((f) => (
                                <>
                                    <p>{f.descricao[0]}</p>
                                    <p>{f.descricao[1]}</p>
                                    <p>{f.descricao[2]}</p>
                                </>
                            ))}
                          
                        </ExperienciaDescricao>
                    </ContainerContent>
                </ContainerWork>
            </Container>
        </>
    )
}