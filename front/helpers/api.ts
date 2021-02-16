import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { GENDER, SEAT } from '../domains/constants';
import { Guest, Player, Staff, Table } from '../domains/models';

export class ApiClient {
    #token: string | null = null;
    #client: AxiosInstance = axios.create({
        baseURL: '/api',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    #callApi = async (config: AxiosRequestConfig, auth = true): Promise<unknown> => {
        if (auth) {
            if (!config.headers) {
                config.headers = {};
            }
            config.headers['Authorization'] = `Bearer ${this.#token}`;
        }
        return this.#client(config).then((res) => res.data);
    };

    async isAuthenticated(): Promise<boolean> {
        if (this.#token) return true;

        return this.getToken()
            .then((data) => {
                const { token } = data as GetTokenResponse;
                this.#token = token;
                return true;
            })
            .catch((err) => {
                if (err.response && err.response.status === 401) {
                    return false;
                }

                throw err;
            });
    }

    async authenticate(loginId: string, password: string): Promise<void> {
        await this.#callApi(
            {
                url: '/authenticate',
                method: 'post',
                data: { loginId, password },
            },
            false
        ).then((data) => {
            const { token } = data as AuthenticateResponse;
            this.#token = token;
        });
    }

    async getToken(): Promise<GetTokenResponse> {
        return (await this.#callApi(
            {
                url: '/token',
            },
            false
        )) as GetTokenResponse;
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
        console.log('updateGuestPlayer');
        return (await this.#callApi({ url: `/players/as-guest/${guestId}`, method: 'patch', data })) as Player;
    }

    async updateStaffPlayer(staffId: string, data: { tableId: string | null; seat: SEAT | null }): Promise<Player> {
        console.log('updateStaffPlayer');
        return (await this.#callApi({ url: `/players/as-staff/${staffId}`, method: 'patch', data })) as Player;
    }

    async updatePlayer(playerId: string, data: { tableId: string | null; seat: SEAT | null }): Promise<Player> {
        return (await this.#callApi({ url: `/players/${playerId}`, method: 'patch', data })) as Player;
    }

    async getStaffs(params: { working?: boolean; playing?: boolean }): Promise<Staff[]> {
        return (await this.#callApi({ url: `/staffs`, params })) as Staff[];
    }

    async createStaff(data: {
        loginId: string;
        password: string;
        lastName: string;
        firstName: string;
        gender: GENDER;
    }): Promise<Staff> {
        return (await this.#callApi({ url: `/staffs`, method: 'post', data })) as Staff;
    }

    async addWorkingStaff(staffId: string): Promise<void> {
        return (await this.#callApi({ url: `/working-staffs`, method: 'post', data: { staffId } })) as void;
    }

    async removeWorkingStaff(staffId: string): Promise<void> {
        return (await this.#callApi({ url: `/working-staffs/${staffId}`, method: 'delete' })) as void;
    }
}

type AuthenticateResponse = {
    token: string;
};

type GetTokenResponse = {
    token: string;
};
