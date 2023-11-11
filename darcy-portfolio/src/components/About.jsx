import { Link } from 'react-router-dom'

export default function About () {
    return (
        <div className="about-outer">
            {/* <div className="about-curve">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                </svg>
            </div> */}
            <div class="about-curve">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                </svg>
            </div>
            <div className="about-focus">
                <div className="about-head">
                    <h1 className='title'>A bit about me...</h1>
                </div>
                <div className="about-info">
                    <div className="about-text">
                        <h2>Joyful Learner</h2>
                    </div>
                    <div className="about-text">
                        <h2>Something</h2>
                    </div>
                    <div className="about-text about-location">
                        <h2>Location</h2>
                        <div className="map-pin"></div>
                        <div className="location">Duluth, GA</div>
                        <div>An Atlanta suburb</div>
                    </div>
                </div>
                <div className="btn-container">
                    <Link className="btn" to="/about">More About Me</Link>
                </div>
                
            </div>
        </div>
    )
}