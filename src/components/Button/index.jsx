import { Link } from "react-router-dom"
import { ContainerLink } from "./styles"

export const Button = ({link, children, color, w, target, click}) => {

    return (
        <ContainerLink onClick={click} w={w} color={color} to={link} target={target}>{children}</ContainerLink>
    )

}