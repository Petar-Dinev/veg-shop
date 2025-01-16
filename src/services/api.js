const HOST = 'http://localhost:5000'

async function requester(method, url, data) {
    const options = {
        method,
        headers: {}
    };

    if (data != undefined) {
        options.headers['Content-type'] = 'Application/json';
        options.body = JSON.stringify(data);
    };

    try {
        const response = await fetch(HOST + url, options);

        if (response.status == 204) {
            return response;
        }

        const result = await response.json()

        if (response.ok == false) {
            throw new Error(result.message);
        }

        return result;

    } catch (err) {
        console.log('api-catch', err);
        throw err
    }

}

export const get = requester.bind(null, 'get')
export const post = requester.bind(null, 'POST')
export const put = requester.bind(null, 'put')
export const del = requester.bind(null, 'delete')