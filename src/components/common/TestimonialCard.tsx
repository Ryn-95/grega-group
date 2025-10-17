import React, { useState } from 'react';
import './TestimonialCard.css';

interface TestimonialCardProps {
  name: string;
  position: string;
  company: string;
  content: string;
  rating: number;
  avatar?: string;
  className?: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  position,
  company,
  content,
  rating,
  avatar,
  className = ''
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const renderStars = () => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={`star ${index < rating ? 'filled' : ''}`}
      >
        ★
      </span>
    ));
  };

  return (
    <div className={`testimonial-card ${className}`}>
      <div className="testimonial-header">
        <div className="testimonial-avatar">
          {avatar ? (
            <img src={avatar} alt={name} />
          ) : (
            <div className="avatar-placeholder">
              {name.charAt(0).toUpperCase()}
            </div>
          )}
        </div>
        <div className="testimonial-info">
          <h4 className="testimonial-name">{name}</h4>
          <p className="testimonial-position">{position}</p>
          <p className="testimonial-company">{company}</p>
        </div>
        <div className="testimonial-rating">
          {renderStars()}
        </div>
      </div>
      
      <div className="testimonial-content">
        <p className={`testimonial-text ${isExpanded ? 'expanded' : ''}`}
        >
          {content}
        </p>
        {content.length > 200 && (
          <button
            className="testimonial-toggle"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? 'Voir moins' : 'Lire plus'}
          </button>
        )}
      </div>
    </div>
  );
};

