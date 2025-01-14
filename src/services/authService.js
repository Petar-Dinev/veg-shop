import { get, post } from "./api";

const authPaths = {
    register: '/users/register',
    login: '/users/login',
    logout: '/users/logout'
}
export async function register({ email, username, password }) {
    return await post(authPaths.register, { email, username, password })
}

export async function login({ email, password }) {
    return await post(authPaths.login, { email, password })
}

export async function logout() {
    await get(authPaths.logout)
}