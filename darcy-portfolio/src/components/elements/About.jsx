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
                    <p>I am a junior develper with a background in creative fields and design. Frontend work is my passion! I love creating beautfiul and functional websites using modern technologies.</p>
                    <p>When I'm not behind my computer, you will find me out in the woods with my family, camping or hiking and sitting with my yarn and knitting up a project.</p>
                </div>
            </div>
        </div>
    )
}