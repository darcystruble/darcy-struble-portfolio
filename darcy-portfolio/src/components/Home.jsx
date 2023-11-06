import TopFold from "./TopFold";
import About from "./About";
import Projects from "./Projects";

export default function Home () {
    return (
        <div className="home-outer">
            <TopFold />
            <About />
            <Projects />
        </div>
    )
}
