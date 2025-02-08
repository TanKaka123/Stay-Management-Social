"use client";
import {
  ChatConversation,
  ConversationList,
  CURRENT_USER_ID,
  MessageConversation,
  MOCK_MESSSAGE_CONVERSATION,
} from "@/components/ChattingMessage";
import { useEffect, useState } from "react";

export default function MessagesPage() {
  const [messages, setMessages] = useState<MessageConversation[]>(
    MOCK_MESSSAGE_CONVERSATION
  );
  const [inputMessage, setInputMessage] = useState("");

  const onSendMessage = () => {
    if (!inputMessage.trim()) return;

    const newMessage: MessageConversation = {
      type: "message",
      message: inputMessage,
      createdAt: "11:09 AM",
      author: {
        id: CURRENT_USER_ID,
        name: "Nguyen Hong Tan",
      },
    };

    setMessages((prev) => [...prev, newMessage]);
    setInputMessage("");
  };

  return (
    // <!-- component -->
    <div className="mx-10">
      <div className=" h-[91vh]">
        <div className="flex h-full">
          <ConversationList />
          <ChatConversation
            messages={messages}
            onSendMessage={onSendMessage}
            inputMessage={inputMessage}
            setInputMessage={setInputMessage}
          />
        </div>
      </div>
    </div>
  );
}
