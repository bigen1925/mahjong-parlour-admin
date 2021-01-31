export function api(path: string, init: RequestInit = {}): Promise<any> {
    const url = process.env.NEXT_PUBLIC_API_URL_BASE + path;
    return fetch(url, init).then((res) => res.json());
}
