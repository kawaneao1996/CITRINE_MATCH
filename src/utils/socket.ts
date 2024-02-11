import { io } from "socket.io-client";

// "undefined" means the URL will be computed from the `window.location` object
// const URL = process.env.NODE_ENV === 'production' ? 'https://proud-hare-52.deno.dev/' : 'http://localhost:3000';
// const URL = process.env.NODE_ENV === 'production' ? 'my-production-URL' : 'https://proud-hare-52.deno.dev/';

// const URL = "https://proud-hare-52.deno.dev/";
const URL = "https://empty-owl-26-m12j9rvk66cj.deno.dev";

// const URL = "http://localhost:3000";
console.log("socket.ts");
console.log("URL", URL);
console.log("import.meta.env", import.meta.env);

export const socket = io(URL, {auth: {
    serveroffset: 0,
}});
