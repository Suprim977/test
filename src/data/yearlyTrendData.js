// yearlyTrendData.js

// Monthly listening volume over the past 12 months (2025–2026)
export const monthlyStreams = [
  { month: 'Jan 2025', streams: 102000 },
  { month: 'Feb 2025', streams: 105000 },
  { month: 'Mar 2025', streams: 109000 },
  { month: 'Apr 2025', streams: 114000 },
  { month: 'May 2025', streams: 120000 },
  { month: 'Jun 2025', streams: 135000 },
  { month: 'Jul 2025', streams: 152000 },
  { month: 'Aug 2025', streams: 148000 },
  { month: 'Sep 2025', streams: 132000 },
  { month: 'Oct 2025', streams: 145000 }, // Dashain/Tihar festival spike
  { month: 'Nov 2025', streams: 128000 },
  { month: 'Dec 2025', streams: 138000 },
  { month: 'Jan 2026', streams: 142000 }
];

// Year-over-year growth by quarter (%)
export const quarterlyYoYGrowth = [
  { quarter: 'Q1 2025', growth: 9.2 },
  { quarter: 'Q2 2025', growth: 11.5 },
  { quarter: 'Q3 2025', growth: 18.7 }, // Monsoon + summer peak
  { quarter: 'Q4 2025', growth: 15.3 }  // Festival season
];

// Seasonal index (relative listening intensity, baseline = 100)
export const seasonalIndex = [
  { season: 'Winter (Dec–Feb)', index: 105 },
  { season: 'Spring (Mar–May)', index: 110 },
  { season: 'Summer (Jun–Aug)', index: 135 },
  { season: 'Autumn (Sep–Nov)', index: 120 }
];

// Key event-driven spikes (cultural/festival calendar)
export const eventSpikes = [
  { event: 'Dashain', month: 'Oct 2025', impact: '+28%' },
  { event: 'Tihar', month: 'Nov 2025', impact: '+22%' },
  { event: 'Holi', month: 'Mar 2026', impact: '+15%' },
  { event: 'Indra Jatra', month: 'Sep 2025', impact: '+18%' },
  { event: 'New Year', month: 'Jan 2026', impact: '+12%' }
];