import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import './style.css'
import { useState } from 'react';

export default function Lobby() {
  const [name, setName] = useState('');
  const [gameId, setGameId] = useState('');

  return (
    <Container>
      <Row>
        <Col className="landing-left">
          <h2>Red Team</h2>
          <h3>Spymaster</h3>
          <h3>Players</h3>
          <Button disabled={name === ""}>New Game</Button>
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
          <Button disabled={name === "" || gameId === ""}>Join Game</Button>
        </Col>
      </Row>
    </Container>
  );
}
