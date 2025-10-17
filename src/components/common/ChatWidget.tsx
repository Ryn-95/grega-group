import React, { useState, useRef, useEffect } from 'react';
import './ChatWidget.css';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface ChatWidgetProps {
  primaryColor?: string;
}

export const ChatWidget: React.FC<ChatWidgetProps> = ({ 
  primaryColor = '#8B7355' 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Bonjour ! 👋 Comment puis-je vous aider aujourd\'hui ?',
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSend = () => {
    if (inputValue.trim() === '') return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      const botResponse = getBotResponse(inputValue.toLowerCase());
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const getBotResponse = (userInput: string): string => {
    // Simple keyword-based responses
    if (userInput.includes('bonjour') || userInput.includes('salut')) {
      return 'Bonjour ! Je suis ravi de vous aider. Que puis-je faire pour vous ?';
    }
    if (userInput.includes('prix') || userInput.includes('tarif') || userInput.includes('coût')) {
      return 'Nos tarifs varient selon vos besoins spécifiques. Je vous invite à remplir notre formulaire de contact ou à nous appeler au +33 1 XX XX XX XX pour un devis personnalisé.';
    }
    if (userInput.includes('contact') || userInput.includes('rendez-vous')) {
      return 'Pour prendre rendez-vous, vous pouvez nous contacter au +33 1 XX XX XX XX ou via notre formulaire de contact. Nous sommes disponibles du lundi au samedi.';
    }
    if (userInput.includes('cabinet') || userInput.includes('filiale')) {
      return 'Grega Group regroupe 4 cabinets spécialisés : Stellar Invest, Grega Finance, Grega Immo et Grega Conseil. Quel domaine vous intéresse ?';
    }
    if (userInput.includes('patrimoine') || userInput.includes('gestion')) {
      return 'Nous offrons des services complets de gestion de patrimoine : investissement, optimisation fiscale, retraite, transmission patrimoniale. Souhaitez-vous en savoir plus sur un domaine particulier ?';
    }
    if (userInput.includes('merci')) {
      return 'Je vous en prie ! N\'hésitez pas si vous avez d\'autres questions. 😊';
    }
    
    return 'Merci pour votre message. Pour une réponse personnalisée à votre demande, je vous invite à contacter notre équipe au +33 1 XX XX XX XX ou via notre formulaire de contact.';
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const quickReplies = [
    'Prendre rendez-vous',
    'Nos services',
    'Nos tarifs',
    'Nous contacter',
  ];

  const handleQuickReply = (reply: string) => {
    setInputValue(reply);
    handleSend();
  };

  return (
    <>
      {/* Chat Button */}
      <button
        className={`chat-widget-button ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Fermer le chat' : 'Ouvrir le chat'}
        style={{ backgroundColor: primaryColor }}
      >
        {isOpen ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M18 6L6 18M6 6l12 12" strokeWidth="2" strokeLinecap="round" />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" strokeWidth="2" strokeLinecap="round" />
          </svg>
        )}
        {!isOpen && <span className="chat-notification-badge">1</span>}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="chat-widget-window" role="dialog" aria-label="Chat en direct">
          {/* Header */}
          <div className="chat-widget-header" style={{ backgroundColor: primaryColor }}>
            <div className="chat-widget-header-info">
              <div className="chat-widget-avatar">GG</div>
              <div>
                <h3>Grega Group</h3>
                <p className="chat-widget-status">
                  <span className="status-indicator"></span>
                  En ligne
                </p>
              </div>
            </div>
            <button
              className="chat-widget-close"
              onClick={() => setIsOpen(false)}
              aria-label="Fermer le chat"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M18 6L6 18M6 6l12 12" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="chat-widget-messages">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`chat-message ${message.sender}`}
              >
                {message.sender === 'bot' && (
                  <div className="message-avatar">GG</div>
                )}
                <div className="message-content">
                  <p>{message.text}</p>
                  <span className="message-time">
                    {message.timestamp.toLocaleTimeString('fr-FR', {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </span>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="chat-message bot">
                <div className="message-avatar">GG</div>
                <div className="message-content typing">
                  <div className="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Replies */}
          {messages.length <= 2 && (
            <div className="chat-quick-replies">
              {quickReplies.map((reply, index) => (
                <button
                  key={index}
                  className="quick-reply-button"
                  onClick={() => handleQuickReply(reply)}
                >
                  {reply}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div className="chat-widget-input">
            <input
              ref={inputRef}
              type="text"
              placeholder="Écrivez votre message..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              aria-label="Message"
            />
            <button
              onClick={handleSend}
              disabled={inputValue.trim() === ''}
              aria-label="Envoyer le message"
              style={{
                backgroundColor: inputValue.trim() ? primaryColor : undefined,
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

