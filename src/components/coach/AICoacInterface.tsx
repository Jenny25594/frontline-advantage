'use client';

import { useState } from 'react';

const sampleConversation = [
  {
    role: 'assistant',
    content: 'Hi Sarah! I\'m your AI Coach. I can help you with learning guidance, skill development, career planning, and on-the-job coaching. What would you like to work on today?',
  },
  {
    role: 'user',
    content: 'I\'m struggling with difficult customer conversations. How can I improve?',
  },
  {
    role: 'assistant',
    content: 'Great question! Here are the key techniques for difficult conversations:\n\n1. **Listen first** - Understand the customer\'s perspective before responding\n2. **Stay calm** - Keep your emotions in check\n3. **Acknowledge feelings** - Show empathy\n4. **Offer solutions** - Be proactive\n\nWould you like me to create a practice scenario or a 90-day coaching plan?',
  },
];

export function AICoacInterface() {
  const [messages, setMessages] = useState(sampleConversation);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      setMessages([
        ...messages,
        { role: 'user', content: input },
        {
          role: 'assistant',
          content: 'That\'s a great question! Based on your role and experience level, I recommend focusing on active listening techniques first. Would you like a personalized coaching plan?',
        },
      ]);
      setInput('');
    }
  };

  return (
    <div className="flex h-full flex-col bg-neutral-50">
      {/* Header */}
      <div className="border-b border-neutral-200 bg-white px-6 py-4">
        <h1 className="text-2xl font-bold text-neutral-900">AI Coach</h1>
        <p className="mt-1 text-sm text-neutral-600">Ask me anything about your skills, career, or work challenges</p>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-auto p-6 space-y-4">
        {messages.map((message, idx) => (
          <div
            key={idx}
            className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-md rounded-2xl px-4 py-3 ${
                message.role === 'user'
                  ? 'bg-primary-base text-white'
                  : 'border border-neutral-200 bg-white text-neutral-900'
              }`}
            >
              <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="border-t border-neutral-200 bg-white px-6 py-4">
        <div className="flex gap-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask your AI Coach anything..."
            className="input-base flex-1 bg-neutral-50"
          />
          <button
            onClick={handleSend}
            className="btn-primary px-6"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
