import Container from 'react-bootstrap/Container';

export default function Header() {
    // styles
    const divStyles = {
        display: 'flex',
        alignItems: 'center'
    }

    return (
        <div className='bg-dark main-bg' style={divStyles} >
            <Container>
                <h1>Hello. My name is Darcy Struble.</h1>
                <h1>I am a software developer near ATL.</h1>
            </Container>
        </div>
    )
}