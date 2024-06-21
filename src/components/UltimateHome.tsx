import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

//@ts-ignore
const UltimateHome = ({theme}) => {
    return (
        <div>
            <Home theme={theme}></Home>
            <About theme={theme}></About>
            <Projects theme={theme}></Projects>
            <Contact theme={theme}></Contact>
        </div>
    )
}

export default UltimateHome;