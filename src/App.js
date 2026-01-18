// src/App.js
import React, { useState } from 'react';
import {
  BarChart3,
  TrendingUp,
  Lightbulb,
  MapPin,
  Clock,
  Home
} from 'lucide-react';

// Tabs
import DiagnosticTab from './components/DiagnosticTab';
import PredictiveTab from './components/PredictiveTab';
import PrescriptiveTab from './components/PrescriptiveTab';
import GeographicTab from './components/GeographicTab';
import TemporalTab from './components/TemporalTab';

// Shared
import KPI from './shared/KPI';

const App = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Home },
    { id: 'diagnostic', label: 'Diagnostic', icon: BarChart3 },
    { id: 'predictive', label: 'Predictive', icon: TrendingUp },
    { id: 'prescriptive', label: 'Prescriptive', icon: Lightbulb },
    { id: 'geographic', label: 'Geographic', icon: MapPin },
    { id: 'temporal', label: 'Temporal', icon: Clock }
  ];

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'diagnostic':
        return <DiagnosticTab />;
      case 'predictive':
        return <PredictiveTab />;
      case 'prescriptive':
        return <PrescriptiveTab />;
      case 'geographic':
        return <GeographicTab />;
      case 'temporal':
        return <TemporalTab />;
      case 'overview':
      default:
        return (
          <div className="space-y-8">
            <KPI />
            <DiagnosticTab />
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* HEADER */}
      <header className="bg-slate-800/50 border-b border-slate-700 px-6 py-4">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <BarChart3 className="text-blue-400" />
          Music Analytics Dashboard
        </h1>
        <p className="text-slate-400">Nepal Market Insights</p>
      </header>

      {/* NAV */}
      <nav className="bg-slate-800/30 border-b border-slate-700 px-6 py-3">
        <div className="flex gap-2 overflow-x-auto">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-400 hover:text-white hover:bg-slate-700'
                }`}
              >
                <Icon size={16} />
                {tab.label}
              </button>
            );
          })}
        </div>
      </nav>

      {/* CONTENT */}
      <main className="p-6">
        {renderActiveTab()}
      </main>

      {/* FOOTER */}
      <footer className="text-center text-slate-500 text-sm py-4 border-t border-slate-800">
        © 2026 Music Streaming Analytics Platform • Nepal
      </footer>
    </div>
  );
};

export default App;
