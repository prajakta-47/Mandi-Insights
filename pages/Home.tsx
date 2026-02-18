
import React from 'react';
import { 
  ArrowRight, ShieldCheck, Database, BrainCircuit, 
  MapPin, CheckCircle2, AlertTriangle, Users,
  // Fix: Added missing icons X, TrendingUp, and Globe
  X, TrendingUp, Globe
} from 'lucide-react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, 
  Tooltip, ResponsiveContainer, Cell 
} from 'recharts';

const data = [
  { name: 'eNAM Integrated', value: 1522, color: '#15803d' },
  { name: 'Non-eNAM Portals', value: 5499, color: '#b91c1c' },
];

const Home: React.FC<{ onNavigate: (tab: string) => void }> = ({ onNavigate }) => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl bg-green-900 text-white p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 shadow-2xl">
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-green-500 rounded-full blur-[100px] opacity-20"></div>
        <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-green-400 rounded-full blur-[100px] opacity-20"></div>
        
        <div className="relative z-10 flex-1 space-y-8 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-full border border-white/20 text-xs font-medium uppercase tracking-wider backdrop-blur-sm">
            <ShieldCheck size={14} className="text-green-400" />
            Verified Market Intelligence
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            India’s Unified <span className="text-green-400">Mandi Market</span> Intelligence Platform
          </h1>
          <p className="text-lg md:text-xl text-green-100 max-w-2xl leading-relaxed opacity-90">
            Real-time tracking of 7,021 APMC mandis. We aggregate data from eNAM, Agmarknet, and 15+ fragmented state portals into one powerful dashboard.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button 
              onClick={() => onNavigate('live')}
              className="bg-white text-green-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-50 transition-all flex items-center justify-center gap-2 group shadow-xl"
            >
              View Live Prices
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => onNavigate('analytics')}
              className="bg-green-800 text-white border border-green-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-700 transition-all flex items-center justify-center gap-2"
            >
              Explore Dashboard
            </button>
          </div>
        </div>

        <div className="relative z-10 w-full md:w-[400px] space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10">
              <p className="text-green-400 text-2xl font-bold">7,021</p>
              <p className="text-xs text-white/70 uppercase">Total APMCs</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10">
              <p className="text-green-400 text-2xl font-bold">1,522</p>
              <p className="text-xs text-white/70 uppercase">eNAM Integrated</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10">
              <p className="text-red-400 text-2xl font-bold">5,499</p>
              <p className="text-xs text-white/70 uppercase">Non-eNAM</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10">
              <p className="text-green-400 text-2xl font-bold">150+</p>
              <p className="text-xs text-white/70 uppercase">Crops Tracked</p>
            </div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm p-4 rounded-2xl border border-white/10">
             <p className="text-xs font-semibold mb-2 text-white/80">INTEGRATION GAP (78% UNMAPPED)</p>
             <div className="h-64 w-full">
               <ResponsiveContainer width="100%" height="100%">
                 <BarChart data={data} layout="vertical">
                    <XAxis type="number" hide />
                    <YAxis dataKey="name" type="category" hide />
                    <Tooltip cursor={{fill: 'transparent'}} />
                    <Bar dataKey="value" radius={[0, 10, 10, 0]}>
                      {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Bar>
                 </BarChart>
               </ResponsiveContainer>
             </div>
          </div>
        </div>
      </section>

      {/* Problem -> Solution Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="inline-block p-3 bg-red-100 text-red-700 rounded-2xl">
            <AlertTriangle size={32} />
          </div>
          <h2 className="text-3xl font-bold text-slate-800">The Problem: Fragmentation</h2>
          <p className="text-slate-600 leading-relaxed text-lg">
            India has over 7,000 mandis, but data is locked in regional silos. 78% of APMCs still publish data on outdated state portals with inconsistent formats. Farmers and traders lose millions daily due to information asymmetry and lack of historical analytics.
          </p>
          <ul className="space-y-4">
            <li className="flex gap-3 items-start text-slate-700">
              {/* Fix: X icon is now imported correctly */}
              <X className="text-red-500 mt-1 flex-shrink-0" size={18} />
              <span>Visiting 10-15 websites daily to find best prices.</span>
            </li>
            <li className="flex gap-3 items-start text-slate-700">
              {/* Fix: X icon is now imported correctly */}
              <X className="text-red-500 mt-1 flex-shrink-0" size={18} />
              <span>No easy way to compare prices across state borders.</span>
            </li>
            <li className="flex gap-3 items-start text-slate-700">
              {/* Fix: X icon is now imported correctly */}
              <X className="text-red-500 mt-1 flex-shrink-0" size={18} />
              <span>Lack of predictive insights for harvest planning.</span>
            </li>
          </ul>
        </div>
        <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 space-y-6">
          <div className="inline-block p-3 bg-green-100 text-green-700 rounded-2xl">
            <CheckCircle2 size={32} />
          </div>
          <h2 className="text-3xl font-bold text-slate-800">Our Solution: One Unified Hub</h2>
          <p className="text-slate-600 leading-relaxed text-lg">
            Mandi-Insights scrapes, cleans, and normalizes data from every corner of India, providing a single source of truth with advanced intelligence.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <Database className="text-green-700 mb-2" size={24} />
              <h4 className="font-bold text-sm">Automated Scraping</h4>
              <p className="text-xs text-slate-500">15+ State portals synced hourly</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <BrainCircuit className="text-green-700 mb-2" size={24} />
              <h4 className="font-bold text-sm">AI Forecasting</h4>
              <p className="text-xs text-slate-500">ML-driven 30-day predictions</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <MapPin className="text-green-700 mb-2" size={24} />
              <h4 className="font-bold text-sm">Arbitrage Logic</h4>
              <p className="text-xs text-slate-500">Find best price gaps near you</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <Users className="text-green-700 mb-2" size={24} />
              <h4 className="font-bold text-sm">Ajrasakha AI</h4>
              <p className="text-xs text-slate-500">Conversational agri-assistant</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Counters & Features */}
      <section className="bg-slate-100 -mx-8 px-8 py-20 rounded-[4rem]">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">Data Integrity at Scale</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Used by 50,000+ farmers and 1,200+ agri-traders daily to make informed selling decisions.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-100 text-green-700 rounded-xl flex items-center justify-center mb-6">
                {/* Fix: TrendingUp icon is now imported correctly */}
                <TrendingUp size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Arbitrage Alerts</h3>
              <p className="text-slate-600 mb-6">Instantly notified when price differences between nearby mandis exceed transport costs.</p>
              <button className="text-green-700 font-bold flex items-center gap-2 hover:gap-3 transition-all">
                Learn more <ArrowRight size={18} />
              </button>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 text-blue-700 rounded-xl flex items-center justify-center mb-6">
                {/* Fix: Globe icon is now imported correctly */}
                <Globe size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Multilingual Access</h3>
              <p className="text-slate-600 mb-6">Available in Hindi, Punjabi, Marathi, Tamil, and 5 other regional languages for deep rural reach.</p>
              <button className="text-blue-700 font-bold flex items-center gap-2 hover:gap-3 transition-all">
                Change language <ArrowRight size={18} />
              </button>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-purple-100 text-purple-700 rounded-xl flex items-center justify-center mb-6">
                <Database size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Developer APIs</h3>
              <p className="text-slate-600 mb-6">Direct access for agri-tech startups and researchers to historical and real-time mandi data.</p>
              <button className="text-purple-700 font-bold flex items-center gap-2 hover:gap-3 transition-all">
                View API Docs <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
