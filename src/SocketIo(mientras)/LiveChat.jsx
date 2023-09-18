import { io } from "socket.io-client"; 
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

  const socket = io("http://localhost:4322");
//const socket = io("https://backend-pf-production-ba15.up.railway.app");

export default function LiveChat() {
  const [msg, setMsg] = useState("");
  const [msgs, setMsgs] = useState([]);

  const user = useSelector((state) => state.UserData);
  const username = user.username ? user.username : "guest";

  const handlerSubmit = (event) => {
    event.preventDefault();
    const newMessage = {
      body: msg,
      from: "Me",
    };
    const newMessage2 = {
      body: msg,
      from: username,
    };
    setMsgs([...msgs, newMessage]);
    socket.emit("NewMessage", newMessage2);
  };

  useEffect(() => {
    socket.emit("userConnected");
    socket.on("chats", (chats) => {
      const mensajes = chats.map((element) => ({
        from: element.username,
        body: element.data,
      }));
      setMsgs([...msgs, ...mensajes]);
    });
    socket.on("message", (message) => {
      console.info(message);
      setMsgs((prevMsgs) => [...prevMsgs, message]);
    });
    return () => {
      socket.off("chats");
      socket.off("message");
    };
  }, []);

  return (
    <div className="w-96 h-screen bg-black text-white p-4">
      <div className="h-4/5 overflow-y-auto">
        <ul>
          {msgs && msgs.map((element, i) => (
            <li key={i} className="mb-2">
              <span className="font-bold">{element?.from}: </span>
              {element?.body}
            </li>
          ))}
        </ul>
      </div>
      <form onSubmit={handlerSubmit} className="mt-4">
        <input
          type="text"
          placeholder="Write your message ..."
          value={msg}
          onChange={(event) => setMsg(event.target.value)}
          className="w-full bg-gray-800 text-white p-2 rounded"
        />
        <button
          type="submit"
          className="mt-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Send
        </button>
      </form>
    </div>
  );
}
