
import React from 'react';
import { 
  TrendingUp, TrendingDown, Info, Calendar, 
  ArrowUpRight, ArrowDownRight, Activity
} from 'lucide-react';
import { 
  LineChart, Line, AreaChart, Area, XAxis, YAxis, 
  CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Cell
} from 'recharts';

const trendData = [
  { name: 'Mon', price: 1850 },
  { name: 'Tue', price: 1900 },
  { name: 'Wed', price: 1820 },
  { name: 'Thu', price: 2100 },
  { name: 'Fri', price: 2050 },
  { name: 'Sat', price: 2250 },
  { name: 'Sun', price: 2300 },
];

const seasonalData = [
  { month: 'Jan', avg: 1400 },
  { month: 'Feb', avg: 1550 },
  { month: 'Mar', avg: 1900 },
  { month: 'Apr', avg: 2200 },
  { month: 'May', avg: 2100 },
  { month: 'Jun', avg: 1800 },
  { month: 'Jul', avg: 2500 },
  { month: 'Aug', avg: 2800 },
  { month: 'Sep', avg: 2400 },
  { month: 'Oct', avg: 2000 },
  { month: 'Nov', avg: 1600 },
  { month: 'Dec', avg: 1450 },
];

const Analytics: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Advanced Analytics</h1>
          <p className="text-slate-500 text-sm">Historical trends, volatility index, and seasonal patterns.</p>
        </div>
        <div className="flex gap-2 bg-white border border-slate-200 p-1.5 rounded-xl">
           <button className="px-4 py-1.5 text-sm font-semibold text-slate-600 hover:bg-slate-50 rounded-lg">7D</button>
           <button className="px-4 py-1.5 text-sm font-semibold bg-green-50 text-green-700 rounded-lg">1M</button>
           <button className="px-4 py-1.5 text-sm font-semibold text-slate-600 hover:bg-slate-50 rounded-lg">6M</button>
           <button className="px-4 py-1.5 text-sm font-semibold text-slate-600 hover:bg-slate-50 rounded-lg">1Y</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
          <div className="flex justify-between text-slate-400">
            <span className="text-xs font-bold uppercase">Weekly Change</span>
            <TrendingUp size={16} className="text-green-500" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold">₹2,300</span>
            <span className="text-sm font-bold text-green-600 flex items-center">
              +18.5% <ArrowUpRight size={14} />
            </span>
          </div>
          <p className="text-xs text-slate-500 font-medium">Onion (Average National Rate)</p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
          <div className="flex justify-between text-slate-400">
            <span className="text-xs font-bold uppercase">Volatility Index</span>
            <Activity size={16} className="text-red-500" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold">High</span>
            <span className="text-sm font-bold text-red-600 flex items-center">
              +4.2% <ArrowUpRight size={14} />
            </span>
          </div>
          <p className="text-xs text-slate-500 font-medium">Tomato (Karnataka Cluster)</p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
          <div className="flex justify-between text-slate-400">
            <span className="text-xs font-bold uppercase">Harvest Dip Status</span>
            <Calendar size={16} className="text-blue-500" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold">Expected</span>
            <span className="text-sm font-bold text-slate-400">in 12 days</span>
          </div>
          <p className="text-xs text-slate-500 font-medium">Wheat (Punjab/Haryana)</p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
          <div className="flex justify-between text-slate-400">
            <span className="text-xs font-bold uppercase">Market Momentum</span>
            <TrendingDown size={16} className="text-yellow-500" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold">Bearish</span>
            <span className="text-sm font-bold text-red-600 flex items-center">
              -2.1% <ArrowDownRight size={14} />
            </span>
          </div>
          <p className="text-xs text-slate-500 font-medium">Paddy (Basmati Cluster)</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
          <div className="flex justify-between items-center mb-8">
            <h3 className="font-bold text-slate-800">Price Trend Analysis</h3>
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <div className="w-3 h-3 bg-green-500 rounded-full" /> National Avg
            </div>
          </div>
          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={trendData}>
                <defs>
                  <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#15803d" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#15803d" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#64748b'}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#64748b'}} />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                  formatter={(value) => [`₹${value}`, 'Price']}
                />
                <Area type="monotone" dataKey="price" stroke="#15803d" strokeWidth={3} fillOpacity={1} fill="url(#colorPrice)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
          <div className="flex justify-between items-center mb-8">
            <h3 className="font-bold text-slate-800">Seasonal Performance</h3>
            <select className="bg-slate-50 border-none rounded-lg text-xs px-2 py-1 outline-none">
              <option>Last 3 Years</option>
              <option>Last 5 Years</option>
            </select>
          </div>
          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={seasonalData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#64748b'}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#64748b'}} />
                <Tooltip 
                   contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                   cursor={{fill: '#f8fafc'}}
                />
                <Bar dataKey="avg" radius={[4, 4, 0, 0]}>
                   {seasonalData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.avg > 2000 ? '#15803d' : '#86efac'} />
                   ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="bg-green-900 rounded-3xl p-8 text-white flex flex-col md:flex-row items-center gap-8 shadow-xl">
        <div className="flex-1 space-y-4">
          <h3 className="text-2xl font-bold">Insight Cards</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white/10 p-4 rounded-2xl backdrop-blur-sm border border-white/10 flex items-start gap-3">
              <Info className="text-green-400 mt-1 flex-shrink-0" size={18} />
              <p className="text-sm">Onion prices are trending 18% higher than the 5-year average for May due to unseasonal rains in Maharashtra.</p>
            </div>
            <div className="bg-white/10 p-4 rounded-2xl backdrop-blur-sm border border-white/10 flex items-start gap-3">
              <Info className="text-blue-400 mt-1 flex-shrink-0" size={18} />
              <p className="text-sm">Tomato volatility is highest in Karnataka clusters currently. Local procurement is recommended from APMCs in Andhra Pradesh for better rates.</p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-auto">
           <button className="w-full md:w-auto px-8 py-3 bg-green-500 text-white font-bold rounded-xl hover:bg-green-600 transition-colors">Download Report</button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
