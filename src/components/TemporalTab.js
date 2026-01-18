// GeographicTab.js
import React from 'react';
import {
  BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';
import {
  MapPin, TrendingUp, Users, Wifi
} from 'lucide-react';

const GeographicTab = () => {
  // Mock geographic data
  const topRegions = [
    { region: 'Kathmandu Valley', listeners: 42500, growth: 12.3 },
    { region: 'Pokhara', listeners: 28700, growth: 9.8 },
    { region: 'Biratnagar', listeners: 19300, growth: 7.5 },
    { region: 'Bharatpur', listeners: 16200, growth: 6.2 },
    { region: 'Butwal', listeners: 12800, growth: 5.1 },
    { region: 'Dharan', listeners: 10500, growth: 4.7 }
  ];

  const platformDistribution = [
    { name: 'Mobile (Android)', value: 68 },
    { name: 'Mobile (iOS)', value: 22 },
    { name: 'Web', value: 7 },
    { name: 'Desktop App', value: 3 }
  ];

  const connectivityInsights = [
    {
      title: 'Urban Dominance',
      description: 'Top 5 cities account for 68% of total listening.',
      icon: MapPin,
      color: 'text-blue-400',
      bg: 'bg-blue-500/10 border-blue-500/30'
    },
    {
      title: 'High Growth Areas',
      description: 'Pokhara (+9.8%) and Bharatpur (+6.2%) show strong regional expansion.',
      icon: TrendingUp,
      color: 'text-green-400',
      bg: 'bg-green-500/10 border-green-500/30'
    },
    {
      title: 'Mobile-First Audience',
      description: '90% of users access via mobile devices; Android leads at 68%.',
      icon: Users,
      color: 'text-purple-400',
      bg: 'bg-purple-500/10 border-purple-500/30'
    },
    {
      title: 'Connectivity Correlation',
      description: 'Areas with 4G+ coverage show 2.3x higher completion rates.',
      icon: Wifi,
      color: 'text-cyan-400',
      bg: 'bg-cyan-500/10 border-cyan-500/30'
    }
  ];

  const COLORS = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#EC4899'];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-white">Geographic Analytics</h2>
        <p className="text-slate-400">Where are listeners located? Regional trends, device usage & connectivity insights</p>
      </div>

      {/* Geographic Insights Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {connectivityInsights.map((insight, index) => {
          const IconComponent = insight.icon;
          return (
            <div key={index} className={`${insight.bg} rounded-xl p-4`}>
              <IconComponent className={`w-5 h-5 ${insight.color} mb-2`} />
              <h4 className={`${insight.color} font-medium text-sm mb-1`}>{insight.title}</h4>
              <p className="text-white text-xs">{insight.description}</p>
            </div>
          );
        })}
      </div>

      {/* Top Listening Regions */}
      <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
        <h3 className="text-white font-semibold mb-4">Top Listening Regions (Monthly Active Listeners)</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={topRegions} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" horizontal={false} />
            <XAxis type="number" stroke="#94a3b8" />
            <YAxis
              type="category"
              dataKey="region"
              stroke="#94a3b8"
              width={140}
              tick={{ fontSize: 12 }}
            />
            <Tooltip
              contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #334155', borderRadius: '8px' }}
              formatter={(value, name) => {
                if (name === 'listeners') return [value.toLocaleString(), 'Listeners'];
                if (name === 'growth') return [`${value}%`, 'Growth (YoY)'];
                return [value, name];
              }}
            />
            <Bar dataKey="listeners" name="Listeners" fill="#3B82F6" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Platform Distribution */}
      <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 max-w-2xl mx-auto">
        <h3 className="text-white font-semibold mb-4">Platform Distribution</h3>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={platformDistribution}
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              nameKey="name"
              label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
            >
              {platformDistribution.map((entry, index) => (
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
  );
};

export default GeographicTab;
