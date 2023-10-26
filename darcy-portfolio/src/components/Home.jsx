import mountains from '../assets/mountains.jpg'

export default function Home () {
    return (
        <div className="home-outer">
            <div class="curve">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                </svg>
            </div>
            <div className="home-focus">
                <div className="home-img">
                    <img src={mountains} alt="mountains" />
                </div>
                <div className="home-text">
                    <h1>Hi there!</h1>
                    <p>I'm Darcy, a software engineer from the Atlanta suburbs. <br /><br/>Here's some cool stuff about what I like about this stuff that I do. <br /><br/>You can either find me behind a computer or out in the woods. <br /><br />Let's get in touch. </p>
                </div>
            </div>
        </div>
    )
}

