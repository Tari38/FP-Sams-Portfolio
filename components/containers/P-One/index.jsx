import { Col, Container, Row, Table } from "react-bootstrap";
import { PieChart } from 'react-minimal-pie-chart';
import FullOption from "../../charts/pie/p-one-pie";
import { StoryMashups } from "../../../assets/projects";
import "../projects.css";
import { me, dakz, rich, syed } from "../../../assets/avatars"

export default function POne() {
    
    return (
        <>
            <Container className="main-project-container">                
                <h1>Project One - Story Mashups</h1>   
                <p className="subtitle">A creative writing app for children.</p>
                <img className="slide" src={StoryMashups} alt="project one, story mashups" />
        
                    <div>                        
                        <a className="netlify-link" href="https://fp-story-mashups.netlify.app/index.html" rel="noreferrer" target="_blank">View Story Mashups!</a>                                             
                    </div>                               
            </Container>
            <br />
            <Row>
                <Col className="col-l">
                    <Container className="project-info">
                        <h2>Languages Used:</h2>
                        <PieChart style={{ height: '200px' }}>
                            <FullOption 
                                data={[
                                    { title: 'JavaScript', value: 49.9, color: '#F1E05A' },
                                    { title: 'HTML', value: 28.9, color: '#E34C26' },
                                    { title: 'CSS', value: 21.2, color: '#563D7C' },
                                ]} />
                        </PieChart>
                            <hr />
                            
                        <ul className="color-key">
                            <li style={{ color: '#F1E05A' }}>JavaScript</li>
                            <li style={{ color: '#E34C26' }}>HTML</li>
                            <li style={{ color: '#563D7C' }}>CSS</li>
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
                                <td><img className="mini-avatar" src={dakz} alt="daks"></img></td>
                                <td>Dakshitha Mak</td>
                                <td><a href="https://github.com/Dakz1">Dakz1</a></td>
                            </tr>
                            <tr>
                                <td><img className="mini-avatar" src={rich} alt="rich"></img></td>
                                <td>Richard Sigl</td>
                                <td><a href="https://github.com/sigltech">sigltech</a></td>
                            </tr>
                            <tr>
                                <td><img className="mini-avatar" src={syed} alt="syed"></img></td>
                                <td>Syed Javaid</td>
                                <td><a href="https://github.com/syedmjavaid">syedmjavaid</a></td>
                            </tr>
                            </tbody>
                        </Table>
                    </Container>
                </Col>
            </Row>
        </>
    )
}