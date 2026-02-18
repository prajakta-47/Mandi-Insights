
import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Search, Globe, Clock, ChevronDown, 
  LayoutDashboard, TrendingUp, Map as MapIcon, 
  AlertCircle, Table as TableIcon, Layers, 
  FileText, Terminal, Share2, Info, Lock
} from 'lucide-react';

import { LANGUAGES, NAV_ITEMS, STATES } from './constants';
import { Language } from './types';

// Page Components - Ensuring relative paths for ESM compliance
import Home from './pages/Home';
import LivePrices from './pages/LivePrices';
import Analytics from './pages/Analytics';
import GeoInsights from './pages/GeoInsights';
import StateView from './pages/StateView';
import CoverageTracker from './pages/CoverageTracker';
import Intelligence from './pages/Intelligence';
import Forecasting from './pages/Forecasting';
import Reports from './pages/Reports';
import ApiDocs from './pages/ApiDocs';
import Crowdsource from './pages/Crowdsource';
import About from './pages/About';
import AdminPanel from './pages/AdminPanel';
import AjrasakhaChat from './components/AjrasakhaChat';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [lang, setLang] = useState<Language>('en');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedState, setSelectedState] = useState('Punjab');
  const [lastSync, setLastSync] = useState(new Date().toLocaleTimeString());

  // Simulate sync
  useEffect(() => {
    const timer = setInterval(() => {
      setLastSync(new Date().toLocaleTimeString());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  const renderContent = () => {
    switch(activeTab) {
      case 'home': return <Home onNavigate={setActiveTab} />;
      case 'live': return <LivePrices />;
      case 'analytics': return <Analytics />;
      case 'geo': return <GeoInsights />;
      case 'states': return <StateView stateName={selectedState} />;
      case 'coverage': return <CoverageTracker />;
      case 'intelligence': return <Intelligence />;
      case 'forecasting': return <Forecasting />;
      case 'reports': return <Reports />;
      case 'api': return <ApiDocs />;
      case 'crowdsource': return <Crowdsource />;
      case 'about': return <About />;
      case 'admin': return <AdminPanel />;
      default: return <Home onNavigate={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-slate-50 text-slate-900">
      {/* Mobile Header */}
      <header className="md:hidden sticky top-0 z-50 bg-white border-b px-4 py-3 flex justify-between items-center shadow-sm">
        <div className="flex items-center gap-2">
          <div className="bg-green-700 p-1.5 rounded-lg">
            <Layers className="text-white" size={20} />
          </div>
          <span className="font-bold text-xl tracking-tight">Mandi-Insights</span>
        </div>
        <button onClick={() => setIsSidebarOpen(true)} className="p-2 hover:bg-slate-100 rounded-lg">
          <Menu size={24} />
        </button>
      </header>

      {/* Sidebar / Desktop Nav */}
      <aside className={`
        fixed inset-0 z-[60] bg-white md:relative md:w-64 md:block flex flex-col border-r shadow-xl md:shadow-none
        transition-transform duration-300 md:translate-x-0
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="p-6 flex flex-col h-full">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              <div className="bg-green-700 p-2 rounded-xl">
                <Layers className="text-white" size={24} />
              </div>
              <span className="font-bold text-xl tracking-tight">Mandi-Insights</span>
            </div>
            <button onClick={() => setIsSidebarOpen(false)} className="md:hidden p-1 hover:bg-slate-100 rounded">
              <X size={24} />
            </button>
          </div>

          <nav className="flex-1 space-y-1 overflow-y-auto -mx-2 px-2 scrollbar-hide">
            {NAV_ITEMS.map((item) => {
              if (item.id === 'states') {
                return (
                  <div key={item.id} className="group">
                    <button 
                      onClick={() => setActiveTab('states')}
                      className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl transition-all duration-200 ${activeTab === 'states' ? 'bg-green-50 text-green-700 font-semibold' : 'text-slate-600 hover:bg-slate-100'}`}
                    >
                      <div className="flex items-center gap-3">
                        {item.icon}
                        <span>States</span>
                      </div>
                      <ChevronDown size={14} className={`${activeTab === 'states' ? 'rotate-180' : ''} transition-transform`} />
                    </button>
                    {activeTab === 'states' && (
                      <div className="ml-9 mt-1 space-y-1">
                        <select 
                          value={selectedState} 
                          onChange={(e) => setSelectedState(e.target.value)}
                          className="w-full bg-slate-50 border-none text-xs rounded-lg p-1.5 focus:ring-1 focus:ring-green-500"
                        >
                          {STATES.map(s => <option key={s} value={s}>{s}</option>)}
                        </select>
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setIsSidebarOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 ${activeTab === item.id ? 'bg-green-50 text-green-700 font-semibold shadow-sm' : 'text-slate-600 hover:bg-slate-100'}`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          <div className="mt-8 pt-6 border-t space-y-4">
            <div className="flex items-center justify-between px-2">
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <Clock size={14} />
                <span>Last Sync: {lastSync}</span>
              </div>
            </div>
            <div className="relative">
              <select 
                value={lang}
                onChange={(e) => setLang(e.target.value as Language)}
                className="w-full appearance-none bg-slate-100 border-none rounded-xl px-4 py-2 text-sm focus:ring-2 focus:ring-green-500"
              >
                {LANGUAGES.map(l => <option key={l.code} value={l.code}>{l.name}</option>)}
              </select>
              <Globe className="absolute right-3 top-2.5 text-slate-400 pointer-events-none" size={16} />
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Global Desktop Header */}
        <div className="hidden md:flex bg-white border-b px-8 py-4 items-center justify-between shadow-sm sticky top-0 z-40">
          <div className="relative w-96">
            <Search className="absolute left-3 top-2.5 text-slate-400" size={18} />
            <input 
              className="w-full bg-slate-50 border border-slate-200 rounded-full py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all text-sm"
              placeholder="Search Crop, Mandi or State..."
            />
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-yellow-50 text-yellow-700 border border-yellow-100 rounded-full text-xs font-medium animate-pulse">
              <AlertCircle size={14} />
              <span>Stale data from 4 APMCs in Bihar</span>
            </div>
            <div className="flex items-center gap-3">
              <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-full transition-colors">
                <Share2 size={20} />
              </button>
              <div className="h-8 w-px bg-slate-200" />
              <button className="flex items-center gap-2 hover:bg-slate-100 p-1 rounded-lg pr-3 transition-colors">
                <div className="h-8 w-8 bg-green-700 rounded-full flex items-center justify-center text-white font-bold text-xs uppercase">
                  AD
                </div>
                <span className="text-sm font-medium">Agri Dev</span>
              </button>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4 md:p-8">
          {renderContent()}
          
          {/* Footer */}
          <footer className="mt-20 pt-8 border-t text-slate-500 text-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 text-left">
              <div>
                <h4 className="font-bold text-slate-800 mb-4">Mandi-Insights</h4>
                <p className="leading-relaxed">India's largest unified platform for agricultural market intelligence, covering integrated eNAM and fragmented state portal data.</p>
              </div>
              <div>
                <h4 className="font-bold text-slate-800 mb-4">Data Sources</h4>
                <ul className="space-y-2">
                  <li>eNAM (National Agriculture Market)</li>
                  <li>Agmarknet (Govt. of India)</li>
                  <li>State-specific APMC Portals</li>
                  <li>Crowdsourced Verified Pricing</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-slate-800 mb-4">Disclaimers</h4>
                <p className="leading-relaxed italic">Prices are indicative. Mandi-Insights uses AI to reconcile conflicting values but data lags may occur from state-level sources.</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 py-8 border-t">
              <span>© 2024 Mandi-Insights Prototype. All Rights Reserved.</span>
              <div className="flex gap-6">
                <a href="#" className="hover:text-green-600 transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-green-600 transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-green-600 transition-colors">Contact Support</a>
              </div>
            </div>
          </footer>
        </div>

        <AjrasakhaChat currentPage={activeTab} />
      </main>
    </div>
  );
};

export default App;
