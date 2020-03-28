import React from 'react';
import Link from '../Link';
import HeaderPage from '../HeaderPage';
import { Container, Col, Row } from 'react-grid-system';

const About = () => {
    return (
        <div className="content About">
            <HeaderPage
                title={"Hi! I'm Nina Leal"}
                subtitle="watercolor illustator"
            />
            <Container fluid>
                <Row>
                    <Col md={6} className={`col mobile`} >
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Phasellus vitae pretium elit. Nam eleifend nulla et feugiat malesuada.
                            Nunc ac nunc imperdiet libero pellentesque condimentum vel a ex.
                            Proin quis gravida leo, sit amet placerat quam.
                            Duis porttitor purus erat, ac sodales libero gravida vel.
                            Pellentesque ante elit, rhoncus eget rutrum id, convallis nec tellus.
                            Nullam elementum nunc ac leo placerat finibus vitae sed nibh.
                            Ut non diam et nunc fringilla tincidunt et sed neque.
                            Integer non suscipit leo, sed egestas sem.
                            Nullam rutrum felis ut augue ornare convallis eu eu urna.
                            Vestibulum ornare urna urna, id dignissim sapien mattis vel.
                            Nam faucibus, tellus at efficitur hendrerit, arcu mi pellentesque risus, a tincidunt arcu diam id diam.
                            Etiam convallis luctus volutpat.
                </p>
                    </Col>
                    <Col md={6} className={`col mobile`} >
                        <p>
                            Aenean sollicitudin sed felis et posuere.
                            Sed rutrum sapien sit amet odio pellentesque fermentum. Mauris quis est magna.
                            Curabitur id massa ex.
                            Ut ullamcorper aliquet est, non tristique lorem efficitur id.
                            Sed a aliquam eros. Nam consectetur ex at eros lacinia suscipit.
                </p>
                        <p>
                            Vivamus accumsan leo at ipsum tincidunt eleifend.
                            In volutpat vel turpis sed lobortis.
                            Vivamus sollicitudin non massa nec placerat.
                            Vivamus vitae purus non leo ultrices rutrum id sit amet dui.
                            Cras consectetur vehicula eleifend.
                            Phasellus consequat lectus metus, eget interdum dui fringilla eget.
                            Morbi non magna orci.
                            Nulla fermentum tortor metus, et aliquam felis tincidunt quis.
                            Etiam imperdiet neque non leo auctor volutpat at elementum dolor.
                </p>
                    </Col>
                </Row>
            </Container>

            <h3 className="footer">Take a look at <Link to="/">my personal work</Link> <br /><Link to="/editorial">or my editorial work</Link></h3>
        </div >
    )
}

export default About;