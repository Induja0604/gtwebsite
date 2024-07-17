import React, { useState } from 'react';
import "./Aihelpdesk.css"
const Aihelpdesk = () => {
  const [messages, setMessages] = useState([
    { "isUser": false, "text": "Hello! How can I assist you today?" },
    { "isUser": true, "text": "Can you tell me more about the web development course?" },
    { "isUser": false, "text": "Our web development course covers HTML, CSS, JavaScript, and popular frameworks like React and Angular. It's designed to take you from beginner to advanced level." },
    { "isUser": true, "text": "Thank you for the information!" }
]
  );
  const [inputValue, setInputValue] = useState('');
  const [showHelpDesk, setShowHelpDesk] = useState(true);
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const botResponse = `I'm sorry, I don't have any information about "${inputValue}". How else can I assist you today?`;

    setMessages((prevMessages) => [...prevMessages, { isUser: true, text: inputValue }, { isUser: false, text: botResponse }]);
    setInputValue('');
  };
  
  const closeHelpDesk = () => {
    setShowHelpDesk(false);
  };

  return (
    showHelpDesk && (<div className="ai-help-desk">
        <div className="aiheader">
         <h3>AI Help Desk</h3>
         <button className="aiclose-btn" onClick={closeHelpDesk}>
           &times;
         </button>
         </div>
     <div className="chat-window">
       {messages.map((message, index) => (
         <div key={index} className={`message ${message.isUser ? 'user' : 'bot'}`}>
           {message.text}
         </div>
       ))}
     </div>
     <form className="aiinput-container" onSubmit={handleSubmit}>
       <input
         type="text"
         value={inputValue}
         onChange={handleInputChange}
         placeholder="Ask me anything..."
       />
       <button type="submit">Send</button>
     </form>
   </div>)
   
  );
};

export default Aihelpdesk;
