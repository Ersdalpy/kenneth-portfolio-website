// src/app/chatbotButton.tsx
"use client";

import React from "react";

export default function ChatbotButton() {
  const handleClick = () => {
    alert("AI Chatbot coming soon!");
    // Here you'd open your chatbot widget or modal
  };

  return (
    <button
      onClick={handleClick}
      className="chatbot-button bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-700"
    >
      AI Chat
    </button>
  );
}
