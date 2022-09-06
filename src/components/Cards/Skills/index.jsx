import "./SkillCards.css";
import { Card, CardGroup, CardImg } from "react-bootstrap";
import { BCRYPT, CSS3, DJANGO, DOCKER, EXPRESS, FLASK, HEROKU, HTML5, GIT2, JEST, JS, MONGO, NETLIFY, NODE, POSTGRES, PYTHON, REACT, REDUX, SQL, } from "../../../assets/skills/"

export default function SkillCards() {
    return (
        <>
        <CardGroup className="skills-card-group">
            <Card className="card">
                <CardImg src={HTML5} className="card-img-top" alt="skill html" fluid />
                <Card.Body className="card-body">
                    <h5 className="card-title">HTML5</h5>
                </Card.Body>
            </Card>
            <Card className="card">
                <CardImg src={CSS3} className="card-img-top" alt="skill css" fluid />
                <Card.Body className="card-body">
                    <h5 className="card-title">CSS</h5>
                </Card.Body>
            </Card>
            <Card className="card">
                <CardImg src={JS} className="card-img-top" alt="skill git" fluid />
                <Card.Body className="card-body">
                    <h5 className="card-title">JavaScript</h5>
                </Card.Body>
            </Card>
            <Card className="card">
                <CardImg src={REACT} className="card-img-top" alt="skill html" fluid />
                <Card.Body className="card-body">
                    <h5 className="card-title">React</h5>
                </Card.Body>
            </Card>
            <Card className="card">
                <CardImg src={DOCKER} className="card-img-top" alt="skill css" fluid />
                <Card.Body className="card-body">
                    <h5 className="card-title">Docker</h5>
                </Card.Body>
            </Card>
        </CardGroup>

        <br />

        <CardGroup className="skills-card-group">
            <Card className="card">
                <CardImg src={REDUX} className="card-img-top" alt="skill git" fluid />
                <Card.Body className="card-body">
                    <h5 className="card-title">React-Redux</h5>
                </Card.Body>
            </Card>
      
            <Card className="card">
                <CardImg src={NODE} className="card-img-top" alt="skill html" fluid />
                <Card.Body className="card-body">
                    <h5 className="card-title">Node.js</h5>
                </Card.Body>
            </Card>
            <Card className="card">
                <CardImg src={EXPRESS} className="card-img-top" alt="skill css" fluid />
                <Card.Body className="card-body">
                    <h5 className="card-title">Express.js</h5>
                </Card.Body>
            </Card>
            <Card className="card">
                <CardImg src={MONGO} className="card-img-top" alt="skill git" fluid />
                <Card.Body className="card-body">
                    <h5 className="card-title">MongoDB</h5>
                </Card.Body>
            </Card>
            <Card className="card">
                <CardImg src={PYTHON} className="card-img-top" alt="skill html" fluid />
                <Card.Body className="card-body">
                    <h5 className="card-title">Python</h5>
                </Card.Body>
            </Card>
        </CardGroup>

        <br />

        <CardGroup className="skills-card-group">
            <Card className="card">
                <CardImg src={FLASK} className="card-img-top" alt="skill css" fluid />
                <Card.Body className="card-body">
                    <h5 className="card-title">Flask</h5>
                </Card.Body>
            </Card>
            <Card className="card">
                <CardImg src={DJANGO} className="card-img-top" alt="skill git" fluid />
                <Card.Body className="card-body">
                    <h5 className="card-title">Django</h5>
                </Card.Body>
            </Card>      
            <Card className="card">
                <CardImg src={SQL} className="card-img-top" alt="skill html" fluid />
                <Card.Body className="card-body">
                    <h5 className="card-title">SQL</h5>
                </Card.Body>
            </Card>
            <Card className="card">
                <CardImg src={POSTGRES} className="card-img-top" alt="skill css" fluid />
                <Card.Body className="card-body">
                    <h5 className="card-title">Postgres</h5>
                </Card.Body>
            </Card>
            <Card className="card">
                <CardImg src={JEST} className="card-img-top" alt="skill git" fluid />
                <Card.Body className="card-body">
                    <h5 className="card-title">Jest</h5>
                </Card.Body>
            </Card>
        </CardGroup>

        <br />
        
        <CardGroup className="skills-card-group">
            <Card className="card">
                <CardImg src={BCRYPT} className="card-img-top" alt="skill html" fluid />
                <Card.Body className="card-body">
                    <h5 className="card-title">Bcrypt</h5>
                </Card.Body>
            </Card>
            <Card className="card">
                <CardImg src={NETLIFY} className="card-img-top" alt="skill css" fluid />
                <Card.Body className="card-body">
                    <h5 className="card-title">Netlify</h5>
                </Card.Body>
            </Card>
            <Card className="card">
                <CardImg src={HEROKU} className="card-img-top" alt="skill git" fluid />
                <Card.Body className="card-body">
                    <h5 className="card-title">Heroku</h5>
                </Card.Body>
            </Card>
            <Card className="card">
                <CardImg src={GIT2} className="card-img-top" alt="skill git" fluid />
                <Card.Body className="card-body">
                    <h5 className="card-title">Git</h5>
                </Card.Body>
            </Card>
      </CardGroup>
        </>
    )
}