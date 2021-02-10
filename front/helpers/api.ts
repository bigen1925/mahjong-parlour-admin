import axios, { AxiosRequestConfig } from 'axios';
import { Guest, Table } from '../domains/models';

const client = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL_BASE,
    headers: {
        'Content-Type': 'application/json',
    },
});

export function fetchApi(config: AxiosRequestConfig): Promise<unknown> {
    return client(config).then((res) => res.data);
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

export async function getGuests(waiting?: boolean, playing?: boolean): Promise<Guest[]> {
    return (await fetchApi({ url: '/guests', params: { waiting, playing } })) as Guest[];
}

export async function getTables(): Promise<Table[]> {
    console.log('tables', await fetchApi({ url: '/tables' }));
    return (await fetchApi({ url: '/tables' })) as Table[];
}
