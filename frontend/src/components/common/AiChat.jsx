import React, { useState } from 'react';

const AiChat = () => {
    const [messages, setMessages] = useState([
        { text: "Hello! How can I assist you today?", isAi: true, time: "10:30 AM" },
        { text: "I need help with my project", isAi: false, time: "10:31 AM" },
        { text: "I'd be happy to help! Could you please provide more details about your project?", isAi: true, time: "10:31 AM" }
    ]);
    const [inputMessage, setInputMessage] = useState('');

    return (
        <div className="fixed bottom-4 right-4 w-80 bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Header */}
            <div className="flex items-center gap-2 p-4 border-b border-gray-200">
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                </div>
                <div>
                    <h3 className="font-medium text-sm">AI Assistant</h3>
                    <p className="text-xs text-green-600">Online</p>
                </div>
            </div>

            {/* Messages */}
            <div className="h-96 overflow-y-auto p-4 space-y-4">
                {messages.map((message, index) => (
                    <div key={index} className={`flex ${message.isAi ? 'justify-start' : 'justify-end'}`}>
                        <div className={`max-w-[80%] ${message.isAi ? 'bg-blue-600 text-white' : 'bg-gray-100'} rounded-lg px-4 py-2`}>
                            <p className="text-sm">{message.text}</p>
                            <span className="text-xs opacity-75 mt-1 block">{message.time}</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-gray-200">
                <div className="relative">
                    <input
                        type="text"
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                        placeholder="Type your message..."
                        className="w-full pl-4 pr-12 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:border-blue-500"
                    />
                    <button 
                        className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-blue-600 text-white rounded-full"
                    >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AiChat; 