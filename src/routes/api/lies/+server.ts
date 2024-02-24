import type { RequestHandler } from '@sveltejs/kit';


export const POST: RequestHandler = async (request) => {
    return new Response(`Hello, world!\n${await request.request.text()}`, {
        headers: {
            'content-type': 'text/plain'
        }
    });
}
