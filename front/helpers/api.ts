import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { GENDER, SEAT } from '../domains/constants';
import { Guest, Player, Table } from '../domains/models';

export class ApiClient {
    #client: AxiosInstance = axios.create({
        baseURL: '/api',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    #callApi = async (config: AxiosRequestConfig): Promise<unknown> => {
        return this.#client(config).then((res) => res.data);
    };

    async authenticate(loginId: string, password: string): Promise<AuthenticateResponse> {
        return (await this.#callApi({
            url: '/authenticate',
            method: 'post',
            data: { loginId, password },
        })) as AuthenticateResponse;
    }

    async getToken(): Promise<GetTokenResponse> {
        return (await this.#callApi({
            url: '/token',
        })) as GetTokenResponse;
    }

    async getGuests(params: { waiting?: boolean; playing?: boolean }): Promise<Guest[]> {
        return (await this.#callApi({ url: '/guests', params })) as Guest[];
    }

    async createGuest(data: {
        lastName: string;
        firstName: string;
        gender: GENDER;
        email: string;
        address: string;
    }): Promise<{ token: string }> {
        return (await this.#callApi({ url: '/guests', method: 'post', data })) as { token: string };
    }

    async addWaitingGuest(guestId: string): Promise<void> {
        return (await this.#callApi({ url: `/waiting-guests`, method: 'post', data: { guestId } })) as void;
    }

    async removeWaitingGuest(guestId: string): Promise<void> {
        return (await this.#callApi({ url: `/waiting-guests/${guestId}`, method: 'delete' })) as void;
    }

    async getTables(): Promise<Table[]> {
        return (await this.#callApi({ url: '/tables' })) as Table[];
    }

    async updateGuestPlayer(guestId: string, data: { tableId: string | null; seat: SEAT | null }): Promise<Player> {
        return (await this.#callApi({ url: `/players/as-guest/${guestId}`, method: 'patch', data })) as Player;
    }

    async updatePlayer(playerId: string, data: { tableId: string | null; seat: SEAT | null }): Promise<Player> {
        return (await this.#callApi({ url: `/players/${playerId}`, method: 'patch', data })) as Player;
    }
}

type AuthenticateResponse = {
    token: string;
};

type GetTokenResponse = {
    token: string;
};
