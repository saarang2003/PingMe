import React, { useEffect } from 'react';
import { io } from 'socket.io-client';

const socket = io("http://localhost:3000"); // Make sure this matches your backend

function App() {
  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected:", socket.id);
    });

    socket.on("disconnect", () => {
      console.log("Disconnected");
    });

    return () => {
      socket.off("connect");
      socket.off("disconnect");
    };
  }, []);

  return <div>App</div>;
}

export default App;
