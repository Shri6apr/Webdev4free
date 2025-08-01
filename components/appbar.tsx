"use client";

import Link from "next/link";
import { useState } from "react";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";


interface Message {
  role: 'user' | 'assistant';
  content: string;
  sourcePages?: number[];
  sources?: { page: number; content: string; }[];
  timestamp?: Date;
  _id?: string;
}

export default function Appbar() {
  const [showChat, setShowChat] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);

  const handleAIAssistClick = () => {
    setShowChat(true); // Open Chat
  };

  const handleChatSubmit = async (content: string) => {
    // Add user message
    const userMessage: Message = {
      role: 'user',
      content,
      timestamp: new Date(),
      _id: `user-${Date.now()}`
    };
    
    setMessages(prev => [...prev, userMessage]);
    setLoading(true);

    try {
      // TODO: Replace this with your actual API call
      // Example API call structure:
      // const response = await fetch('/api/chat', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ message: content, messages })
      // });
      // const data = await response.json();
      
      // Mock response for now - replace with actual API
      setTimeout(() => {
        const assistantMessage: Message = {
          role: 'assistant',
          content: `I received your message: "${content}". This is a placeholder response. Please implement your actual chat API.`,
          timestamp: new Date(),
          _id: `assistant-${Date.now()}`
        };
        
        setMessages(prev => [...prev, assistantMessage]);
        setLoading(false);
      }, 1000);
      
    } catch (error) {
      console.error('Chat error:', error);
      setLoading(false);
    }
  };

  return (
    <>
      <header className="sticky top-0 bg-white flex h-16 items-center justify-end border-b px-4 lg:px-6 z-50">
        <Link
          href="https://quiz-roadmap-maker.vercel.app/"
          className="h-10 flex items-center px-4 py-2 mr-2 rounded bg-gray-100 hover:bg-gray-200 transition-colors"
        >
          AI Assist
        </Link>

        <div className="flex items-center gap-4">
          <span>
            <SignedOut>   
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </span>
        </div>
      </header>

      {/* Chat Modal/Overlay */}
      {showChat && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="w-full max-w-4xl h-[80vh] bg-white rounded-lg shadow-2xl relative">
            {/* Close button */}
            <button
              type="button"
              title="Close chat"
              aria-label="Close chat"
              onClick={() => setShowChat(false)}
              className="absolute top-4 right-4 z-10 p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* ChatInterface */}
            
          </div>
        </div>
      )}
    </>
  );
}