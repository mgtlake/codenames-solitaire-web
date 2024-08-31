export enum Team {
  Red,
  Blue,
}

export enum Role {
  Spymaster,
  Guesser,
  Spectator,
}

export type Spymaster = {
  kind : Role.Spymaster,
  team: Team,
}

export type Guesser = {
  kind : Role.Guesser,
  team: Team,
}

export type Spectator = {
  kind : Role.Spectator,
}

export type Player = {
  id: string;
  name: string;
  role: Spymaster | Guesser | Spectator;
};