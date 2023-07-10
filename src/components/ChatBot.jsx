import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { AiOutlineSend } from 'react-icons/ai';

const ChatBot = ({ darkMode, lightBG, darkBG }) => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleMessageSubmit = (e) => {
    e.preventDefault();

    if (input.trim() === '') return;

    const newMessage = {
      text: input,
      sender: 'user',
    };

    setMessages((prevMessages) => [...prevMessages, newMessage]);

    setInput('');

    let botReply;

    if (input.toLowerCase().includes('name')) {
      botReply = {
        text: 'My name is Ankita.',
        sender: 'bot',
      };
    } else if (input.toLowerCase().includes('age')) {
      botReply = {
        text: 'I am 20 years old',
        sender: 'bot',
      };
    } else if (input.toLowerCase().includes('location')) {
      botReply = {
        text: 'I live in India, West Bengal',
        sender: 'bot',
      };
    } else if (input.toLowerCase().includes('education')) {
        botReply = {
          text: 'I am currently pursuing a degree in Computer Science',
          sender: 'bot',
        };
      } else if (input.toLowerCase().includes('hobbies')) {
        botReply = {
          text: 'Some of my hobbies include painting, coding, and listening to music',
          sender: 'bot',
        };
      } else if (input.toLowerCase().includes('skills')) {
        botReply = {
          text: 'I have skills in programming languages like JavaScript,MongoDB and Java',
          sender: 'bot',
        };
      
    } else {
      botReply = {
        text: "I'm sorry, I cannot answer that question.",
        sender: 'bot',
      };
    }

    setMessages((prevMessages) => [...prevMessages, botReply]);
  };

  return (
    <div className="flex flex-row w-full">
      <div className="flex-grow p-4">
        <motion.div
          className="text-3xl font-bold mb-4 "
          style={{ color: darkBG }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          What do you want to know about me?
        </motion.div>

        <div className="overflow-y-auto h-full">
          {messages.map((message, index) => (
            <motion.div
              key={index}
              className={`flex mb-4 ${
                message.sender === 'user' ? 'justify-end' : 'justify-start'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div
                className={`rounded-lg p-2 ${
                  message.sender === 'user'
                    ? ` text-white`
                    : 'bg-gray-200 text-gray-800'
                }`}
                style={{backgroundColor : message.sender === 'user' ? darkBG : 'rgb(229 231 235)'  }}
              >
                {message.text}
              </div>
            </motion.div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>

      <form
        onSubmit={handleMessageSubmit}
        className={`fixed bottom-12 sm:bottom-4 pb-2 sm:pb-16 w-full sm:w-[92%] ${
          darkMode ? 'bg-slate-800' : 'bg-gray-100'
        }`}
      >
        <div
          className={`flex items-center border-t p-4`}
          style={{ borderColor: darkMode ? darkBG : '' }}
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-grow outline-none px-4 py-2 border border-gray-300 rounded-full mr-4"
            placeholder="Ask me anything..."
          />
          <button
            type="submit"
            className="flex items-center justify-center  text-white rounded-full p-2 hover:bg-blue-600"
            style={{backgroundColor : darkBG}}
          >
            <AiOutlineSend className="w-5 h-5" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChatBot;
