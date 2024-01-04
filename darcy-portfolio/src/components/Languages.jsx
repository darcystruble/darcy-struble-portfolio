import jsLogo from '../assets/language-pngs/js-logo.png'
import cssLogo from '../assets/language-pngs/css-logo.png'
import htmlLogo from '../assets/language-pngs/html-logo.png'
import pythonLogo from '../assets/language-pngs/python-logo.png'
import mongoLogo from '../assets/language-pngs/mongoDB-logo.png'
import reactLogo from '../assets/language-pngs/react-logo.png'

export default function Languages() {
    return (
        <div className="lang-outer">
                    <div className="lang">
                        <img src={jsLogo} alt="javascript" id="first-img" />
                        <div>JavaScript</div>
                    </div>
                    <div className="lang">
                        <img src={cssLogo} alt="css" />
                        <div>CSS</div>
                    </div>
                    <div className="lang">
                        <img src={htmlLogo} alt="html" />
                        <div>HTML</div>
                    </div>
                    <div className="lang">
                        <img src={pythonLogo} alt="python" />
                        <div>Python</div>
                    </div>
                    <div className="lang">
                        <img src={mongoLogo} alt="mongoDB" />
                        <div>MongoDB</div>
                    </div>
                    <div className="lang">
                        <img src={reactLogo} alt="react" id="last-img" />
                        <div>React.js</div>
                    </div>
                </div>
    )
}