import api from './api';


export async function getUser(username: string) {
    const response = await api.get(`users/${username}`);
    return response;
};

export async function getRepository(username: string) {
    const response = await api.get(`users/${username}/repos`);
    return response;
};