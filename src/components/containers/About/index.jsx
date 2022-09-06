import "./About.css";
import { me } from "../../../assets/";
import { Accordion, Container, Card, CardImg, CardGroup } from "react-bootstrap";
import { c64key, gamecube, nes, nintendo64, ps2, ps4, psone, snes, wii, xbox, xbox360, violin } from "../../../assets/gaming/";

export default function About() {
    return (
        <>

        <Container className="about-container-top">
                <h1 className="about-header">I am Sam!</h1>
        
                <div className="avatar-container">
                    <img className="avatar" src={me} alt="Samantha Dorrell" />
                </div>
        </Container>

        <br />

        <Container className="about-me-container">

            <Accordion className="gamer-bg" defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>For the love of Gaming ...</Accordion.Header>
                    <Accordion.Body className="about-p"><p>I'm a mum to 1 daughter, and absolutely love gaming. I was first introduced to a computer at a young age in the early 80's with a Commodore 64. My favourite game at the time was called Little Computer People (it was basically the early version of The Sims!) The cassette tapes took about 30 minutes to load, and then sometimes they would crash so it could take a reallllllly long time before you actually got to play anything!</p>
                    <hr />
                    <CardGroup className="about-card-group">
                        <Card className="card">
                            <CardImg src={c64key} className="card-CardImg-top" alt="Commodore 64" />
                            <Card.Body className="card-body">
                                <Card.Title className="card-title">Commodore 64</Card.Title>
                            </Card.Body>
                        </Card>
                        <Card className="card">
                            <CardImg src={nes} className="card-CardImg-top" alt="NES" />
                            <Card.Body className="card-body">
                                <Card.Title className="card-title">NES Console</Card.Title>
                            </Card.Body>
                        </Card>
                        <Card className="card">
                            <CardImg src={snes} className="card-CardImg-top" alt="SNES" />
                            <Card.Body className="card-body">
                                <Card.Title className="card-title">SNES Console</Card.Title>
                            </Card.Body>
                        </Card>
                        <Card className="card">
                        <CardImg src={nintendo64} className="card-CardImg-top" alt="nintendo 64" />
                        <Card.Body className="card-body">
                            <Card.Title className="card-title">Nintendo 64</Card.Title>
                        </Card.Body>
                        </Card>
                        <Card className="card">
                        <CardImg src={gamecube} className="card-CardImg-top" alt="gamecube" />
                        <Card.Body className="card-body">
                            <Card.Title className="card-title">GameCube</Card.Title>
                        </Card.Body>
                        </Card>
                    </CardGroup>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
          
          <br />
            <Accordion>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>An ongoing fascination with Tech ...</Accordion.Header>
                  <Accordion.Body className="about-p">As I grew up, we were introduced to the ever changing tech world of gaming (thanks mum). To have seen how technology has progressed over the past four decades has been fascinating and makes me want to learn more about code and how games were created.
          <br />
                  <CardGroup className="about-card-group">
                    <Card className="card">
                      <CardImg src={psone} className="card-CardImg-top" alt="ps1" />
                      <Card.Body className="card-body">
                        <Card.Title className="card-title">Playstation One</Card.Title>
                      </Card.Body>
                    </Card>
                    <Card className="card">
                      <CardImg src={ps2} className="card-CardImg-top" alt="ps2" />
                      <Card.Body className="card-body">
                        <Card.Title className="card-title">Playstation 2</Card.Title>
                      </Card.Body>
                    </Card>
                    <Card className="card">
                      <CardImg src={wii} className="card-CardImg-top" alt="wii" />
                      <Card.Body className="card-body">
                        <Card.Title className="card-title">Nintendo Wii</Card.Title>
                      </Card.Body>
                    </Card>
                    <Card className="card">
                      <CardImg src={xbox} className="card-CardImg-top" alt="xbox" />
                      <Card.Body className="card-body">
                        <Card.Title className="card-title">Xbox</Card.Title>
                      </Card.Body>
                    </Card>
                    <Card className="card">
                      <CardImg src={ps4} className="card-CardImg-top" alt="ps4" />
                      <Card.Body className="card-body">
                        <Card.Title className="card-title">Playstation 4</Card.Title>
                      </Card.Body>
                    </Card>
                  </CardGroup>
                  </Accordion.Body>
                </Accordion.Item>
            </Accordion>

          <br />

            <Accordion>
              <Accordion.Item eventKey="2">
                <Accordion.Header>For our mental health ...</Accordion.Header>
                <Accordion.Body className="about-p">I'm a very creative person with a background in art and music. I think these translate into coding extremely well, and I'm fortunate to have the experiences I have gained, albeit some have been terrible. As such, I'm a huge advocate for mental health and wellbeing, and would ultimately like to aim to creating software and apps that can really help other people, especially in times of great anguish.
          
        
                <CardGroup className="about-card-group">
                  <Card className="card">
                    <CardImg src={xbox360} className="card-CardImg-top card-CardImg-360" alt="xbox 360" />
                    <Card.Body className="card-body">
                      <Card.Title className="card-title">Xbox 360</Card.Title>
                    </Card.Body>
                  </Card>
                  <Card className="card">
                    <CardImg src={violin} className="card-CardImg-top" alt="skill violin" />
                    <Card.Body className="card-body">
                      <Card.Title className="card-title">Violinist - Grade 6</Card.Title>
                    </Card.Body>
                  </Card>
                </CardGroup>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
        </Container>

        <br />

        <Container className="about-container-bottom">
          <p className="contact-p">If you found any of this interesting and would like to learn more you can  <span><a className="contact-a" href="../Contact/">Contact</a></span> me and view my Projects using the links above.
          Thank you!</p>

        </Container>
        </>
    )
}