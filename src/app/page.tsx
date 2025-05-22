"use client";

import styles from "./page.module.css";
import { postOpenAiCall } from "@/utils/openAiCalls";
import { useState } from "react";
import { useChat } from "ai/react";
import { UIMessage } from "ai";

export default function Home() {
  const [output, setOutput] = useState("");
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <form onSubmit={handleSubmit}>
          <input
            className="fixed dark:bg-zinc-900 bottom-0 w-full max-w-md p-2 mb-8 border border-zinc-300 dark:border-zinc-800 rounded shadow-xl"
            value={input}
            placeholder="Say something..."
            onChange={handleInputChange}
          />
        </form>
        {messages &&
          messages.map((message) => {
            const { role } = message;
            if (role === "assistant") {
              return <AssistantResponse message={message} />;
            }
            return <UserResponse message={message} />;
          })}
      </main>
    </div>
  );
}

const UserResponse = ({ message }) => {
  const { content } = message;
  return (
    <div style={{ flexDirection: "column" }}>
      <div>User:</div>
      <div>{content}</div>
    </div>
  );
};

const AssistantResponse = ({ message }: { message: UIMessage }) => {
  const { content } = message;
  return (
    <div style={{ flexDirection: "column" }}>
      <div>Assistant:</div>
      <div>{content}</div>
    </div>
  );
};
