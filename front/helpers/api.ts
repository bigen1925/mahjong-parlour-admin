import axios, { AxiosRequestConfig } from 'axios';
import { Guest, Table } from '../domains/models';

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

export async function getGuests(waiting?: boolean, playing?: boolean): Promise<Guest[]> {
    return (await callApi({ url: '/guests', params: { waiting, playing } })) as Guest[];
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
