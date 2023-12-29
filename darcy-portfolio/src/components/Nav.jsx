import { Link } from 'react-router-dom'

export default function Nav () {
    return (
        <div className="nav">
            <div className="darcy">
                <Link to='/' className='darcy-link'><h1>Darcy Struble</h1></Link>
            </div>
            <div className="links">
                <Link to='/about' className='link'>// About</Link>
                <Link to='/projects' className='link'>// Projects</Link>
                <Link to='/resume' className='link'>// Resume</Link>
                <Link to='/contact' className='link'>// Contact</Link>
                <Link to='/' className='link'>// Home</Link>
            </div>
        </div>
    )
}