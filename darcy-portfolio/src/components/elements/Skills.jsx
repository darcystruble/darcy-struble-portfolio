// css
import '../styles/Skills.css'
// icon imports
// languages
import { JavascriptPlain } from 'devicons-react'
import { TypescriptPlain } from 'devicons-react'
import { PythonPlain } from 'devicons-react'
import { Css3PlainWordmark } from 'devicons-react'
import { Html5PlainWordmark } from 'devicons-react'
// frameworks
import { ReactOriginal } from 'devicons-react'
import { BootstrapPlain } from 'devicons-react'
import { ExpressOriginal } from 'devicons-react'
// databases
import { MongodbPlain } from 'devicons-react'
import { DjangoPlain } from 'devicons-react'

export default function Skills() {
    return (
        <div id="skills" className='section section-bg'>
            <h2>Skills</h2>
            <div className="langs">
                <h3>Languages</h3>
                <div className="group">
                    <div className="icon">
                        <JavascriptPlain color="gold" size="70"/>
                        <div>JavaScript</div>
                    </div>
                    <div className="icon">
                        <PythonPlain color="gold" size="70"/>
                        <div>Python</div>
                    </div>
                    <div className="icon">
                        <TypescriptPlain color="gold" size="70"/>
                        <div>TypeScript</div>
                    </div>
                    <div className="icon">
                        <Css3PlainWordmark color="gold" size="70"/>
                        <div>CSS3</div>
                    </div>
                    <div className="icon">
                        <Html5PlainWordmark color="gold" size="70"/>
                        <div>HTML5</div>
                    </div>
                </div>
            </div>
            <div className="frames">
                <h3>Frameworks</h3>
                <div className="group">
                    <div className="icon">
                        <ReactOriginal size="70"/>
                        <div>React.js</div>
                    </div>
                    <div className="icon">
                        <BootstrapPlain color="gold" size="70"/>
                        <div>Bootstrap</div>
                    </div>
                    <div className="icon">
                        <ExpressOriginal size="70"/>
                        <div>Express.js</div>
                    </div>
                </div>
            </div>
            <div className="dbs">
                <h3>Databases</h3>
                <div className="group">
                    <div className="icon">
                        <MongodbPlain size="70"/>
                        <div>MongoDB</div>
                    </div>
                    <div className="icon">
                        <DjangoPlain size="70"/>
                        <div>Django</div>
                    </div>
                </div>
            </div>
        </div>
    )
}