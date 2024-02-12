import { io } from "socket.io-client";
const URL = import.meta.env.PROD ? "https://empty-owl-26-m12j9rvk66cj.deno.dev" : "http://localhost:3000";

console.log("URL", URL);
console.log("import.meta.env", import.meta.env);

export const socket = io(URL, {auth: {
    serveroffset: 0,
}});
