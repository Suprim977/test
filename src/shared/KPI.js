// src/shared/KPI.js
import React from 'react';
import HighlightCard from './HighlightCard';
import {
  Users, Play, SkipForward, Target, Music, Clock
} from 'lucide-react';

const KPI = () => {
  const kpiData = [
    { title: 'TOTAL LISTENERS', value: '15,000', change: '+3.2% vs 2024', icon: Users },
    { title: 'AVG DAILY PLAYS', value: '16.7', change: 'Per day avg', icon: Play },
    { title: 'COMPLETION RATE', value: '63.0%', change: '-1.2% vs 2024', icon: SkipForward },
    { title: 'PREMIUM USERS', value: '7,500', change: '50% of total', icon: Target },
    { title: 'TOP GENRE', value: 'Bollywood', change: '8.9% share', icon: Music },
    { title: 'PEAK HOUR', value: '19:00', change: 'Highest activity', icon: Clock }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {kpiData.map((item) => (
        <HighlightCard
          key={item.title}
          title={item.title}
          value={item.value}
          description={item.change}
          icon={item.icon}
          color="text-blue-400"
        />
      ))}
    </div>
  );
};

export default KPI;