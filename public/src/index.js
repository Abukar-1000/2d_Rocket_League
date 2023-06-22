import { io } from "socket.io-client";
const socketPort = 3000

document.addEventListener("DOMContentLoaded", () => {
    const socket = io("http://localhost:3000/");
    console.log(socket)

    socket.on("connect", () => {
        alert(`id: ${socket.id}`);
    });
});


const socket = io("http://localhost:3000/");
console.log(socket)

socket.on("connect", () => {
    alert(`id: ${socket.id}`);
});