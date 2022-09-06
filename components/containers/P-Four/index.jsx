import { Col, Container, Row, Table } from "react-bootstrap";
import { PieChart } from 'react-minimal-pie-chart';
import FullOption from "../../charts/pie/p-one-pie";
import { ArtemisCamping } from "../../../assets/projects";
import { me, edgar, nathan, summira, wing } from "../../../assets/avatars"

export default function PFour() {
    
    return (
        <>
            <Container className="main-project-container">                
                <h1>Project Four - Artemis Camping</h1>   
                <p className="subtitle">A organising app for camping and hiking.</p>
                <img className="slide" src={ArtemisCamping} alt="awaiting project" />
                    <div>                        
                        <a className="netlify-link" href="https://artemis-camping.netlify.app/" rel="noreferrer" target="_blank">View Artemis Camping!</a>                                             
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
                            <br />
                        <h2>Backend:</h2>
                        <PieChart style={{ height: '200px' }}>
                            <FullOption 
                                data={[
                                    { title: 'Python', value: 100, color: 'lightblue' }                  
                                ]} />
                        </PieChart>
                            <hr />
                            
                        <ul className="color-key">
                            <li style={{ color: 'lightblue' }}>Python</li>
                            
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
                                <td><img className="mini-avatar" src={summira} alt="summira"></img></td>
                                <td>Summira Hussain</td>
                                <td><a href="https://github.com/sumshuss">sumshuss</a></td>
                            </tr>
                            <tr>
                                <td><img className="mini-avatar" src={wing} alt="wing"></img></td>
                                <td>Wing Yuen</td>
                                <td><a href="https://github.com/wingyuen2022">wingyuen2022</a></td>
                            </tr>
                            <tr>
                                <td><img className="mini-avatar" src={nathan} alt="nathan"></img></td>
                                <td>Nathan Olds</td>
                                <td><a href="https://github.com/nathanolds">nathanolds</a></td>
                            </tr>
                            <tr>
                                <td><img className="mini-avatar" src={edgar} alt="edgar"></img></td>
                                <td>Edgar René Ruiz Lopez</td>
                                <td><a href="https://github.com/CrookedTimber">CrookedTimber</a></td>
                            </tr>
                            </tbody>
                        </Table>

                        <br />
                        
                        <h2>Dependencies</h2>
                        <ul className="tech-list">
                            <li>@chakra-ui/react</li>
                            <li>@emotion/react</li>
                            <li>@emotion/styled</li>
                            <li>@fortawesome/fontawesome-svg-core</li>
                            <li>@fortawesome/free-solid-svg-icons</li>
                            <li>@fortawesome/react-fontawesome</li>
                            <li>@google/maps</li>
                            <li>@lottiefiles/lottie-interactivity</li>
                            <li>@react-google-maps/api</li>
                            <li>@reduxjs/toolkit</li>
                            <li>@syncfusion/ej2-react-calendars</li>
                            <li>@syncfusion/ej2-react-schedule</li>
                            <li>@testing-library/jest-dom</li>
                            <li>@testing-library/react</li>
                            <li>@testing-library/user-event</li>
                            <li>"cookie": "^0.4.2",</li>
                            <li>"framer-motion": "^7.0.3",</li>
                            <li>"google-maps-react": "^2.0.6",</li>
                            <li>"moment": "^2.29.4",</li>
                            <li>"react": "^18.2.0",</li>
                            <li>"react-bootstrap": "^2.5.0",</li>
                            <li>"react-dom": "^18.2.0",</li>
                            <li>"react-helmet": "^6.1.0",</li>
                            <li>"react-icons": "^4.4.0",</li>
                            <li>"react-redux": "^8.0.2",</li>
                            <li>"react-reveal": "^1.2.2",</li>
                            <li>"react-router-dom": "^6.3.0",</li>
                            <li>"react-scripts": "5.0.1",</li>
                            <li>"redux": "^4.2.0",</li>
                            <li>"redux-devtools-extension": "^2.13.9",</li>
                            <li>"styled-components": "^5.3.5",</li>
                            <li>"web-vitals": "^2.1.4"</li>
                        </ul>
                        <h2>DevDependencies</h2>
                        <ul className="tech-list">
                            <li>jest</li>
                            <li>jest-environment-jsdom</li>
                        </ul>
                    </Container>
                </Col>
            </Row>
        </>
    )
}