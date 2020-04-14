import React from 'react';
import Link from '../Link';
import HeaderPage from '../HeaderPage';
import { Container, Col, Row } from 'react-grid-system';

const About = () => {
    return (
        <div className="content About">
            <HeaderPage
                title={"Hola! Soy Nina Leal"} //Hi! I'm Nina Leal
                subtitle="ilustradora watercolor" //watercolor illustator
            />
            <Container fluid>
                <Row>
                    <Col md={6} className={`col mobile`} >
                        <p>
                            El dibujo y la pintura ha sido mi pasión desde pequeña, lo que me llevó a graduarme en Publicidad y Relaciones Públicas por la Universidad de Sevilla, buscando el arte que hay dentro de la publicidad.
                </p>
                        <p>
                            Disfruto ilustrando retratos, interprentando sus emociones en mis colores y otros elementos adyacentes, como animales, objetos o formas simples. Intento mantenerme en continua evolución y aprendizaje, innovando y reinventándome en cada trabajo.
                </p>
                    </Col>
                    <Col md={6} className={`col mobile`} >

                        <p>
                            Siempre he sido amante de la libertad y vida propia que brindan las acuarelas, el carboncillo y otras técnicas tradicionales, las cuales combino con técnicas y retoques digitales más actuales, creando así obras complejas llenas matices y significado.
                </p>
                        <p>
                            Te invito a conocer mi trabajo publicado en esta web o en mi <Link isExternal={true} to="https://www.instagram.com/nina_lealramos/">Instagram</Link>, el cual actualizo regularmente.
                </p>
                <p>
                            Puedes contactar conmigo a través de <Link isExternal={true} to="mailto:hola@ninaleal.com">hola@ninaleal.com</Link> o a través de mis redes sociales.
                </p>
                    </Col>
                </Row>
            </Container>

            {/* <h3 className="footer">Take a look at <Link to="/">my personal work</Link> <br /><Link to="/editorial">or my editorial work</Link></h3> */}
            <h3 className="footer">Echa un vistazo a <Link to="/">mi trabajo personal</Link> <br /> o a mi <Link to="/editorial">trabajo editorial</Link></h3>
        </div >
    )
}

export default About;