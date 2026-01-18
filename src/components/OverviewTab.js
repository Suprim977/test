import React from 'react';
import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp, MapPin, Clock, Music, Users, Play, SkipForward, Target } from 'lucide-react';

const OverviewTab = () => {
  // Mock data based on Nepal Music Dataset
  const kpiData = [
    { title: 'TOTAL LISTENERS', value: '15,000', change: '+3.2% vs 2024', icon: Users },
    { title: 'AVG DAILY PLAYS', value: '16.7', change: 'Per day avg', icon: Play },
    { title: 'COMPLETION RATE', value: '63.0%', change: '-1.2% vs 2024', icon: SkipForward },
    { title: 'PREMIUM USERS', value: '7,500', change: '50% of total', icon: Target },
    { title: 'TOP GENRE', value: 'Bollywood', change: '8.9% share', icon: Music },
    { title: 'PEAK HOUR', value: '19:00', change: 'Highest activity', icon: Clock }
  ];

  const yearlyTrendData = [
    { year: '2024', plays: 150000, color: '#3B82F6' },
    { year: '2025', plays: 180000, color: '#8B5CF6' },
    { year: '2026', plays: 170000, color: '#EF4444' }
  ];

  const genreData = [
    { name: 'Bollywood', value: 8.9 },
    { name: 'Classical Indian', value: 6.9 },
    { name: 'Adhunik Geet', value: 6.9 },
    { name: 'Ghazal', value: 6.8 },
    { name: 'Nepali Folk', value: 6.7 },
    { name: 'Lok Dohori', value: 5.8 },
    { name: 'Nepali Rock', value: 5.7 },
    { name: 'Others', value: 53.3 }
  ];

  const areaData = [
    { area: 'Thamel', listeners: 1245 },
    { area: 'Patan', listeners: 1120 },
    { area: 'Bouddha', listeners: 980 },
    { area: 'Kalanki', listeners: 890 },
    { area: 'Balaju', listeners: 845 },
    { area: 'Lagankhel', listeners: 820 },
    { area: 'Chabahil', listeners: 790 },
    { area: 'Kirtipur', listeners: 760 },
    { area: 'Gaushala', listeners: 730 },
    { area: 'Swayambhu', listeners: 710 }
  ];

  const platformData = [
    { name: 'Spotify', value: 10 },
    { name: 'JioSaavn', value: 10 },
    { name: 'Apple Music', value: 10 },
    { name: 'YouTube Music', value: 10 },
    { name: 'Others', value: 60 }
  ];

  const highlightCards = [
    { title: 'HIGHEST LISTENER AREA', value: 'Thamel (1,245 listeners / 8.3%)', icon: MapPin },
    { title: 'SAFEST AREA', value: 'Patan (Lowest skip rate)', icon: TrendingUp },
    { title: 'MOST POPULAR GENRE', value: 'Bollywood (8.9%)', icon: Music },
    { title: 'PEAK LISTENING DAY', value: 'Saturday (+12% vs weekday avg)', icon: Calendar }
  ];

  const COLORS = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#EC4899', '#06B6D4', '#84CC16'];

  const renderKPI = (item) => {
    const IconComponent = item.icon;
    return (
      <div key={item.title} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-slate-600 transition-all duration-300">
        <div className="flex items-center justify-between mb-4">
          <IconComponent className="w-8 h-8 text-blue-400" />
          <span className="text-xs font-medium text-slate-400">{item.change}</span>
        </div>
        <h3 className="text-slate-400 text-sm font-medium mb-1">{item.title}</h3>
        <p className="text-white text-2xl font-bold">{item.value}</p>
      </div>
    );
  };

  const renderHighlightCard = (card) => {
    const IconComponent = card.icon;
    return (
      <div key={card.title} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 border border-slate-700">
        <div className="flex items-start space-x-3">
          <IconComponent className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
          <div>
            <h4 className="text-slate-400 text-sm font-medium">{card.title}</h4>
            <p className="text-white text-sm font-medium">{card.value}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">Descriptive Analytics Overview</h2>
          <p className="text-slate-400">What happened? Listener statistics across Kathmandu 2024–2026</p>
        </div>
        <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm font-medium border border-red-500/30">LIVE DATA</span>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {kpiData.map(renderKPI)}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Yearly Trend */}
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
          <h3 className="text-white font-semibold mb-4">Listener Trend by Year</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={yearlyTrendData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="year" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip 
                contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #334155', borderRadius: '8px' }}
                labelStyle={{ color: '#fff' }}
              />
              <Bar dataKey="plays">
                {yearlyTrendData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Genre Distribution */}
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
          <h3 className="text-white font-semibold mb-4">Genre Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={genreData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={2}
                dataKey="value"
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(1)}%`}
              >
                {genreData.map((entry, index) => (
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

        {/* Top Areas */}
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
          <h3 className="text-white font-semibold mb-4">Top 10 Areas by Listener Count</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={areaData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" horizontal={false} />
              <XAxis type="number" stroke="#94a3b8" />
              <YAxis dataKey="area" type="category" stroke="#94a3b8" width={80} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #334155', borderRadius: '8px' }}
              />
              <Bar dataKey="listeners" fill="#EF4444" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Platform Usage */}
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
          <h3 className="text-white font-semibold mb-4">Platform Usage</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={platformData}
                cx="50%"
                cy="50%"
                outerRadius={100}
                dataKey="value"
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
              >
                {platformData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #334155', borderRadius: '8px' }}
                formatter={(value) => [`${value}%`, 'Market Share']}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Highlight Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {highlightCards.map(renderHighlightCard)}
      </div>
    </div>
  );
};

export default OverviewTab;
