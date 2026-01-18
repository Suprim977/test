// areaData.js

// Top listening regions by monthly active listeners
export const topRegions = [
  { region: 'Kathmandu Valley', listeners: 42500, growth: 12.3 },
  { region: 'Pokhara', listeners: 28700, growth: 9.8 },
  { region: 'Biratnagar', listeners: 19300, growth: 7.5 },
  { region: 'Bharatpur', listeners: 16200, growth: 6.2 },
  { region: 'Butwal', listeners: 12800, growth: 5.1 },
  { region: 'Dharan', listeners: 10500, growth: 4.7 },
  { region: 'Hetauda', listeners: 8900, growth: 3.9 },
  { region: 'Nepalgunj', listeners: 7600, growth: 3.2 }
];

// Urban vs Rural distribution
export const urbanRuralDistribution = [
  { type: 'Urban', percentage: 68 },
  { type: 'Semi-Urban', percentage: 22 },
  { type: 'Rural', percentage: 10 }
];

// Regional genre preferences (top genre per region)
export const regionalGenrePreferences = [
  { region: 'Kathmandu Valley', topGenre: 'K-Pop', share: 28 },
  { region: 'Pokhara', topGenre: 'Nepali Folk', share: 32 },
  { region: 'Biratnagar', topGenre: 'Bollywood', share: 41 },
  { region: 'Bharatpur', topGenre: 'Adhunik Geet', share: 35 },
  { region: 'Butwal', topGenre: 'Lok Dohori', share: 38 }
];

// Connectivity & engagement correlation by region
export const connectivityEngagement = [
  { region: 'Kathmandu Valley', avgCompletion: 68, fourGPlusCoverage: 96 },
  { region: 'Pokhara', avgCompletion: 65, fourGPlusCoverage: 89 },
  { region: 'Biratnagar', avgCompletion: 62, fourGPlusCoverage: 82 },
  { region: 'Rural Hills', avgCompletion: 48, fourGPlusCoverage: 54 }
];
