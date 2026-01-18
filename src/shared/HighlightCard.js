// src/shared/HighlightCard.js
import React from 'react';

const HighlightCard = ({ title, value, description, icon: IconComponent, color }) => {
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-slate-600 transition-all duration-300">
      <div className="flex items-center justify-between mb-4">
        <IconComponent className={`w-8 h-8 ${color}`} />
        <span className="text-xs font-medium text-slate-400">{description}</span>
      </div>
      <h3 className="text-slate-400 text-sm font-medium mb-1">{title}</h3>
      <p className="text-white text-2xl font-bold">{value}</p>
    </div>
  );
};

export default HighlightCard;