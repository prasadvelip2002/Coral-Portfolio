"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Bot, User, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Message = {
  id: string;
  role: "bot" | "user";
  content: string;
};

const initialMessages: Message[] = [
  {
    id: "1",
    role: "bot",
    content: "Hi there! 👋 I'm Coral, your virtual assistant. How can I help you today?",
  },
];

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping]);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim()) return;

    const userMsg: Message = { id: Date.now().toString(), role: "user", content: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    // Simulate AI response delay
    setTimeout(() => {
      const lowerInput = userMsg.content.toLowerCase();
      let botResponse = "Thank you for your message! Our team will get back to you shortly. Feel free to use the contact form for detailed inquiries.";
      
      if (lowerInput.includes("sap")) {
        botResponse = "We have extensive 4+ years of expertise in SAP B1 implementations! Would you like to schedule a consultation with our Founder?";
      } else if (lowerInput.includes("service") || lowerInput.includes("what do you do")) {
        botResponse = "We offer Custom Software Development, Cloud Infrastructure, AI & Machine Learning, Cyber Security, and SAP B1 Enterprise solutions.";
      } else if (lowerInput.includes("contact") || lowerInput.includes("email")) {
        botResponse = "You can reach us at hello@coralcloud.com or by filling out the contact form at the bottom of the page.";
      } else if (lowerInput.includes("hello") || lowerInput.includes("hi")) {
        botResponse = "Hello! How can I assist you with your digital transformation journey today?";
      }

      setMessages((prev) => [...prev, { id: (Date.now() + 1).toString(), role: "bot", content: botResponse }]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <>
      {/* Floating Action Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed bottom-6 right-6 z-50"
          >
            <Button
              onClick={() => setIsOpen(true)}
              size="icon"
              className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white shadow-xl shadow-blue-500/25 transition-transform hover:scale-110"
            >
              <MessageSquare className="w-6 h-6" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 z-50 w-[350px] sm:w-[400px] h-[500px] max-h-[80vh] flex flex-col rounded-3xl overflow-hidden glass border border-border/50 shadow-2xl bg-background/95 backdrop-blur-xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold leading-tight">Coral AI</h3>
                  <p className="text-xs text-blue-100 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-green-400 inline-block"></span> Online
                  </p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20 rounded-full"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-5 flex flex-col gap-4 scrollbar-thin scrollbar-thumb-border">
              {messages.map((msg) => (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  key={msg.id}
                  className={cn(
                    "flex gap-3 max-w-[85%]",
                    msg.role === "user" ? "self-end flex-row-reverse" : "self-start"
                  )}
                >
                  <div className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-1",
                    msg.role === "user" ? "bg-blue-600" : "bg-muted"
                  )}>
                    {msg.role === "user" ? (
                      <User className="w-4 h-4 text-white" />
                    ) : (
                      <Bot className="w-4 h-4 text-foreground" />
                    )}
                  </div>
                  <div className={cn(
                    "px-4 py-3 rounded-2xl text-sm leading-relaxed",
                    msg.role === "user" 
                      ? "bg-blue-600 text-white rounded-tr-none" 
                      : "bg-muted text-foreground rounded-tl-none border border-border/50"
                  )}>
                    {msg.content}
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex gap-3 max-w-[85%] self-start"
                >
                  <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-1 bg-muted">
                    <Bot className="w-4 h-4 text-foreground" />
                  </div>
                  <div className="px-4 py-4 rounded-2xl bg-muted rounded-tl-none border border-border/50 flex items-center gap-1.5">
                    <motion.div className="w-1.5 h-1.5 bg-foreground/50 rounded-full" animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0 }} />
                    <motion.div className="w-1.5 h-1.5 bg-foreground/50 rounded-full" animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} />
                    <motion.div className="w-1.5 h-1.5 bg-foreground/50 rounded-full" animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} />
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-background border-t border-border/50">
              <form onSubmit={handleSend} className="flex items-center gap-2 relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 bg-muted px-4 py-3 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 pr-12 transition-all"
                />
                <Button 
                  type="submit"
                  size="icon"
                  disabled={!input.trim() || isTyping}
                  className="absolute right-1 w-9 h-9 rounded-full bg-blue-600 hover:bg-blue-700 text-white transition-colors"
                >
                  {isTyping ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                </Button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
