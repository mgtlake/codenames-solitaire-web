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

enum Team {
  Red,
  Blue,
}

type Spymaster = {
  team: Team,
}

type Guesser = {
  team: Team,
}

type Spectator = {}

type Player = {
  id: string,
  name: string,
  role: Spymaster | Guesser | Spectator,
}

function App() {
  const [name, setName] = useState<string>('');
  const [gameId, setGameId] = useState<string>('');
  const [players, setPlayers] = useState<Record<string, Player>>({});

  return (
    <div className="App">
      <h1 className="display-2">Codenames Solitaire</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing name={name} setName={setName} gameId={gameId} setGameId={setGameId} />} />
          <Route path="/:game-id" element={<Lobby />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
