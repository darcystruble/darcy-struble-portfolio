import Header from '../elements/Header'
import Curve from '../atoms/Curve'
import About from '../elements/About'
import Skills from '../elements/Skills'
import Projects from '../elements/Projects'
import Contact from '../elements/Contact'

export default function Home() {
    return (
        <div>
            <Header />
            <Curve />
            <About />
            <Skills />
            <Projects />
            <Contact />
        </div>
    )
}