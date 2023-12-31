import { Link } from 'react-router-dom'
import jsLogo from '../assets/language-pngs/js-logo.png'
import cssLogo from '../assets/language-pngs/css-logo.png'
import htmlLogo from '../assets/language-pngs/html-logo.png'
import pythonLogo from '../assets/language-pngs/python-logo.png'
import mongoLogo from '../assets/language-pngs/mongoDB-logo.png'
import reactLogo from '../assets/language-pngs/react-logo.png'

export default function About () {
    return (
        <div className="about-outer">
            <div className="about-curve">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                </svg>
            </div>
            <div className="about-focus">
                <div className="about-head">
                    <h1 className='title'>At a glance...</h1>
                </div>
                <div className="btn-container">
                    <Link className="btn" to="/about">More About Me</Link>
                </div>
                
            </div>
        </div>
    )
}