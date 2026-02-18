
import React from 'react';
import { 
  Zap, Bell, TrendingUp, TrendingDown, 
  ArrowRight, ShieldCheck, MapPin, Share2, Plus,
  CheckCircle2, AlertTriangle, MessageSquare
} from 'lucide-react';

const ARBITRAGE_ALERTS = [
  { 
    id: '1', 
    crop: 'Tomato', 
    mandiA: 'Kolar, Karnataka', 
    priceA: 3200, 
    mandiB: 'Bengaluru, Karnataka', 
    priceB: 4500, 
    distance: 65, 
    gap: 1300,
    potentialProfit: '₹850/q after transport'
  },
  { 
    id: '2', 
    crop: 'Onion', 
    mandiA: 'Lasalgaon, Maharashtra', 
    priceA: 1550, 
    mandiB: 'Pune, Maharashtra', 
    priceB: 2100, 
    distance: 190, 
    gap: 550,
    potentialProfit: '₹280/q after transport'
  },
  { 
    id: '3', 
    crop: 'Potato', 
    mandiA: 'Agra, UP', 
    priceA: 1750, 
    mandiB: 'Lucknow, UP', 
    priceB: 2400, 
    distance: 330, 
    gap: 650,
    potentialProfit: '₹250/q after transport'
  }
];

const Intelligence: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Market Intelligence & Alerts</h1>
          <p className="text-slate-500 text-sm">Actionable insights to maximize profit and minimize market risk.</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-2.5 bg-green-700 text-white rounded-xl font-bold hover:bg-green-800 transition-colors shadow-lg">
          <Plus size={18} />
          Create Custom Alert
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <h3 className="font-bold text-slate-800 flex items-center gap-2">
            <Zap className="text-yellow-500" size={20} />
            Real-time Arbitrage Logic
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ARBITRAGE_ALERTS.map((alert) => (
              <div key={alert.id} className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:border-green-300 transition-all group relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-green-100 text-green-700 px-3 py-1 text-[10px] font-bold rounded-bl-xl uppercase">
                  Active Now
                </div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center font-bold text-slate-700">
                    {alert.crop[0]}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-lg">{alert.crop}</h4>
                    <p className="text-xs text-slate-400">{alert.distance} km distance</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center text-sm">
                    <div className="flex items-center gap-2 text-slate-500">
                      <MapPin size={14} /> {alert.mandiA}
                    </div>
                    <span className="font-bold text-slate-800">₹{alert.priceA}</span>
                  </div>
                  <div className="h-px bg-slate-100 w-full" />
                  <div className="flex justify-between items-center text-sm">
                    <div className="flex items-center gap-2 text-slate-500">
                      <MapPin size={14} /> {alert.mandiB}
                    </div>
                    <span className="font-bold text-slate-800">₹{alert.priceB}</span>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t bg-slate-50 -mx-6 -mb-6 p-6">
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase">Price Gap</p>
                      <p className="text-2xl font-extrabold text-green-700">₹{alert.gap}/q</p>
                    </div>
                    <div className="text-right">
                       <p className="text-[10px] font-bold text-green-600 uppercase">Est. Profit</p>
                       <p className="text-xs font-bold text-slate-700">{alert.potentialProfit}</p>
                    </div>
                  </div>
                  <button className="w-full mt-4 py-2 bg-green-700 text-white rounded-lg text-xs font-bold flex items-center justify-center gap-2 hover:bg-green-800">
                    Route & Logistics Details <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-6">
             <h3 className="font-bold text-slate-800 flex items-center gap-2">
               <TrendingUp className="text-green-600" size={18} />
               Weekly Top Gainers
             </h3>
             <div className="space-y-4">
                {[
                  { crop: 'Onion', change: '+18%', price: '₹1,950', status: 'Up' },
                  { crop: 'Tomato', change: '+12%', price: '₹4,200', status: 'Up' },
                  { crop: 'Potato', change: '+5%', price: '₹1,880', status: 'Up' },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                       <div className="w-8 h-8 bg-green-50 text-green-700 rounded-lg flex items-center justify-center">
                          <TrendingUp size={16} />
                       </div>
                       <div>
                          <p className="text-sm font-bold text-slate-800">{item.crop}</p>
                          <p className="text-xs text-slate-400">{item.price}</p>
                       </div>
                    </div>
                    <span className="text-sm font-bold text-green-600">{item.change}</span>
                  </div>
                ))}
             </div>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-6">
             <h3 className="font-bold text-slate-800 flex items-center gap-2">
               <TrendingDown className="text-red-600" size={18} />
               Weekly Top Losers
             </h3>
             <div className="space-y-4">
                {[
                  { crop: 'Paddy', change: '-8%', price: '₹2,050', status: 'Down' },
                  { crop: 'Wheat', change: '-3%', price: '₹2,125', status: 'Down' },
                  { crop: 'Soybean', change: '-2%', price: '₹4,400', status: 'Down' },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                       <div className="w-8 h-8 bg-red-50 text-red-700 rounded-lg flex items-center justify-center">
                          <TrendingDown size={16} />
                       </div>
                       <div>
                          <p className="text-sm font-bold text-slate-800">{item.crop}</p>
                          <p className="text-xs text-slate-400">{item.price}</p>
                       </div>
                    </div>
                    <span className="text-sm font-bold text-red-600">{item.change}</span>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-900 rounded-[3rem] p-8 md:p-12 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 text-green-500/10 -mr-16 -mt-16">
          <Bell size={240} strokeWidth={4} />
        </div>
        
        <div className="relative z-10 max-w-2xl space-y-8">
          <h2 className="text-3xl font-extrabold">Price Alert Setup</h2>
          <p className="text-slate-400">Get instant WhatsApp or SMS notifications when price thresholds are met in your favorite mandis.</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
             <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Select Crop</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-500/50">
                   <option>Tomato</option>
                   <option>Potato</option>
                   <option>Onion</option>
                </select>
             </div>
             <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Target Price (₹)</label>
                <input 
                  type="number" 
                  placeholder="e.g. 2500"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-500/50" 
                />
             </div>
          </div>

          <div className="flex flex-wrap gap-4">
             <label className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-lg cursor-pointer hover:bg-white/10 transition-colors">
                <input type="checkbox" className="accent-green-500" defaultChecked />
                <span className="text-sm">WhatsApp</span>
             </label>
             <label className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-lg cursor-pointer hover:bg-white/10 transition-colors">
                <input type="checkbox" className="accent-green-500" />
                <span className="text-sm">SMS</span>
             </label>
             <label className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-lg cursor-pointer hover:bg-white/10 transition-colors">
                <input type="checkbox" className="accent-green-500" defaultChecked />
                <span className="text-sm">Email</span>
             </label>
          </div>

          <button className="px-8 py-4 bg-green-500 text-slate-900 font-extrabold rounded-2xl hover:bg-green-400 transition-all flex items-center gap-3">
            Activate Smart Alert
            <ShieldCheck size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Intelligence;
