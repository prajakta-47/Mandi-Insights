
import React, { useState } from 'react';
import { 
  Filter, Download, Search, Info, 
  ChevronLeft, ChevronRight, RefreshCw, 
  Clock, CheckCircle, AlertTriangle, HelpCircle
} from 'lucide-react';
import { CROPS, STATES } from '../constants';
import { MandiData } from '../types';

const MOCK_DATA: MandiData[] = [
  { id: '1', date: '2024-05-20', state: 'Punjab', district: 'Ludhiana', mandi: 'Ludhiana(F&V)', crop: 'Potato', variety: 'Hybrid', minPrice: 1800, maxPrice: 2200, modalPrice: 2000, source: 'eNAM', status: 'Fresh', lastUpdated: '10 mins ago' },
  { id: '2', date: '2024-05-20', state: 'Maharashtra', district: 'Nashik', mandi: 'Lasalgaon', crop: 'Onion', variety: 'Red', minPrice: 1500, maxPrice: 1850, modalPrice: 1700, source: 'Agmarknet', status: 'Fresh', lastUpdated: '2 hours ago' },
  { id: '3', date: '2024-05-20', state: 'Karnataka', district: 'Chikkaballapur', mandi: 'Chikkaballapur', crop: 'Tomato', variety: 'Local', minPrice: 3200, maxPrice: 4500, modalPrice: 4000, source: 'State Portal', status: 'Stale', lastUpdated: '24 hours ago' },
  { id: '4', date: '2024-05-20', state: 'Uttar Pradesh', district: 'Lucknow', mandi: 'Lucknow', crop: 'Wheat', variety: 'Dara', minPrice: 2125, maxPrice: 2300, modalPrice: 2250, source: 'eNAM', status: 'Fresh', lastUpdated: '1 hour ago' },
  { id: '5', date: '2024-05-19', state: 'Bihar', district: 'Patna', mandi: 'Mussallahpur', crop: 'Paddy', variety: 'Common', minPrice: 1950, maxPrice: 2100, modalPrice: 2050, source: 'State Portal', status: 'Missing', lastUpdated: '3 days ago' },
];

const LivePrices: React.FC = () => {
  const [filter, setFilter] = useState({
    crop: 'All',
    state: 'All',
    source: 'All'
  });

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Live Mandi Prices</h1>
          <p className="text-slate-500 text-sm">Showing real-time aggregated rates from APMCs nationwide.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-semibold text-slate-600 hover:bg-slate-50 transition-colors shadow-sm">
            <Download size={16} />
            Export CSV
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-green-700 text-white rounded-xl text-sm font-semibold hover:bg-green-800 transition-colors shadow-sm">
            <RefreshCw size={16} />
            Refresh Data
          </button>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-wrap gap-4">
        <div className="flex-1 min-w-[200px]">
          <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Crop</label>
          <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-green-500/20 text-sm outline-none">
            <option>All Crops</option>
            {CROPS.map(c => <option key={c}>{c}</option>)}
          </select>
        </div>
        <div className="flex-1 min-w-[200px]">
          <label className="block text-xs font-bold text-slate-400 uppercase mb-2">State</label>
          <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-green-500/20 text-sm outline-none">
            <option>All States</option>
            {STATES.map(s => <option key={s}>{s}</option>)}
          </select>
        </div>
        <div className="flex-1 min-w-[150px]">
          <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Source</label>
          <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-green-500/20 text-sm outline-none">
            <option>All Sources</option>
            <option>eNAM</option>
            <option>Agmarknet</option>
            <option>State Portal</option>
          </select>
        </div>
        <div className="flex items-end">
          <button className="p-2.5 bg-slate-100 text-slate-600 rounded-xl hover:bg-slate-200 transition-colors">
            <Filter size={20} />
          </button>
        </div>
      </div>

      {/* Data Table */}
      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 text-slate-500 text-xs font-bold uppercase tracking-wider border-b">
                <th className="px-6 py-4">Mandi Details</th>
                <th className="px-6 py-4">Crop & Variety</th>
                <th className="px-6 py-4 text-center">Min / Max</th>
                <th className="px-6 py-4 text-center">Modal Price</th>
                <th className="px-6 py-4 text-center">Status</th>
                <th className="px-6 py-4">Source</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {MOCK_DATA.map((row) => (
                <tr key={row.id} className="hover:bg-slate-50/50 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="font-bold text-slate-800">{row.mandi}</div>
                    <div className="text-xs text-slate-400">{row.district}, {row.state}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-slate-700">{row.crop}</span>
                      <span className="text-[10px] px-2 py-0.5 bg-slate-100 text-slate-500 rounded-full font-medium">{row.variety}</span>
                    </div>
                    <div className="text-[10px] text-slate-400 mt-1">{row.date}</div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="text-sm font-medium text-slate-600">₹{row.minPrice} - ₹{row.maxPrice}</div>
                    <div className="text-[10px] text-slate-400">per Quintal</div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="text-lg font-extrabold text-green-700">₹{row.modalPrice}</div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase ${
                      row.status === 'Fresh' ? 'bg-green-100 text-green-700' :
                      row.status === 'Stale' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {row.status === 'Fresh' && <CheckCircle size={10} />}
                      {row.status === 'Stale' && <Clock size={10} />}
                      {row.status === 'Missing' && <AlertTriangle size={10} />}
                      {row.status}
                    </div>
                    <div className="text-[10px] text-slate-400 mt-1">{row.lastUpdated}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-bold border ${
                      row.source === 'eNAM' ? 'bg-blue-50 text-blue-700 border-blue-100' :
                      row.source === 'Agmarknet' ? 'bg-indigo-50 text-indigo-700 border-indigo-100' :
                      'bg-slate-50 text-slate-600 border-slate-200'
                    }`}>
                      {row.source}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="px-6 py-4 bg-slate-50 border-t flex items-center justify-between">
          <p className="text-xs text-slate-500 font-medium">Showing 1-5 of 12,402 records</p>
          <div className="flex gap-2">
            <button className="p-1.5 border bg-white rounded-lg text-slate-400 hover:text-slate-600 disabled:opacity-50">
              <ChevronLeft size={20} />
            </button>
            <button className="p-1.5 border bg-white rounded-lg text-slate-600 hover:bg-slate-50">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      <div className="flex items-start gap-3 p-4 bg-blue-50 text-blue-800 rounded-2xl border border-blue-100 text-sm">
        <HelpCircle size={18} className="mt-0.5 flex-shrink-0" />
        <div>
          <span className="font-bold">Pro Tip:</span> Ask Ajrasakha to compare these prices with your local mandi. Just click the floating chat icon in the corner!
        </div>
      </div>
    </div>
  );
};

export default LivePrices;
