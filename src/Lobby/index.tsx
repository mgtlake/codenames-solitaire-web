import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import './style.css'
import { useState } from 'react';
import { Player, Role, Team } from '../Types';

type Props = {
  playerId: string,
  players: Record<string, Player>
  setPlayers: React.Dispatch<React.SetStateAction<Record<string, Player>>>,
};


export default function Lobby({ playerId, players, setPlayers }: Props) {

  function handleJoin(role: Role.Spymaster | Role.Guesser, team: Team) {
    const player = players[playerId];
    setPlayers({
      ...players, [playerId]: {
        ...player, role: {
          kind: role,
          team: team
        }
      }
    });
  }

  function handleLeave() {
    const player = players[playerId];
    setPlayers({
      ...players, [playerId]: {
        ...player, role: {
          kind: Role.Spectator,
        }
      }
    });
  }

  function maybeRenderJoinButton(role: Role.Spymaster | Role.Guesser, team: Team) {
    if (role === Role.Spymaster && Object.entries(players)
      .filter(([_key, player]) => player.role.kind === role &&
        player.role.team === team).length > 0) {
      return
    }
    if (players[playerId].role.kind === Role.Spectator) {
      return <Button onClick={(_event) => handleJoin(role, team)}>Join</Button>
    }
  }

  function maybeRenderLeaveButton(id: string) {
    if (id === playerId) {
      return <Button onClick={(_event) => handleLeave()}>X</Button>
    }
  }

  function renderPlayers(role: Role.Spymaster | Role.Guesser, team: Team): JSX.Element {
    return <ul>
      {Object.entries(players)
        .filter(([_key, player]) => player.role.kind === role &&
          player.role.team === team)
        .map(([key, player]) => <li key={key}>{player.name}{maybeRenderLeaveButton(key)}</li>)}
    </ul>;
  }

  function renderSpectators(): JSX.Element {
    return <ul>
      {Object.entries(players)
        .filter(([_key, player]) => player.role.kind === Role.Spectator)
        .map(([key, player]) => <li key={key}>{player.name}</li>)}
    </ul>;
  }

  return (
    <Container>
      <Row style={{ justifyContent: 'center' }}>
        <Col md={4}>
          {renderSpectators()}
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 4, offset: 4 }}>
          <h2>Blue Team</h2>
        </Col>
        <Col md={4}>
          <h2>Red Team</h2>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <h3>Spymaster</h3>
        </Col>
        <Col md={4}>
          {renderPlayers(Role.Spymaster, Team.Blue)}
          {maybeRenderJoinButton(Role.Spymaster, Team.Blue)}
        </Col>
        <Col md={4}>
          {renderPlayers(Role.Spymaster, Team.Red)}
          {maybeRenderJoinButton(Role.Spymaster, Team.Red)}
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <h3>Guessers</h3>
        </Col>
        <Col md={4}>
          {renderPlayers(Role.Guesser, Team.Blue)}
          {maybeRenderJoinButton(Role.Guesser, Team.Blue)}
        </Col>
        <Col md={4}>
          {renderPlayers(Role.Guesser, Team.Red)}
          {maybeRenderJoinButton(Role.Guesser, Team.Red)}
        </Col>
      </Row>
      <Row style={{ justifyContent: 'center' }}>
        <Col md={4}>
          <h3>Specators</h3>
          {renderSpectators()}
        </Col>
      </Row>
    </Container>
  );
}
