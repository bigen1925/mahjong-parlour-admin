import { GENDER, SEAT } from './constants';

export type Table = {
    id: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    parlourId: string;
    players: Player[];
};

export type Player = {
    id: string;
    seat: SEAT | null;
    createdAt: Date;
    updatedAt: Date;
    tableId: string | null;
} & ({ guest: Guest; staff?: never } | { guest?: never; staff: Staff });

export type Guest = {
    id: string;
    lastName: string;
    firstName: string;
    gender: GENDER;
    email: string;
    address: string;
    rewardPoints: number;
    playerId: string;
    createdAt: Date;
    updatedAt: Date;
    organizationId: string;
};

export type GuestDetail = Guest & {
    rankingRates: {
        1: number;
        2: number;
        3: number;
        4: number;
    };
    rankingAverage: number;
    totalPlayCount: number;
    visitingHistories: {
        id: number;
        enteredAt: Date;
        exitedAt: Date;
        playCount: number;
    }[];
};

export type Staff = {
    id: string;
    loginId: string;
    password: string;
    lastName: string;
    firstName: string;
    gender: GENDER;
    playerId: string;
    createdAt: Date;
    updatedAt: Date;
    organizationId: string;
};
