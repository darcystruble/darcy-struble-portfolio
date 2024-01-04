import TopFold from "./TopFold";
import Languages from "./Languages";
import About from "./About";
import Projects from "./Projects";

export default function Home () {
    return (
        <div className="home-outer">
            <TopFold />
            <Languages />
            <About />
            <Projects />
        </div>
    )
}
