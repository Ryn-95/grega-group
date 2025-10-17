import React, { useState } from 'react';
import './FAQ.css';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

interface FAQProps {
  items: FAQItem[];
  className?: string;
  showCategories?: boolean;
}

export const FAQ: React.FC<FAQProps> = ({
  items,
  className = '',
  showCategories = false
}) => {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = showCategories 
    ? Array.from(new Set(items.map(item => item.category).filter(Boolean)))
    : [];

  const filteredItems = selectedCategory === 'all' 
    ? items 
    : items.filter(item => item.category === selectedCategory);

  const toggleItem = (id: string) => {
    setOpenItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const toggleAll = () => {
    if (openItems.size === filteredItems.length) {
      setOpenItems(new Set());
    } else {
      setOpenItems(new Set(filteredItems.map(item => item.id)));
    }
  };

  return (
    <div className={`faq ${className}`}>
      <div className="faq-header">
        <h2>Questions fréquentes</h2>
        {filteredItems.length > 1 && (
          <button 
            className="faq-toggle-all"
            onClick={toggleAll}
          >
            {openItems.size === filteredItems.length ? 'Tout fermer' : 'Tout ouvrir'}
          </button>
        )}
      </div>

      {showCategories && categories.length > 0 && (
        <div className="faq-categories">
          <button
            className={`category-filter ${selectedCategory === 'all' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('all')}
          >
            Toutes les questions
          </button>
          {categories.map(category => (
            <button
              key={category}
              className={`category-filter ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category!)}
            >
              {category}
            </button>
          ))}
        </div>
      )}

      <div className="faq-list">
        {filteredItems.map((item, index) => {
          const isOpen = openItems.has(item.id);
          
          return (
            <div
              key={item.id}
              className={`faq-item ${isOpen ? 'open' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <button
                className="faq-question"
                onClick={() => toggleItem(item.id)}
                aria-expanded={isOpen}
              >
                <span className="question-text">{item.question}</span>
                <span className="question-icon">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`icon ${isOpen ? 'rotated' : ''}`}
                  >
                    <path
                      d="M6 9L12 15L18 9"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>
              
              <div className={`faq-answer ${isOpen ? 'open' : ''}`}>
                <div className="answer-content">
                  <p>{item.answer}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {filteredItems.length === 0 && (
        <div className="faq-empty">
          <div className="empty-icon">❓</div>
          <div className="empty-text">Aucune question trouvée</div>
        </div>
      )}
    </div>
  );
};

