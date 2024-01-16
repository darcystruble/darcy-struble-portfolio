// image
import darcyPic from '../../assets/darcy.jpg'
// from react
import { useEffect } from 'react'
// AOS
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function About() {
    useEffect(()=>{
        AOS.init()
    }, [])

    return (
        <div className="about-outer section section-bg">
            <h2>About me...</h2>
            <div id="about">
                <div className='img-div' data-aos="flip-left" data-aos-duration="500">
                    <img src={darcyPic} alt="" />
                </div>
                <div className="text" data-aos="fade-left" data-aos-duration="2000">
                    <p>I am a software engineer with a background in creative fields and design.</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque quo tempora nisi sunt saepe. Voluptatem soluta, deleniti dolorum quo, aliquid velit architecto unde aut optio nostrum, quos perspiciatis minima. Eveniet.</p>
                </div>
            </div>
        </div>
    )
}