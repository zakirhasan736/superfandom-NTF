import { API_BASE_URL } from './constants';

const apiVersion = 'v2';
const apiBaseUrl = API_BASE_URL + '/' + apiVersion;

export async function get(endpoint: string) {
    const apiRes = await fetch(apiBaseUrl + endpoint);
    const result = await apiRes.json();
    return result;
}

export async function post(endpoint: string, data: any) {
    const apiRes = await fetch(apiBaseUrl + endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    const result = await apiRes.json();
    return result;
}

export const ApiClient = {
    get,
    post,
};
