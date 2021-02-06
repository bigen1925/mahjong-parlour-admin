import axios, { AxiosRequestConfig } from 'axios';
import { SEAT } from '../domains/constants';
import { Guest, Table } from '../domains/models';

const client = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL_BASE,
    headers: {
        'Content-Type': 'application/json',
    },
});

export function fetchApi(config: AxiosRequestConfig): Promise<unknown> {
    return client(config);
}

interface AuthenticateResponse {
    token: string;
}
export async function authenticate(loginId: string, password: string): Promise<AuthenticateResponse> {
    return (await fetchApi({
        url: '/authenticate',
        method: 'post',
        data: { loginId, password },
    })) as AuthenticateResponse;
}

export async function getGuests(): Promise<Guest[]> {
    return (await fetchApi({ url: '/guests' })) as Guest[];
}

export async function getTables(): Promise<Table[]> {
    const tables = [
        {
            id: '1',
            players: [
                {
                    seat: SEAT.FIRST,
                    guest: { id: '101', lastName: 'プレイヤー1', firstName: 'さん' },
                },
                {
                    seat: SEAT.FIRST,
                    guest: { id: '102', lastName: 'プレイヤー2', firstName: 'さん' },
                },
            ],
        },
    ];
    return tables;
}
