import { io } from "socket.io-client";

// "undefined" means the URL will be computed from the `window.location` object
const URL = process.env.NODE_ENV === 'production' ? 'https://proud-hare-52.deno.dev/' : 'http://localhost:3000';
console.log("URL", URL);
// const URL = process.env.NODE_ENV === 'production' ? 'my-production-URL' : 'https://proud-hare-52.deno.dev/';

// const URL = "https://proud-hare-52.deno.dev/";

// const URL = "http://localhost:3000";

export const socket = io(URL, {auth: {
    serveroffset: 0,
}});
