import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

function App() {
  const [activeTab, setActiveTab] = useState('Overview');

  const tabs = [
    'Overview',
    'Diagnostic',
    'Predictive',
    'Prescriptive',
    'Geographic',
    'Temporal',
  ];

  const overviewData = [
    { name: 'Listeners', value: 15000 },
    { name: 'Streams', value: 8000 },
    { name: 'Followers', value: 5000 },
  ];

  const geographicData = [
    { area: 'Kathmandu', listeners: 5000 },
    { area: 'Pokhara', listeners: 3000 },
    { area: 'Lalitpur', listeners: 2000 },
    { area: 'Bhaktapur', listeners: 1000 },
  ];

  const OverviewTab = () => (
    <>
      <div className="kpi-grid">
        {overviewData.map((kpi) => (
          <div key={kpi.name} className="kpi-card">
            <div className="kpi-header">
              <span>{kpi.name}</span>
              <span className="kpi-change">+3.2%</span>
            </div>
            <div className="kpi-value">{kpi.value}</div>
          </div>
        ))}
      </div>

      <div className="chart-card">
        <h3 className="chart-title">Overview Chart</h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={overviewData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
            <XAxis dataKey="name" stroke="#94a3b8" />
            <YAxis stroke="#94a3b8" />
            <Tooltip />
            <Bar dataKey="value" fill="#3b82f6" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </>
  );

  const DiagnosticTab = () => (
    <div className="chart-card">
      <h3 className="chart-title">Diagnostic Analysis</h3>
      <p>Here you can show diagnostic charts and tables.</p>
    </div>
  );

  const PredictiveTab = () => (
    <div className="chart-card">
      <h3 className="chart-title">Predictive Analysis</h3>
      <p>Here you can show predictive charts.</p>
    </div>
  );

  const PrescriptiveTab = () => (
    <div className="chart-card">
      <h3 className="chart-title">Prescriptive Analysis</h3>
      <p>Here you can show prescriptive recommendations.</p>
    </div>
  );

  const GeographicTab = () => (
    <div className="chart-card">
      <h3 className="chart-title">Geographic Distribution</h3>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={geographicData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
          <XAxis dataKey="area" stroke="#94a3b8" />
          <YAxis stroke="#94a3b8" />
          <Tooltip />
          <Bar dataKey="listeners" fill="#10B981" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );

  const TemporalTab = () => (
    <div className="chart-card">
      <h3 className="chart-title">Temporal Analysis</h3>
      <p>Here you can show trends over time.</p>
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Overview':
        return <OverviewTab />;
      case 'Diagnostic':
        return <DiagnosticTab />;
      case 'Predictive':
        return <PredictiveTab />;
      case 'Prescriptive':
        return <PrescriptiveTab />;
      case 'Geographic':
        return <GeographicTab />;
      case 'Temporal':
        return <TemporalTab />;
      default:
        return <OverviewTab />;
    }
  };

  return (
    <div className="dashboard">
      <h1>Nepal Music Analytics Dashboard</h1>
      <p>Descriptive • Diagnostic • Predictive • Prescriptive • Geographic • Temporal</p>

      {/* Tabs */}
      <div className="tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {renderTabContent()}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
