import { useEffect, useState } from "react";
import "./App.css";
import { io, Socket } from "socket.io-client";
import Chatbox from "./components/Chatbox";
import { ClientToServerEvents, ServerToClientEvents } from "./types/socket";

function App() {
    const [newMessage, setNewMessage] = useState<string>("");
    const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io(
        "http://localhost:3000",
        {
            withCredentials: true,
            extraHeaders: {
                "my-custom-header": "abcd",
            },
        }
    );
    useEffect(() => {
        if (!socket) return;
        socket.on("connect", () => {
            console.log("connected");
        });
    }, [socket]);

    useEffect(() => {
        if (!socket) return;
        socket.on("msg-from-server", (data) => {
            console.log(data);
        });
    }, [socket]);

    const handleSubmit = (e) => {
        e.preventDefault();
        socket.emit("chat-message", newMessage);
    };

    return (
        <div>
            {/* <h1 className='text-3xl font-bold underline'>Hello world!</h1> */}
            {/* <Chatbox socket={socket} /> */}
            <footer className='bg-white border-t border-gray-300 p-4 absolute bottom-0 w-3/4'>
                <div className='flex items-center'>
                    <input
                        type='text'
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        placeholder='Type a message...'
                        className='w-full p-2 rounded-md border border-gray-400 focus:outline-none focus:border-blue-500'
                    />
                    <button
                        type='submit'
                        onClick={(e) => handleSubmit(e)}
                        className='bg-indigo-500 text-white px-4 py-2 rounded-md ml-2'>
                        Send
                    </button>
                </div>
            </footer>
        </div>
    );
}

export default App;
