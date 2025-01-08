import { get, post } from "./api";

const authPaths = {
    'register': '/users/register'
}
export async function register({ email, username, password }) {
    return await post(authPaths.register, { email, username, password })
}