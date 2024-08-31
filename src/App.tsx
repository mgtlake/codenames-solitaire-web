import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Landing from './Landing'
import Lobby from './Lobby'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Player } from './Types';
import NameSelection from './NameSelection';

function App() {
  const [name, setName] = useState<string>('');
  const [gameId, setGameId] = useState<string>('');
  const [players, setPlayers] = useState<Record<string, Player>>({});

  return (
    <div className="App">
      <h1 className="display-2">Codenames Solitaire</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/:gameId/select-name" element={<NameSelection playerId="me" players={players} setPlayers={setPlayers} />} />
          <Route path="/:gameId/lobby" element={<Lobby playerId="me" players={players} setPlayers={setPlayers} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
