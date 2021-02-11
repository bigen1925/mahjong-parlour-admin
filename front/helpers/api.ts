import axios, { AxiosRequestConfig } from 'axios';
import { SEAT } from '../domains/constants';
import { Guest, Player, Table } from '../domains/models';

const client = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL_BASE,
    headers: {
        'Content-Type': 'application/json',
    },
});

export function callApi(config: AxiosRequestConfig): Promise<unknown> {
    return client(config).then((res) => res.data);
}

interface AuthenticateResponse {
    token: string;
}
export async function authenticate(loginId: string, password: string): Promise<AuthenticateResponse> {
    return (await callApi({
        url: '/authenticate',
        method: 'post',
        data: { loginId, password },
    })) as AuthenticateResponse;
}

export async function getGuests(params: { waiting?: boolean; playing?: boolean }): Promise<Guest[]> {
    return (await callApi({ url: '/guests', params })) as Guest[];
}

export async function addWaitingGuest(guestId: string): Promise<void> {
    return (await callApi({ url: `/waiting-guests`, method: 'post', data: { guestId } })) as void;
}

export async function removeWaitingGuest(guestId: string): Promise<void> {
    return (await callApi({ url: `/waiting-guests/${guestId}`, method: 'delete' })) as void;
}

export async function getTables(): Promise<Table[]> {
    return (await callApi({ url: '/tables' })) as Table[];
}

export async function updateGuestPlayer(
    guestId: string,
    data: { tableId: string | null; seat: SEAT | null }
): Promise<Player> {
    return (await callApi({ url: `/players/as-guest/${guestId}`, method: 'patch', data })) as Player;
}

export async function updatePlayer(
    playerId: string,
    data: { tableId: string | null; seat: SEAT | null }
): Promise<Player> {
    return (await callApi({ url: `/players/${playerId}`, method: 'patch', data })) as Player;
}
