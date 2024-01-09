import Container from 'react-bootstrap/Container';

export default function Header() {
    // styles
    const divStyles = {
        color: 'white',
        backgroundColor: 'var(--bs-primary)',
        height: '100vh',
        padding: '20px'
    }

    return (
        <Container styles={divStyles}>
            <h2>Header</h2>
        </Container>
    )
}