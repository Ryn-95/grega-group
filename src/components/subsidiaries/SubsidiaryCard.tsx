import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Subsidiary } from '../../types';
import { Card } from '../common';
import './SubsidiaryCard.css';

interface SubsidiaryCardProps {
  subsidiary: Subsidiary;
}

export const SubsidiaryCard: React.FC<SubsidiaryCardProps> = ({ subsidiary }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/subsidiary/${subsidiary.id}`);
  };

  return (
    <Card hoverable onClick={handleClick} className="subsidiary-card">
      <div className="subsidiary-card-header" style={{ borderLeftColor: subsidiary.color }}>
        <div className="subsidiary-logo" style={{ backgroundColor: `${subsidiary.color}20` }}>
          <span style={{ fontSize: '3rem' }}>{subsidiary.logo}</span>
        </div>
        <div className="subsidiary-info">
          <h3 className="subsidiary-name">{subsidiary.name}</h3>
          <p className="subsidiary-sector">{subsidiary.sector}</p>
        </div>
      </div>
      <p className="subsidiary-slogan" style={{ color: subsidiary.color }}>
        {subsidiary.slogan}
      </p>
      <p className="subsidiary-description">{subsidiary.description}</p>
      <button 
        className="subsidiary-link" 
        style={{ color: subsidiary.color }}
      >
        En savoir plus →
      </button>
    </Card>
  );
};



