// PrescriptiveTab.js
import React from 'react';
import {
  BarChart, Bar, LineChart, Line,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';
import {
  Lightbulb, Target, Award, RotateCcw
} from 'lucide-react';

const PrescriptiveTab = () => {
  // Mock data for prescriptive recommendations
  const recommendationCards = [
    {
      title: 'Boost K-Pop Playlists',
      description: 'Create curated K-Pop playlists targeting Premium users aged 18–24 to capture +18% growth.',
      icon: Lightbulb,
      color: 'text-blue-400',
      bg: 'bg-blue-500/10 border-blue-500/30'
    },
    {
      title: 'Re-engage Indie Listeners',
      description: 'Launch “Rediscover Indie” campaign with personalized push notifications and discounts.',
      icon: RotateCcw,
      color: 'text-orange-400',
      bg: 'bg-orange-500/10 border-orange-500/30'
    },
    {
      title: 'Monsoon Listening Bundle',
      description: 'Bundle offline downloads + mood-based playlists during monsoon peak (Jun–Sep).',
      icon: Target,
      color: 'text-green-400',
      bg: 'bg-green-500/10 border-green-500/30'
    },
    {
      title: 'Incentivize Completion',
      description: 'Reward users who complete >90% of tracks with loyalty points or badges.',
      icon: Award,
      color: 'text-purple-400',
      bg: 'bg-purple-500/10 border-purple-500/30'
    }
  ];

  const impactProjectionData = [
    { action: 'K-Pop Playlist Push', current: 120, projected: 142 },
    { action: 'Indie Re-engagement', current: 85, projected: 102 },
    { action: 'Monsoon Bundle', current: 95, projected: 118 },
    { action: 'Completion Incentives', current: 63, projected: 78 }
  ];

  const timelineData = [
    { week: 'Week 1', kpop: 120, indie: 85, monsoon: 95, completion: 63 },
    { week: 'Week 2', kpop: 125, indie: 88, monsoon: 97, completion: 66 },
    { week: 'Week 3', kpop: 132, indie: 92, monsoon: 102, completion: 70 },
    { week: 'Week 4', kpop: 142, indie: 102, monsoon: 118, completion: 78 }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-white">Prescriptive Analytics</h2>
        <p className="text-slate-400">What should we do? Actionable recommendations with projected impact</p>
      </div>

      {/* Recommendation Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {recommendationCards.map((card, index) => {
          const IconComponent = card.icon;
          return (
            <div key={index} className={`${card.bg} rounded-xl p-4`}>
              <IconComponent className={`w-5 h-5 ${card.color} mb-2`} />
              <h4 className={`${card.color} font-medium text-sm mb-1`}>{card.title}</h4>
              <p className="text-white text-xs">{card.description}</p>
            </div>
          );
        })}
      </div>

      {/* Projected Impact by Initiative */}
      <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
        <h3 className="text-white font-semibold mb-4">Projected Impact of Recommendations</h3>
        <p className="text-slate-400 text-sm mb-4">Metric: Estimated % increase in engagement or retention</p>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={impactProjectionData} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" horizontal={false} />
            <XAxis type="number" stroke="#94a3b8" domain={[0, 150]} />
            <YAxis
              type="category"
              dataKey="action"
              stroke="#94a3b8"
              width={150}
              tick={{ fontSize: 12 }}
            />
            <Tooltip
              contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #334155', borderRadius: '8px' }}
              formatter={(value) => [`${value}%`, 'Engagement']}
            />
            <Bar dataKey="current" name="Current" fill="#64748B" />
            <Bar dataKey="projected" name="Projected" fill="#3B82F6" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* 4-Week Implementation Timeline */}
      <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
        <h3 className="text-white font-semibold mb-4">4-Week Rollout Timeline (Projected Weekly Uplift)</h3>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={timelineData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
            <XAxis dataKey="week" stroke="#94a3b8" />
            <YAxis stroke="#94a3b8" domain={[0, 150]} />
            <Tooltip
              contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #334155', borderRadius: '8px' }}
              formatter={(value) => [`${value}%`, 'Engagement']}
            />
            <Legend />
            <Line type="monotone" dataKey="kpop" name="K-Pop Initiative" stroke="#3B82F6" strokeWidth={2} dot={{ r: 4 }} />
            <Line type="monotone" dataKey="indie" name="Indie Re-engagement" stroke="#F59E0B" strokeWidth={2} dot={{ r: 4 }} />
            <Line type="monotone" dataKey="monsoon" name="Monsoon Bundle" stroke="#10B981" strokeWidth={2} dot={{ r: 4 }} />
            <Line type="monotone" dataKey="completion" name="Completion Incentives" stroke="#8B5CF6" strokeWidth={2} dot={{ r: 4 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PrescriptiveTab;