import { Container } from "./styles"

export const Title = ({title, children}) => {

    return (
        <>
            <Container>
                <h3>{title}
                </h3>
                {children}
            </Container>
        </>
    )
}