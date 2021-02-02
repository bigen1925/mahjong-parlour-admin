import { Guest } from '../prisma/client';
import { TableWithPlayers } from '../prisma/types';

export function fetchApi(path: string, init: RequestInit = {}): Promise<any> {
    const url = process.env.NEXT_PUBLIC_API_URL_BASE + path;
    return fetch(url, init).then((res) => res.json());
}

export async function getGuests(): Promise<Guest[]> {
    return await fetchApi('/guests');
}

export async function getTables(): Promise<TableWithPlayers[]> {
    return await fetchApi('/tables');
}
