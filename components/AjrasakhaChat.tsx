
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Mic, Volume2 } from 'lucide-react';
import { askAjrasakha } from '../services/geminiService';

interface Message {
  role: 'user' | 'bot';
  text: string;
}

const AjrasakhaChat: React.FC<{ currentPage: string }> = ({ currentPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', text: `Namaste! I am Ajrasakha. How can I help you today on the ${currentPage} page?` }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setLoading(true);

    const response = await askAjrasakha(userMsg, `User is currently on ${currentPage} page.`);
    setMessages(prev => [...prev, { role: 'bot', text: response }]);
    setLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999]">
      {isOpen ? (
        <div className="w-80 md:w-96 h-[500px] bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
          <div className="bg-green-700 text-white p-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="bg-white/20 p-2 rounded-full">
                <MessageSquare size={18} />
              </div>
              <div>
                <h3 className="font-semibold text-sm">Ask Ajrasakha</h3>
                <p className="text-[10px] opacity-80">AI Agri Assistant</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-1 rounded">
              <X size={20} />
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 p-4 overflow-y-auto space-y-4 bg-slate-50">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                  m.role === 'user' 
                    ? 'bg-green-600 text-white rounded-br-none' 
                    : 'bg-white border border-slate-200 text-slate-800 rounded-bl-none shadow-sm'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white border border-slate-200 p-3 rounded-2xl rounded-bl-none animate-pulse text-xs text-slate-400">
                  Ajrasakha is thinking...
                </div>
              </div>
            )}
          </div>

          <div className="p-3 border-t bg-white">
            <div className="flex items-center gap-2 bg-slate-100 p-2 rounded-xl">
              <input
                className="flex-1 bg-transparent border-none focus:outline-none text-sm px-2"
                placeholder="Ask about prices, trends..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              />
              <button className="p-1.5 text-slate-500 hover:text-green-600">
                <Mic size={18} />
              </button>
              <button 
                onClick={handleSend}
                disabled={loading}
                className="p-1.5 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-green-700 text-white p-4 rounded-full shadow-lg hover:bg-green-800 hover:scale-110 transition-all duration-300 group flex items-center gap-3"
        >
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap font-medium text-sm">
            Talk to Ajrasakha
          </span>
          <MessageSquare size={24} />
        </button>
      )}
    </div>
  );
};

export default AjrasakhaChat;
