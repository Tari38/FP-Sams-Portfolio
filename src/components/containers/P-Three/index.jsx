import { Col, Container, Row, Table } from "react-bootstrap";
import { PieChart } from 'react-minimal-pie-chart';
import FullOption from "../../charts/pie/p-one-pie";
import { RiskyQuizness } from "../../../assets/projects";
import "../projects.css";
import { me, ben, abigail, edgar } from "../../../assets/avatars"

export default function PThree() {
    
    return (
        <>
            <Container className="main-project-container">                
                <h1>Project Three - Risky Quizness</h1>   
                <p className="subtitle">A trivia quiz app.</p>
                <img className="slide" src={RiskyQuizness} alt="project three, risky quizness" />
                    <div>                        
                        <a className="netlify-link" href="https://risky-quizness.netlify.app/" rel="noreferrer" target="_blank">View Risky Quizness!</a>                                             
                    </div>                               
            </Container>
            <br />
            <Row>
                <Col className="col-l">
                    <Container className="project-info">
                        <h2>Languages Used: Frontend</h2>
                        <PieChart style={{ height: '200px' }}>
                            <FullOption 
                                data={[
                                    { title: 'JavaScript', value: 69.1, color: '#F1E05A' },
                                    { title: 'HTML', value: 5.9, color: '#E34C26' },
                                    { title: 'CSS', value: 25, color: '#563D7C' },
                                ]} />
                        </PieChart>
                            <hr />
                            
                        <ul className="color-key">
                            <li style={{ color: '#F1E05A' }}>JavaScript</li>
                            <li style={{ color: '#E34C26' }}>HTML</li>
                            <li style={{ color: '#563D7C' }}>CSS</li>
                        </ul>
                        <br />
                        <h2>Backend</h2>
                        <PieChart style={{ height: '200px' }}>
                            <FullOption 
                                data={[
                                    { title: 'JavaScript', value: 100, color: '#F1E05A' },
                                ]} />
                        </PieChart>
                            <hr />
                            
                        <ul className="color-key">
                            <li style={{ color: '#F1E05A' }}>JavaScript</li>
                        </ul>
                    </Container>
                </Col>
                <Col className="col-r">
                    <Container className="project-devs">
                        <h2>Created By:</h2>
                        <Table striped bordered variant="light" id="table">
                            <thead>
                                <tr>
                                    <th>Avatar</th>
                                    <th>Name</th>
                                    <th>Github</th>
                                </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td><img className="mini-avatar" src={me} alt="sam"></img></td>
                                <td>Samantha Dorrell</td>
                                <td><a href="https://github.com/Tari38">Tari38</a></td>
                            </tr>
                            <tr>
                                <td><img className="mini-avatar" src={ben} alt="ben"></img></td>
                                <td>Ben Tidball</td>
                                <td><a href="https://github.com/BenTidball">BenTidball</a></td>
                            </tr>
                            <tr>
                                <td><img className="mini-avatar" src={abigail} alt="abigail"></img></td>
                                <td>Abigail Shadare</td>
                                <td><a href="https://github.com/abscoding">abscoding</a></td>
                            </tr>
                            <tr>
                                <td><img className="mini-avatar" src={edgar} alt="edgar"></img></td>
                                <td>Edgar René Ruiz López</td>
                                <td><a href="https://github.com/CrookedTimber">CrookedTimber</a></td>
                            </tr>
                            </tbody>
                        </Table>
                    
                        <hr />
                        <h2>Dependencies</h2>
                        <ul className="tech-list">
                            <li>@reduxjs/toolkit</li>
                            <li>@testing-library/jest-dom</li>
                            <li>@testing-library/react</li>
                            <li>@testing-library/user-event</li>
                            <li>axios</li>
                            <li>react</li>
                            <li>react-bootstrap</li>
                            <li>react-dom</li>
                            <li>react-redux</li>
                            <li>react-router-dom</li>
                            <li>react-scripts</li>
                            <li>redux</li>
                            <li>redux-persist</li>
                            <li>socket.io-client</li>
                            <li>web-vitals</li>
                        </ul>
                    </Container>
                </Col>
            </Row>
        </>
    )
}