// src/components/PredictiveTab.js
import React from 'react';
import {
  BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, // ✅ Cell imported here
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend
} from 'recharts';
import {
  TrendingUp, Users, Calendar, Zap
} from 'lucide-react';

const PredictiveTab = () => {
  const forecastData = [
    { month: 'Jan 2026', predicted: 125000, actual: 120000 },
    { month: 'Feb 2026', predicted: 132000, actual: 128000 },
    { month: 'Mar 2026', predicted: 140000, actual: null },
    { month: 'Apr 2026', predicted: 148000, actual: null },
    { month: 'May 2026', predicted: 155000, actual: null },
    { month: 'Jun 2026', predicted: 162000, actual: null }
  ];

  const genreForecast = [
    { genre: 'K-Pop', growth: 18.5 },
    { genre: 'Nepali Folk', growth: 12.3 },
    { genre: 'Lo-Fi', growth: 9.7 },
    { genre: 'Bollywood', growth: 7.2 },
    { genre: 'Indie', growth: -3.1 },
    { genre: 'Acoustic', growth: -5.4 }
  ];

  const userSegmentForecast = [
    { segment: 'Premium (18–24)', value: 32 },
    { segment: 'Free (25–34)', value: 28 },
    { segment: 'Premium (35–44)', value: 20 },
    { segment: 'Free (18–24)', value: 12 },
    { segment: 'Other', value: 8 }
  ];

  const riskOpportunityCards = [
    {
      title: 'High Growth Potential',
      description: 'K-Pop and Nepali Folk projected to grow >12% YoY.',
      icon: TrendingUp,
      color: 'text-green-400',
      bg: 'bg-green-500/10 border-green-500/30'
    },
    {
      title: 'At-Risk Genres',
      description: 'Indie & Acoustic declining; recommend re-engagement campaigns.',
      icon: Zap,
      color: 'text-yellow-400',
      bg: 'bg-yellow-500/10 border-yellow-500/30'
    },
    {
      title: 'User Segment Shift',
      description: 'Premium users aged 18–24 will dominate growth (+22%).',
      icon: Users,
      color: 'text-blue-400',
      bg: 'bg-blue-500/10 border-blue-500/30'
    },
    {
      title: 'Seasonal Peak Forecast',
      description: 'Monsoon & Dashain expected to drive +20% listening in Q3.',
      icon: Calendar,
      color: 'text-purple-400',
      bg: 'bg-purple-500/10 border-purple-500/30'
    }
  ];

  const COLORS = ['#10B981', '#3B82F6', '#F59E0B', '#EF4444', '#8B5CF6'];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-white">Predictive Analytics</h2>
        <p className="text-slate-400">What will happen? Forecasts, trends, and forward-looking insights</p>
      </div>

      {/* Risk & Opportunity Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {riskOpportunityCards.map((card, index) => {
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

      {/* Monthly Listening Forecast */}
      <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
        <h3 className="text-white font-semibold mb-4">Monthly Listening Forecast (Next 6 Months)</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={forecastData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
            <XAxis dataKey="month" stroke="#94a3b8" />
            <YAxis stroke="#94a3b8" />
            <Tooltip
              contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #334155', borderRadius: '8px' }}
              formatter={(value) => [value.toLocaleString(), 'Streams']}
            />
            <Legend />
            <Bar dataKey="actual" name="Actual (Historical)" fill="#3B82F6" />
            <Bar dataKey="predicted" name="Predicted" fill="#10B981" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Genre Growth Forecast */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
          <h3 className="text-white font-semibold mb-4">Genre Growth Forecast (YoY %)</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={genreForecast}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="genre" stroke="#94a3b8" height={60} angle={-45} textAnchor="end" />
              <YAxis stroke="#94a3b8" />
              <Tooltip
                contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #334155', borderRadius: '8px' }}
                formatter={(value) => [`${value}%`, 'Growth']}
              />
              <Bar dataKey="growth">
                {genreForecast.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.growth > 0 ? '#10B981' : '#EF4444'} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* User Segment Forecast */}
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
          <h3 className="text-white font-semibold mb-4">User Segment Contribution Forecast</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={userSegmentForecast}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                nameKey="segment"
                label={({ segment, percent }) => `${segment}: ${(percent * 100).toFixed(0)}%`}
              >
                {userSegmentForecast.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #334155', borderRadius: '8px' }}
                formatter={(value) => [`${value}%`, 'Share']}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default PredictiveTab;