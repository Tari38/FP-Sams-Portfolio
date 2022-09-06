import { Container } from "react-bootstrap";
import SkillCards from "../../Cards/Skills/"
import "./Home.css";

export default function Home() {
    return (
        <>
        
        <Container className="welcome-container shadow">
            <h2>Hi there, I'm Sam!</h2>
                <h3>I am part of the Al-Jazari Cohort at Futureproof and have recently graduated as a Fullstack Software Engineer!</h3>
                <hr />
                <p>This website will showcase who I am and the projects I work on and complete.</p>
                    <p>For more info about me, please see my  
                        <span>
                            <a href="./About/"> about </a>
                        </span> 
                         page.
                    </p>
        </Container>
        
        <br />
        <h4>Here are some of the technologies I have learnt so far:</h4>
        <br />
        <Container>
            <SkillCards />
        </Container>
        </>
    )
}