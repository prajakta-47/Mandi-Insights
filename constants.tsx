
import React from 'react';
import { 
  Home, 
  Table, 
  BarChart3, 
  Map as MapIcon, 
  Building2, 
  Zap, 
  TrendingUp, 
  FileText, 
  Terminal, 
  UserPlus, 
  Info, 
  Settings 
} from 'lucide-react';

export const LANGUAGES = [
  { code: 'en', name: 'English' },
  { code: 'hi', name: 'Hindi (हिन्दी)' },
  { code: 'pa', name: 'Punjabi (ਪੰਜਾਬੀ)' },
  { code: 'mr', name: 'Marathi (मराठी)' },
  { code: 'kn', name: 'Kannada (ಕನ್ನಡ)' },
  { code: 'ta', name: 'Tamil (தமிழ்)' },
];

export const NAV_ITEMS = [
  { id: 'home', label: 'Home', icon: <Home size={20} /> },
  { id: 'live', label: 'Live Prices', icon: <Table size={20} /> },
  { id: 'analytics', label: 'Analytics', icon: <BarChart3 size={20} /> },
  { id: 'geo', label: 'Geo Insights', icon: <MapIcon size={20} /> },
  { id: 'states', label: 'States', icon: <Building2 size={20} /> },
  { id: 'coverage', label: 'Coverage', icon: <Building2 size={20} /> },
  { id: 'intelligence', label: 'Intelligence', icon: <Zap size={20} /> },
  { id: 'forecasting', label: 'Forecasting', icon: <TrendingUp size={20} /> },
  { id: 'reports', label: 'Reports', icon: <FileText size={20} /> },
  { id: 'api', label: 'API', icon: <Terminal size={20} /> },
  { id: 'crowdsource', label: 'Crowdsource', icon: <UserPlus size={20} /> },
  { id: 'about', label: 'About', icon: <Info size={20} /> },
  { id: 'admin', label: 'Admin', icon: <Settings size={20} /> },
];

export const STATES = [
  'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 
  'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 
  'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 
  'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 
  'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal'
];

export const CROPS = [
  'Tomato', 'Potato', 'Onion', 'Wheat', 'Paddy', 'Soybean', 'Cotton', 'Mustard', 'Tur', 'Gram'
];
