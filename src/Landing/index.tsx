import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import './style.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';

type Props = {
  name: string,
  setName: React.Dispatch<React.SetStateAction<string>>,
  gameId: string,
  setGameId: React.Dispatch<React.SetStateAction<string>>,
};

export default function Landing({ name, setName, gameId, setGameId }: Props) {
  // const [name, setName] = useState('');
  // const [gameId, setGameId] = useState('');

  return (
    <Container>
      <Col className="landing-col">
        <Form.Control
          type="text"
          id="name"
          placeholder="Enter Player Name"
          className="landing-name"
          onChange={(event) => setName(event.target.value)}
        />
        <Container className="landing-game-choice" >
          <Row>
            <Col className="landing-left">
              <Link to={"test"}><Button disabled={name === ""}>New Game</Button></Link>
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
              <Link to={gameId}><Button disabled={name === "" || gameId === ""}>Join Game</Button></Link>
            </Col>
          </Row>
        </Container>
      </Col >
    </Container >
  );
}
