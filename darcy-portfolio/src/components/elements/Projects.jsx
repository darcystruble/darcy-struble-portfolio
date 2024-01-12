import bigAdventures from '../../assets/Adventure-Awaits-SS.png'
import selfCare from '../../assets/Self-Care-App-Main.png'
import crafted from '../../assets/crafted.png'
import '../styles/Projects.css'

export default function Projects() {
    return (
        <div id="projects" className="section section-bg">
            <h2>Projects</h2>
            <div className="project">
                <div className="p-text-div">
                    <h3>Big Adventures with Little Kids</h3>
                    <div className="sub-text">JavaScript // HTML // CSS</div>
                    <p>Information about this project, just a quick line</p>
                    <div className="links">
                        <a href="">GitHub</a>
                        <a href="">Deployed</a>
                    </div>
                </div>
                <div className="p-img-div">
                    <img src={bigAdventures} alt="Screen shot of Big Adventures webpage" />
                </div>
            </div>
            <div className="project">
                <div className="p-text-div">
                    <h3>Self Care App</h3>
                    <div className="sub-text">JavaScript // MongoDB // HTML // CSS</div>
                    <p>Information about this project, just a quick line</p>
                    <div className="links">
                        <a href="">GitHub</a>
                        <a href="">Deployed</a>
                    </div>
                </div>
                <div className="p-img-div">
                    <img src={selfCare} alt="Self Care app screen shot" />
                </div>
            </div>
            <div className="project">
                <div className="p-text-div">
                    <h3>Event-X</h3>
                    <div className="sub-text">React // MongoDB</div>
                </div>
                <div className="p-img-div"></div>
            </div>
            <div className="project">
                <div className="p-text-div">
                    <h3>Crafted: A Fiber arts project tracker</h3>
                    <div className="sub-text">React // Django</div>
                    <p>Information about this project, just a quick line</p>
                    <div className="links">
                        <a href="">GitHub</a>
                        <a href="">Deployed</a>
                    </div>
                </div>
                <div className="p-img-div">
                    <img src={crafted} alt="Screen shot of Crafted webpage" />
                </div>
            </div>
        </div>
    )
}