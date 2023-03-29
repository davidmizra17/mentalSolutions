import React, { useState, useEffect } from "react";
import {
  collection,
  addDoc,
  query,
  orderBy,
  limit,
  onSnapshot,
} from "firebase/firestore";
import { db, auth } from "../../firebase/config";
import styles from "./ChatPage.module.css";

const ChatPage = () => {
  const [messages, setMessages] = useState([]);

  const sendMessage = async (e) => {
    e.preventDefault();

    const message = e.target.elements.message.value.trim();

    if (message !== "") {
      await addDoc(collection(db, "messages"), {
        message,
        sender: auth.currentUser.uid,
        timestamp: new Date().getTime(),
      });

      e.target.elements.message.value = "";
    }
  };

  useEffect(() => {
    const q = query(
      collection(db, "messages"),
      orderBy("timestamp", "asc"),
      limit(25)
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const messages = [];
      snapshot.forEach((doc) => {
        messages.push({ id: doc.id, ...doc.data() });
      });
      setMessages(messages);
    });

    return unsubscribe;
  }, []);

  return (
    <div>
      <h1>ChatPage</h1>
      {/* Renderiza los mensajes aquí */}
      <form onSubmit={sendMessage}>
        <input type="text" name="message" placeholder="Escribe un mensaje" />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default ChatPage;
