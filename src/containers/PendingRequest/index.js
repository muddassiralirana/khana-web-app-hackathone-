import { Container, Col, Row } from "react-bootstrap";
import "./css/style.css"
import Cat1 from "../../assets/images/cat1.jpg"
import Catb1 from "../../assets/images/catb1.jpg"
import Catb2 from "../../assets/images/catb2.jpg"
import Catb3 from "../../assets/images/catb3.jpg"
import Cat2 from "../../assets/images/cat2.jpg"
import Cat3 from "../../assets/images/cat3.jpg"




let Catergories = () => {

    return (
        <>
            <Container fluid className='aboutMain'>
                <Row>
                    <Col className="headingMain">
                        <h1 className="heading1">Catergories</h1>
                    </Col>
                </Row>
                <Row className="r-1">
                    <Col>
                        <img
                            className="d-block w-100 cat-S"
                            src={Catb1}
                            alt="Second slide"
                        />
                    </Col>

                    <Col>
                        <img
                            className="d-block w-100 cat-S"
                            src={Catb2}
                            alt="Second slide"
                        />
                    </Col>
                    <Col>
                        <img
                            className="d-block w-100 cat-S"
                            src={Catb3}
                            alt="Second slide"
                        />
                    </Col>
                </Row>
                <Row className="r-2 ">
                    <Col>
                        <img
                            className=" w-100 cat-B"
                            src={Cat1}
                            alt="Second slide"
                        />
                    </Col>

                    <Col>
                        <img
                            className="d-block w-100 cat-B"
                            src={Cat2}
                            alt="Second slide"
                        />
                    </Col>
                    <Col>
                        <img
                            className="d-block w-100 cat-B"
                            src={Cat3}
                            alt="Second slide"
                        />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Catergories;