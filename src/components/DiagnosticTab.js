// src/components/DiagnosticTab.js
import React from 'react';
import {
  BarChart, Bar, LineChart, Line, RadarChart, Radar,
  PolarGrid, PolarAngleAxis, PolarRadiusAxis, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, Cell
} from 'recharts';
import {
  SkipForward, Volume2, TrendingUp, Music
} from 'lucide-react';

const DiagnosticTab = () => {
  const diagnosticAlerts = [
    {
      title: 'High Skip Rate Spike',
      description: '+8.3% in 2025; Correlated with new releases, low energy tracks.',
      icon: SkipForward,
      color: 'text-red-400',
      bg: 'bg-red-500/10 border-red-500/30'
    },
    {
      title: 'Low Completion Rate',
      description: 'Only 63% songs completed; Genre: Lo-Fi (45%), K-Pop (52%).',
      icon: Volume2,
      color: 'text-yellow-400',
      bg: 'bg-yellow-500/10 border-yellow-500/30'
    },
    {
      title: 'Key Correlations',
      description: 'Strong relationships: Age 18-24 ↔ K-Pop (r=0.78), Premium ↔ Higher completion (r=0.65).',
      icon: TrendingUp,
      color: 'text-green-400',
      bg: 'bg-green-500/10 border-green-500/30'
    },
    {
      title: 'Declining Categories',
      description: 'Indie (-12% since 2024), Acoustic (-8%).',
      icon: Music,
      color: 'text-purple-400',
      bg: 'bg-purple-500/10 border-purple-500/30'
    }
  ];

  const genreData = [
    { name: 'Bollywood', value: 8.9 },
    { name: 'Classical Indian', value: 6.9 },
    { name: 'Adhunik Geet', value: 6.9 },
    { name: 'Ghazal', value: 6.8 },
    { name: 'Nepali Folk', value: 6.7 },
    { name: 'Lok Dohori', value: 5.8 },
    { name: 'Nepali Rock', value: 5.7 }
  ];

  const genreCompletionData = [
    { genre: 'Bollywood', rate: 72 },
    { genre: 'Nepali Folk', rate: 68 },
    { genre: 'Classical Indian', rate: 65 },
    { genre: 'Adhunik Geet', rate: 64 },
    { genre: 'Ghazal', rate: 62 },
    { genre: 'Nepali Rock', rate: 58 },
    { genre: 'K-Pop', rate: 52 },
    { genre: 'Lo-Fi', rate: 45 }
  ];

  const hourlyData = Array.from({ length: 24 }, (_, i) => ({
    hour: `${i.toString().padStart(2, '0')}:00`,
    plays: Math.floor(Math.random() * 1000) + (i === 19 ? 2000 : 0)
  }));

  const seasonalData = [
    { season: 'Spring', value: 85 },
    { season: 'Monsoon', value: 95 },
    { season: 'Autumn', value: 90 },
    { season: 'Winter', value: 80 }
  ];

  const rootCauseData = [
    { pattern: 'Summer Surge', impact: '+15% plays', cause: 'Increased indoor time', evidence: 'Weather correlation r=0.82' },
    { pattern: 'Weekend Spike', impact: '+12% plays', cause: 'Leisure time availability', evidence: 'Consistent across demographics' },
    { pattern: 'Monsoon Peak', impact: '+18% plays', cause: 'Rainy weather indoor activity', evidence: 'Seasonal analysis confirmed' },
    { pattern: 'Dashain Festival', impact: '+25% plays', cause: 'Family gatherings & celebrations', evidence: 'Annual recurring pattern' }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-white">Diagnostic Analytics</h2>
        <p className="text-slate-400">Why did it happen? Root cause analysis & correlations</p>
      </div>

      {/* Alerts */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {diagnosticAlerts.map((alert, index) => {
          const IconComponent = alert.icon;
          return (
            <div key={index} className={`${alert.bg} rounded-xl p-4`}>
              <IconComponent className={`w-5 h-5 ${alert.color} mb-2`} />
              <h4 className={`${alert.color} font-medium text-sm mb-1`}>{alert.title}</h4>
              <p className="text-white text-xs">{alert.description}</p>
            </div>
          );
        })}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
          <h3 className="text-white font-semibold mb-4">Year-over-Year Change by Genre</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={genreData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="name" stroke="#94a3b8" height={60} angle={-45} textAnchor="end" />
              <YAxis stroke="#94a3b8" domain={[-15, 15]} />
              <Tooltip contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #334155', borderRadius: '8px' }} />
              <Bar dataKey="value">
                {genreData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.value > 0 ? '#10B981' : '#EF4444'} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
          <h3 className="text-white font-semibold mb-4">Completion Rate by Genre</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={genreCompletionData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="genre" stroke="#94a3b8" height={60} angle={-45} textAnchor="end" />
              <YAxis stroke="#94a3b8" domain={[0, 100]} />
              <Tooltip contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #334155', borderRadius: '8px' }} />
              <Bar dataKey="rate" fill="#3B82F6" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Time of Day & Seasonal */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
          <h3 className="text-white font-semibold mb-4">Listening Time of Day</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={hourlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="hour" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #334155', borderRadius: '8px' }} />
              <Line type="monotone" dataKey="plays" stroke="#3B82F6" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
          <h3 className="text-white font-semibold mb-4">Seasonal Listening Patterns</h3>
          <ResponsiveContainer width="100%" height={250}>
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={seasonalData}>
              <PolarGrid stroke="#334155" />
              <PolarAngleAxis dataKey="season" stroke="#94a3b8" />
              <PolarRadiusAxis angle={30} domain={[0, 100]} stroke="#94a3b8" />
              <Radar name="Listening Index" dataKey="value" stroke="#10B981" fill="#10B981" fillOpacity={0.6} />
              <Tooltip contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #334155', borderRadius: '8px' }} />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Root Cause Table */}
      <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
        <h3 className="text-white font-semibold mb-4">Root Cause Analysis Table</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-600">
                <th className="text-left py-2 px-3 text-slate-400">Pattern</th>
                <th className="text-left py-2 px-3 text-slate-400">Impact</th>
                <th className="text-left py-2 px-3 text-slate-400">Root Cause</th>
                <th className="text-left py-2 px-3 text-slate-400">Evidence</th>
              </tr>
            </thead>
            <tbody>
              {rootCauseData.map((row, index) => (
                <tr key={index} className="border-b border-slate-700 hover:bg-slate-700/30">
                  <td className="py-2 px-3 text-white">{row.pattern}</td>
                  <td className="py-2 px-3 text-green-400">{row.impact}</td>
                  <td className="py-2 px-3 text-white">{row.cause}</td>
                  <td className="py-2 px-3 text-slate-300">{row.evidence}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DiagnosticTab;