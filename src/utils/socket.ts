import { io } from 'socket.io-client';

// "undefined" means the URL will be computed from the `window.location` object
const URL = process.env.NODE_ENV === 'production' ? 'https://proud-hare-52.deno.dev/' : 'http://localhost:3000';
// const URL = process.env.NODE_ENV === 'production' ? 'my-production-URL' : 'https://proud-hare-52.deno.dev/';

export const socket = io(URL);