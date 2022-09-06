import { Col, Container, Row, Table } from "react-bootstrap";
import { PieChart } from 'react-minimal-pie-chart';
import FullOption from "../../charts/pie/p-one-pie";
import { HabiTrax } from "../../../assets/projects";
import "../projects.css";
import { me, ben, mariesophie, terry } from "../../../assets/avatars"

export default function PTwo() {
    
    return (
        <>
            <Container className="main-project-container">                
                <h1>Project Two - Habi-Trax</h1>   
                <p className="subtitle">A personal habit tracker.</p>
                <img className="slide" src={HabiTrax} alt="project two, habit tracker" />
                    <div>                        
                        <a className="netlify-link" href="https://habit-tracker-project-two.netlify.app/" rel="noreferrer" target="_blank">View Habi-Trax!</a>                                             
                    </div>                               
            </Container>
            <br />
            <Row>
                <Col className="col-l">
                    <Container className="project-info">
                        <h2>Languages Used - Frontend:</h2>
                        <PieChart style={{ height: '200px' }}>
                            <FullOption 
                                data={[
                                    { title: 'JavaScript', value: 25.3, color: '#F1E05A' },
                                    { title: 'HTML', value: 44.3, color: '#E34C26' },
                                    { title: 'CSS', value: 30.3, color: '#563D7C' },
                                    { title: 'DOCKER', value: 0.1, color: '#384D54'},
                                ]} />
                        </PieChart>
                            <hr />
                            
                        <ul className="color-key">
                            <li style={{ color: '#F1E05A' }}>JavaScript</li>
                            <li style={{ color: '#E34C26' }}>HTML</li>
                            <li style={{ color: '#563D7C' }}>CSS</li>
                            <li style={{ color: '#384D54' }}>Dockerfile</li>
                        </ul>

                        <br />
                        
                        <h2>Backend:</h2>
                        <PieChart style={{ height: '200px' }}>
                            <FullOption 
                                data={[
                                    { title: 'JavaScript', value: 99, color: '#F1E05A' },
                                    { title: 'Other', value: 1, color: '#EDEDED' },
                                ]} />
                        </PieChart>
                            <hr />
                            
                        <ul className="color-key">
                            <li style={{ color: '#F1E05A' }}>JavaScript</li>
                            <li style={{ color: '#EDEDED' }}>Other</li>
                        </ul>
                    </Container>
                </Col>
                <br />
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
                                <td><img className="mini-avatar" src={mariesophie} alt="marie-sophie"></img></td>
                                <td>Marie-Sophie Capel-Duran</td>
                                <td><a href="https://github.com/mariesophiecd">mariesophiecd</a></td>
                            </tr>
                            <tr>
                                <td><img className="mini-avatar" src={terry} alt="terry"></img></td>
                                <td>Terry Fallows</td>
                                <td><a href="https://github.com/theweion">Weion</a></td>
                            </tr>
                            </tbody>
                        </Table>
                        <br />
                        <h2>Dependencies</h2>
                        <ul className="tech-list">
                            <li>bcryptjs</li>
                            <li>cors</li>
                            <li>dotenv</li>
                            <li>express</li>
                            <li>jsonwebtoken</li>
                            <li>node-cron</li>
                            <li>pg</li>
                            <li>uuid</li>
                        </ul>
                        <h2>DevDependencies</h2>
                        <ul className="tech-list">
                            <li>jest</li>
                            <li>nodemon</li>
                            <li>supertest</li>
                        </ul>
                    </Container>
                </Col>
            </Row>
        </>
    )
}