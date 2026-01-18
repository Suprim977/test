// platformData.js

// Platform distribution by user share (%)
export const platformDistribution = [
  { name: 'Mobile (Android)', value: 68 },
  { name: 'Mobile (iOS)', value: 22 },
  { name: 'Web Browser', value: 7 },
  { name: 'Desktop App', value: 3 }
];

// Platform vs. engagement metrics
export const platformEngagement = [
  { platform: 'Mobile (Android)', avgSessionMin: 26.4, completionRate: 61, skipRate: 39 },
  { platform: 'Mobile (iOS)', avgSessionMin: 32.1, completionRate: 68, skipRate: 32 },
  { platform: 'Web Browser', avgSessionMin: 18.7, completionRate: 54, skipRate: 46 },
  { platform: 'Desktop App', avgSessionMin: 38.9, completionRate: 74, skipRate: 26 }
];

// Monthly active users by platform (last 6 months)
export const platformGrowth = [
  { month: 'Aug 2025', android: 112000, ios: 36000, web: 11500, desktop: 5000 },
  { month: 'Sep 2025', android: 118000, ios: 38000, web: 12000, desktop: 5200 },
  { month: 'Oct 2025', android: 125000, ios: 40000, web: 12500, desktop: 5400 },
  { month: 'Nov 2025', android: 132000, ios: 42000, web: 13000, desktop: 5600 },
  { month: 'Dec 2025', android: 140000, ios: 45000, web: 13500, desktop: 5800 },
  { month: 'Jan 2026', android: 148000, ios: 48000, web: 14000, desktop: 6000 }
];