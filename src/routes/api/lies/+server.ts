import type { RequestHandler } from '@sveltejs/kit';
import { env } from "$env/dynamic/private";

//import { env } from "$env/dynamic/private";

export const POST: RequestHandler = async (request) => {

    const { value } = await request.request.json();

    console.log("value", value);
    const response = await fetch("https://cloud-vector.purplelemons.dev/query", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer: " + env.CLOUD_VECTOR_API_KEY,
        },
        body: JSON.stringify({
            value
        }),
    });
    const responseBody = await response.text();
    console.log("response body", responseBody);
    return Response.json({
        lie: responseBody
    });
}
