import React, { useState } from "react";
import "./App.css";
import Lobby from "./components/Lobby";
import Chat from "./components/Chat";
import {
  HubConnection,
  HubConnectionBuilder,
  LogLevel,
} from "@microsoft/signalr";

function App() {
  const [connection, setConnection] = useState<HubConnection | undefined>(
    undefined
  );
  const [messages, setMessages] = useState<IMessageObject[]>([]);
  const [userList, setUserList] = useState<string[]>([]);

  const joinRoom = async (user: string, room: string) => {
    const connection = new HubConnectionBuilder()
      .withUrl("https://localhost:7271/chat")
      .configureLogging(LogLevel.Information)
      .build();

    connection.on("ReceiveMessage", (user, message) => {
      setMessages((messages) => [...messages, { user, message }]);
    });

    connection.on("UsersInRoom", (users) => {
      setUserList(users);
    });

    connection.onclose((e) => {
      setConnection(undefined);
      setMessages([]);
      setUserList([]);
    });

    await connection.start();

    await connection.invoke("JoinRoom", { user, room });

    localStorage.setItem("user", user);

    setConnection(connection);
  };

  const closeConnection = async () => {
    try {
      await connection?.stop();
    } catch (e) {
      console.log(e);
    }
  };

  const sendMessage = async (message: string) => {
    try {
      await connection?.invoke("SendMessage", message);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      {!connection ? (
        <Lobby joinRoom={joinRoom} />
      ) : (
        <Chat
          messageObjects={messages}
          sendMessage={sendMessage}
          closeConnection={closeConnection}
          userList={userList}
        />
      )}
    </div>
  );
}

export default App;
