import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './style.css'
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Player, Role } from '../Types';

type Props = {
  playerId: string,
  players: Record<string, Player>
  setPlayers: React.Dispatch<React.SetStateAction<Record<string, Player>>>,
};

type RouteParams = {
  gameId: string,
};

export default function NameSelection({ playerId, players, setPlayers }: Props) {
  const [name, setName] = useState('');
  const params = useParams<RouteParams>();

  function updateName(name: string) {
    setName(name);
    setPlayers({ ...players, [playerId]: { id: playerId, name: name, role: { kind: Role.Spectator } } });
  }

  return (
    <div className="centred">
      <Form.Control
        type="text"
        autoComplete='off'
        id="name"
        placeholder="Enter Player Name"
        className="select-name"
        onChange={(event) => updateName(event.target.value)}
      />
      <Link to={`/${params.gameId}/lobby`}><Button disabled={name === ""}>Play</Button></Link>
    </div >
  );
}
