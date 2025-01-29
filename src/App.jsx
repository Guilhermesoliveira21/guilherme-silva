import { Helmet } from 'react-helmet'
import { ThemeColorProvider } from './context/Theme'
import { CoreApp } from './core'

function App() {

  return (
    <>
      <Helmet>
        <title>Portifolio - Guilherme</title>
        <meta name="description" content="Olá, sou um desenvolvedor front-end apaixonado por criar soluções digitais que realmente fazem a diferença. Meu foco está em entregar interfaces intuitivas e funcionais, que ofereçam uma experiência incrível para os usuários.

Tenho mais de 5 meses de experiência prática trabalhando com tecnologias como React.js, Styled Components, Context API, Axios e React Router DOM, sempre buscando criar interfaces dinâmicas e responsivas. Além disso, também tenho conhecimento em JavaScript, Node.js, APIs REST, PHP e MySQL, o que me permite colaborar em projetos full-stack de forma versátil.

Sou movido pela curiosidade e pela vontade de aprender, e acredito que cada novo desafio é uma oportunidade para crescer e criar algo especial. Se você valoriza soluções criativas e bem construídas, vamos conversar!" />
        <meta name="keywords" content="Portifolio dev, React.js, node.js, desenvolvedor front end, desenvolvedor back end, Portifolio, Desenvolvimento de Software,Desenvolvimento de Aplicações,Front-end Developer,Back-end Developer,Full-stack Developer,Desenvolvimento de Aplicações,Soluções Web Personalizadas" />
      </Helmet>
      <ThemeColorProvider>
        <CoreApp />
      </ThemeColorProvider>
    </>
  )
}

export default App
