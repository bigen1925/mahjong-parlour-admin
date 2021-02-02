import { Guest, Player, Staff, Table } from './client';

export type TableWithPlayers = Table & {
    players: PlayerWithPerson[];
};

export type PlayerWithPerson = Player & {
    guest: Guest | null;
    staff: Staff | null;
};
