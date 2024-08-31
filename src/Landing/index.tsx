import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import './style.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Landing() {
  const [gameId, setGameId] = useState('');

  return (
    <Container>
      <Col className="landing-col">
        <Container className="landing-game-choice" >
          <Row>
            <Col className="landing-left">
              <Link to={"test/select-name"}><Button>New Game</Button></Link>
            </Col>
            <Col className="landing-right">
              <Form.Control
                type="text"
                id="game-id"
                placeholder="Game Id"
                maxLength={3}
                className="landing-game-id"
                onChange={(event) => setGameId(event.target.value)}
              />
              <Link to={`${gameId}/lobby`}><Button>Join Game</Button></Link>
            </Col>
          </Row>
        </Container>
      </Col >
    </Container >
  );
}
