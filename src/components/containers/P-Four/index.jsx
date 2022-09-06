import { Col, Container, Row, Table } from "react-bootstrap";
import { PieChart } from 'react-minimal-pie-chart';
import FullOption from "../../charts/pie/p-one-pie";
import "../projects.css";
import { me } from "../../../assets/avatars"

export default function PFour() {
    
    return (
        <>
            <Container className="main-project-container">                
                <h1>Project Four - TBD</h1>   
                <p className="subtitle"></p>
                <img className="slide" src="" alt="awaiting project" />
                    <div>                        
                        <a className="netlify-link" href="abc" rel="noreferrer" target="_blank">View !</a>                                             
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
                                <td><img className="mini-avatar" src={""} alt=""></img></td>
                                <td></td>
                                <td><a href="abc">abc</a></td>
                            </tr>
                            <tr>
                                <td><img className="mini-avatar" src={""} alt=""></img></td>
                                <td></td>
                                <td><a href="abc">abc</a></td>
                            </tr>
                            <tr>
                                <td><img className="mini-avatar" src={""} alt=""></img></td>
                                <td></td>
                                <td><a href="abc">abc</a></td>
                            </tr>
                            </tbody>
                        </Table>
                    </Container>
                </Col>
            </Row>
        </>
    )
}