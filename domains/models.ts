import { SEAT } from './constants';

export type Table = {
    id: string;
    players: Player[];
};

export type Player = {
    seat: SEAT;
    guest?: Guest;
    staff?: Guest;
};

export type Guest = {
    id: string;
    lastName: string;
    firstName: string;
};
