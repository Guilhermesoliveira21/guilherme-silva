import { Link, useLocation } from "react-router-dom"
import { ContainerDesktop, ContainerLink, ContainerLogo, ContainerLogoText, ContainerMenuMobile, ContainerMobile, ContainerNavegation, ContainerTheme, ContainerThemeSelect } from "./styles"
import { Button } from "../Button"
import { FaRegLightbulb } from "react-icons/fa"
import { useContext, useState } from "react"
import { ThemeColorContext } from "../../context/Theme"
import { MdClose, MdDarkMode, MdDevices } from "react-icons/md"
import { PiDevicesFill } from "react-icons/pi"
import { FaBarsStaggered } from "react-icons/fa6"

export const Header = () => {

    const { toggleThemeColor, theme } = useContext(ThemeColorContext);
    const [openMenu, setOpenMenu] = useState(false);

    const location = useLocation();

    function toggleMenu() {
        setOpenMenu((prevMenu) => !prevMenu);
    }

    return (
        <>
            <ContainerDesktop>
                <ContainerLogo>

                    <PiDevicesFill size={54} />


                    <ContainerLogoText>
                        <h1>Guilherme</h1>
                        <p>Silva de Oliveira</p>
                    </ContainerLogoText>
                </ContainerLogo>
                <ContainerNavegation>
                    <ul>
                        <li>
                            <ContainerLink
                                href="#"
                                className={location.hash === '' ? 'active' : ''}
                            >
                                Home
                            </ContainerLink>
                        </li>
                        <li>
                            <ContainerLink
                                href="#sobre"
                                className={location.hash === '#sobre' ? 'active' : ''}
                            >
                                Sobre
                            </ContainerLink>
                        </li>
                        <li>
                            <ContainerLink
                                href="#skills"
                                className={location.hash === '#skills' ? 'active' : ''}
                            >
                                Skills
                            </ContainerLink>
                        </li>
                        <li>
                            <ContainerLink
                                href="#projetos"
                                className={location.hash === '#projetos' ? 'active' : ''}
                            >
                                Projetos
                            </ContainerLink>
                        </li>
                        <li>
                            <ContainerLink
                                href="#experiencia"
                                className={location.hash === '#experiencia' ? 'active' : ''}
                            >
                                Experiência
                            </ContainerLink>
                        </li>
                    </ul>
                </ContainerNavegation>

                <ContainerTheme>
                    <ContainerThemeSelect onClick={toggleThemeColor}>
                        {!theme ?
                            <FaRegLightbulb />
                            :
                            <MdDarkMode />
                        }
                    </ContainerThemeSelect>
                    <Button link='https://api.whatsapp.com/send?phone=5511979623588' target='_blank'>
                        Contato
                    </Button>
                </ContainerTheme>
            </ContainerDesktop>

            <ContainerMobile>
                <ContainerLogo>

                    <PiDevicesFill size={54} />


                    <ContainerLogoText>
                        <h1>Guilherme</h1>
                        <p>Silva de Oliveira</p>
                    </ContainerLogoText>
                </ContainerLogo>

                <ContainerTheme>
                    <ContainerThemeSelect onClick={toggleThemeColor}>
                        {!theme ?
                            <FaRegLightbulb />
                            :
                            <MdDarkMode />
                        }
                    </ContainerThemeSelect>
                    <div onClick={toggleMenu}>
                        {!openMenu ?

                            <FaBarsStaggered size={30} />
                            :
                            <MdClose size={30} />

                        }

                    </div>

                </ContainerTheme>

                {openMenu ? <ContainerMenuMobile>

                    <ul>
                        <li>
                            <ContainerLink
                                href="#"
                                className={location.hash === '' ? 'active' : ''}
                            >
                                Home
                            </ContainerLink>
                        </li>
                        <li>
                            <ContainerLink
                                href="#sobre"
                                className={location.hash === '#sobre' ? 'active' : ''}
                            >
                                Sobre
                            </ContainerLink>
                        </li>
                        <li>
                            <ContainerLink
                                href="#skills"
                                className={location.hash === '#skills' ? 'active' : ''}
                            >
                                Skills
                            </ContainerLink>
                        </li>
                        <li>
                            <ContainerLink
                                href="#projetos"
                                className={location.hash === '#projetos' ? 'active' : ''}
                            >
                                Projetos
                            </ContainerLink>
                        </li>
                        <li>
                            <ContainerLink
                                href="#experiencia"
                                className={location.hash === '#experiencia' ? 'active' : ''}
                            >
                                Experiência
                            </ContainerLink>
                        </li>
                    </ul>

                </ContainerMenuMobile> : ""}

            </ContainerMobile>
        </>
    )

}