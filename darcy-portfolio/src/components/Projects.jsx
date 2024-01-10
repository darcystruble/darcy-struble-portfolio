import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import CardBody from 'react-bootstrap/esm/CardBody';
import CardTitle from 'react-bootstrap/esm/CardTitle';

// project screen shots
import bigAdventures from '../assets/Adventure-Awaits-SS.png'
import selfCare from '../assets/Self-Care-App-Main.png'

export default function Projects() {
    // styles
    const divStyles = {
        backgroundColor: 'orange',
        paddingTop: '20px'
    }
    const imgStyles = {
        width: '50vw',
    }
    return (
        <div className='bg-dark main-bg' id='projects'>
            <Container>
                <h2>Projects</h2>
                <Row>
                    <Col xs={6} md={4}>
                        <Card>
                            <Card.Body>
                                <Card.Title>Big Adventures with Little Kids</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">HTML // CSS // JavaScript // Axios</Card.Subtitle>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Card.Link href="#">Deployed App</Card.Link>
                                <Card.Link href="#">GitHub</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={6} md={4}>
                        <Image src={bigAdventures} rounded style={imgStyles} />
                    </Col>
                </Row>
                <Row>
                    <Col xs={6} md={4}>
                        <Card>
                            <Card.Body>
                                <Card.Title>Self Care App</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">HTML // CSS // JavaScript // Axios</Card.Subtitle>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Card.Link href="#">Deployed App</Card.Link>
                                <Card.Link href="#">GitHub</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={6} md={4}>
                        <Image src={selfCare} rounded style={imgStyles} />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}