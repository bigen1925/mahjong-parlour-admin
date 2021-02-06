import { Guest, Table } from '../domains/models';
import { SEAT } from '../domains/constants';

export function fetchApi(path: string, init: RequestInit = {}): Promise<unknown> {
    const url = process.env.NEXT_PUBLIC_API_URL_BASE + path;
    return fetch(url, init).then((res) => res.json());
}

export async function getGuests(): Promise<Guest[]> {
    return (await fetchApi('guests')) as Guest[];
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
