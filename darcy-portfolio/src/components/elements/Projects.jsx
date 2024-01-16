import bigAdventures from '../../assets/Adventure-Awaits-SS.png'
import selfCare from '../../assets/Self-Care-App-Main.png'
import crafted from '../../assets/crafted.png'
import '../styles/Projects.css'
// AOS Library
import AOS from 'aos'
import 'aos/dist/aos.css'
// React
import { useEffect } from 'react'

export default function Projects() {
    useEffect(() => {
        AOS.init()
    }, [])

    return (
        <div id="projects" className="section section-bg">
            <h2>Projects</h2>
            <div className="project">
                <div className="p-text-div"data-aos="fade-right" data-aos-duration="1000">
                    <h3>Big Adventures with Little Kids</h3>
                    <div className="sub-text">JavaScript // HTML // CSS</div>
                    <p>A website using JavaScript logic to sort through hikes available on the National Parks API that are kid and family friendly.</p>
                    <div className="links">
                        <a href="https://github.com/darcystruble/adventure-awaits" target="blank">GitHub</a>
                        <a href="https://bigadventureswithlittlekids.surge.sh/" target="blank">Deployed</a>
                    </div>
                </div>
                <div className="p-img-div" data-aos="fade-left" data-aos-duration="1000">
                    <img src={bigAdventures} alt="Screen shot of Big Adventures webpage" />
                </div>
            </div>
            <div className="project">
                <div className="p-text-div" data-aos="fade-right" data-aos-duration="1000">
                    <h3>Self Care App</h3>
                    <div className="sub-text">JavaScript // MongoDB // HTML // CSS</div>
                    <p>A website that combines frontend and backend to create a website where a user can track their moods and daily gratitudes.</p>
                    <div className="links">
                        <a href="https://github.com/darcystruble/self-care-app" target="blank">GitHub</a>
                        <a href="">Deployed</a>
                    </div>
                </div>
                <div className="p-img-div" data-aos="fade-left" data-aos-duration="1000">
                    <img src={selfCare} alt="Self Care app screen shot" />
                </div>
            </div>
            {/* <div className="project" data-aos="fade-up">
                <div className="p-text-div">
                    <h3>Event-X</h3>
                    <div className="sub-text">React // MongoDB</div>
                </div>
                <div className="p-img-div"></div>
            </div> */}
            <div className="project">
                <div className="p-text-div" data-aos="fade-right" data-aos-duration="1000">
                    <h3>Crafted: A Fiber arts project tracker</h3>
                    <div className="sub-text">React // TypeScript // Django // Python</div>
                    <p>An app that allows a crafter to track their projects, get goals for how they want to spend their crafting time and track their crafting inventory.</p>
                    <div className="links">
                        <a href="https://github.com/darcystruble/fiber-arts-tracker" target="blank">GitHub</a>
                        <a href="">Deployed</a>
                    </div>
                </div>
                <div className="p-img-div" data-aos="fade-left" data-aos-duration="1000">
                    <img src={crafted} alt="Screen shot of Crafted webpage" />
                </div>
            </div>
        </div>
    )
}