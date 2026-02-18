
import React from 'react';
import { 
  TrendingUp, Activity, Info, Calendar, 
  HelpCircle, ShieldCheck, Zap,
  // Fix: Added missing icon BrainCircuit
  BrainCircuit
} from 'lucide-react';
import { 
  ComposedChart, Line, Area, XAxis, YAxis, 
  CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine 
} from 'recharts';

const forecastData = [
  { name: 'May 1', actual: 1800, forecast: null },
  { name: 'May 5', actual: 1850, forecast: null },
  { name: 'May 10', actual: 1950, forecast: null },
  { name: 'May 15', actual: 2100, forecast: 2100 },
  { name: 'May 20', actual: null, forecast: 2250, low: 2150, high: 2350 },
  { name: 'May 25', actual: null, forecast: 2400, low: 2200, high: 2600 },
  { name: 'May 30', actual: null, forecast: 2350, low: 2100, high: 2550 },
];

const Forecasting: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Price Forecasting</h1>
          <p className="text-slate-500 text-sm">30-day market predictions driven by machine learning.</p>
        </div>
        <div className="bg-green-100 text-green-700 px-4 py-2 rounded-xl text-xs font-bold border border-green-200 flex items-center gap-2">
           <Zap size={14} />
           AI Confidence: 88%
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <h4 className="text-xs font-bold text-slate-400 uppercase">7-Day Horizon</h4>
          <div className="flex items-center gap-3">
            <div className="p-2 bg-green-100 text-green-700 rounded-lg">
              <TrendingUp size={24} />
            </div>
            <div>
              <p className="text-xl font-bold">₹2,250 <span className="text-xs text-green-600 font-medium">+7.1%</span></p>
              <p className="text-xs text-slate-400">Bullish Sentiment</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <h4 className="text-xs font-bold text-slate-400 uppercase">MSP Comparison</h4>
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-100 text-blue-700 rounded-lg">
              <ShieldCheck size={24} />
            </div>
            <div>
              <p className="text-xl font-bold">₹1,950 <span className="text-xs text-slate-400 font-medium">(Fixed)</span></p>
              <p className="text-xs text-blue-600 font-medium">Market is 8% above MSP</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <h4 className="text-xs font-bold text-slate-400 uppercase">Arrival Prediction</h4>
          <div className="flex items-center gap-3">
            <div className="p-2 bg-yellow-100 text-yellow-700 rounded-lg">
              <Calendar size={24} />
            </div>
            <div>
              <p className="text-xl font-bold">Low Volume</p>
              <p className="text-xs text-slate-400">Next 15 days</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
        <div className="flex justify-between items-center mb-8">
           <div>
             <h3 className="font-bold text-slate-800">Forecast Horizon - Potato (UP Cluster)</h3>
             <p className="text-xs text-slate-400">Dashed line represents AI prediction with confidence bands.</p>
           </div>
           <div className="flex gap-4">
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <div className="w-3 h-3 bg-green-700 rounded-full" /> Actual
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <div className="w-3 h-3 bg-green-400 rounded-full" /> Forecasted
              </div>
           </div>
        </div>
        <div className="h-96 w-full">
           <ResponsiveContainer width="100%" height="100%">
             <ComposedChart data={forecastData}>
               <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
               <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#64748b'}} dy={10} />
               <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#64748b'}} />
               <Tooltip 
                 contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                 formatter={(value) => [`₹${value}`, '']}
               />
               <Area type="monotone" dataKey="high" stroke="transparent" fill="#86efac" fillOpacity={0.2} strokeWidth={0} />
               <Area type="monotone" dataKey="low" stroke="transparent" fill="#86efac" fillOpacity={0} strokeWidth={0} />
               <Line type="monotone" dataKey="actual" stroke="#15803d" strokeWidth={4} dot={{r: 4, fill: '#15803d'}} />
               <Line type="monotone" dataKey="forecast" stroke="#4ade80" strokeWidth={4} strokeDasharray="8 8" dot={{r: 4, fill: '#4ade80'}} />
               <ReferenceLine y={1950} stroke="#cbd5e1" strokeDasharray="3 3" label={{ value: 'MSP', position: 'right', fontSize: 10, fill: '#94a3b8' }} />
             </ComposedChart>
           </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
         <div className="bg-slate-900 rounded-3xl p-8 text-white space-y-4">
            <h4 className="text-xl font-bold flex items-center gap-2">
              {/* Fix: BrainCircuit icon is now imported correctly */}
              <BrainCircuit className="text-green-400" />
              Ajrasakha's Analysis
            </h4>
            <p className="text-slate-300 leading-relaxed italic">
              "The 30-day forecast for Potato indicates a sharp 12% rise in modal prices across Western UP mandis. This is correlated with a 40% reduction in cold-storage releases planned for late May. If you are a trader, consider securing stocks now. If you are a farmer, holding off sales for another 15 days might net you an extra ₹250/quintal."
            </p>
         </div>
         <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-6">
            <h4 className="text-lg font-bold flex items-center gap-2 text-slate-800">
              <HelpCircle className="text-slate-400" />
              Methodology
            </h4>
            <div className="space-y-4 text-sm text-slate-600">
               <div className="flex gap-3">
                 <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                 <p><span className="font-bold text-slate-800">ARIMA & XGBoost:</span> We use ensemble models combining classical time-series analysis and gradient boosting.</p>
               </div>
               <div className="flex gap-3">
                 <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                 <p><span className="font-bold text-slate-800">External Regressors:</span> Includes satellite-based crop health, rainfall data, and transportation cost indices.</p>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};

export default Forecasting;
