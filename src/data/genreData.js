// genreData.js

// Year-over-year % change by genre (used in DiagnosticTab)
export const genreYoYChange = [
  { name: 'Bollywood', value: 8.9 },
  { name: 'Classical Indian', value: 6.9 },
  { name: 'Adhunik Geet', value: 6.9 },
  { name: 'Ghazal', value: 6.8 },
  { name: 'Nepali Folk', value: 6.7 },
  { name: 'Lok Dohori', value: 5.8 },
  { name: 'Nepali Rock', value: 5.7 }
];

// Track completion rate by genre (used in DiagnosticTab)
export const genreCompletionRate = [
  { genre: 'Bollywood', rate: 72 },
  { genre: 'Nepali Folk', rate: 68 },
  { genre: 'Classical Indian', rate: 65 },
  { genre: 'Adhunik Geet', rate: 64 },
  { genre: 'Ghazal', rate: 62 },
  { genre: 'Nepali Rock', rate: 58 },
  { genre: 'K-Pop', rate: 52 },
  { genre: 'Lo-Fi', rate: 45 }
];

// Forecasted YoY growth (%) by genre (used in PredictiveTab)
export const genreGrowthForecast = [
  { genre: 'K-Pop', growth: 18.5 },
  { genre: 'Nepali Folk', growth: 12.3 },
  { genre: 'Lo-Fi', growth: 9.7 },
  { genre: 'Bollywood', growth: 7.2 },
  { genre: 'Indie', growth: -3.1 },
  { genre: 'Acoustic', growth: -5.4 }
];

// Top genres by listener count (optional, for future use)
export const topGenresByListeners = [
  { genre: 'Bollywood', listeners: 42500 },
  { genre: 'K-Pop', listeners: 38200 },
  { genre: 'Nepali Folk', listeners: 31400 },
  { genre: 'Lo-Fi', listeners: 28900 },
  { genre: 'Classical Indian', listeners: 22100 }
];