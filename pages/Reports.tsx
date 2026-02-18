
import React from 'react';
import { 
  FileText, Download, Calendar, Filter, 
  ChevronRight, BarChart, Clock, Database,
  FileSpreadsheet, FilePieChart
} from 'lucide-react';
import { CROPS, STATES } from '../constants';

const RECENT_REPORTS = [
  { id: '1', name: 'Q1 National Mandi Trend', date: 'May 1, 2024', type: 'PDF' },
  { id: '2', name: 'Potato Price Volatility Index', date: 'Apr 25, 2024', type: 'XLSX' },
  { id: '3', name: 'Maharashtra Mandi Summary', date: 'Apr 18, 2024', type: 'CSV' },
  { id: '4', name: 'eNAM Integration Gap Analysis', date: 'Mar 30, 2024', type: 'PDF' },
];

const Reports: React.FC = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-slate-800">Reports & Data Export</h1>
        <p className="text-slate-500 text-sm">Generate custom historical data reports and market summaries.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-8">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-green-100 text-green-700 rounded-2xl">
                <Filter size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800">Custom Report Builder</h3>
                <p className="text-sm text-slate-400">Select parameters to generate a detailed CSV or PDF report.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase">Crop Type</label>
                <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-green-500/20 outline-none">
                  <option>All Crops</option>
                  {CROPS.map(c => <option key={c}>{c}</option>)}
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase">Region (State)</label>
                <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-green-500/20 outline-none">
                  <option>All India</option>
                  {STATES.map(s => <option key={s}>{s}</option>)}
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase">Time Horizon</label>
                <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-green-500/20 outline-none">
                  <option>Last 30 Days</option>
                  <option>Last 3 Months</option>
                  <option>Last 12 Months</option>
                  <option>Custom Range</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase">Data Source</label>
                <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-green-500/20 outline-none">
                  <option>Unified (Aggregated)</option>
                  <option>eNAM Only</option>
                  <option>Agmarknet Only</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="flex-1 flex items-center justify-center gap-3 px-6 py-4 bg-green-700 text-white rounded-2xl font-bold hover:bg-green-800 transition-all shadow-lg">
                <FileSpreadsheet size={20} />
                Generate CSV Report
              </button>
              <button className="flex-1 flex items-center justify-center gap-3 px-6 py-4 bg-slate-800 text-white rounded-2xl font-bold hover:bg-slate-900 transition-all shadow-lg">
                <FilePieChart size={20} />
                Generate PDF Insights
              </button>
            </div>
          </div>

          <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
            <h3 className="font-bold text-slate-800 mb-6 flex items-center gap-2">
              <Clock className="text-slate-400" size={18} />
              Automated Data Summaries
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-2xl border border-slate-200 space-y-2">
                <p className="text-xs font-bold text-slate-400 uppercase">Price Momentum</p>
                <p className="text-sm font-medium text-slate-700 leading-relaxed">
                  Average potato prices rose <span className="text-green-600 font-bold">12.4%</span> across 450 APMCs this week.
                </p>
              </div>
              <div className="bg-white p-4 rounded-2xl border border-slate-200 space-y-2">
                <p className="text-xs font-bold text-slate-400 uppercase">Data Freshness</p>
                <p className="text-sm font-medium text-slate-700 leading-relaxed">
                  eNAM data latency improved by <span className="text-blue-600 font-bold">18%</span> in Bihar cluster.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-6">
            <h3 className="font-bold text-slate-800">Recent Generated Reports</h3>
            <div className="space-y-4">
              {RECENT_REPORTS.map((report) => (
                <div key={report.id} className="group flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:border-green-200 transition-all cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className={`p-2 rounded-lg ${report.type === 'PDF' ? 'bg-red-50 text-red-600' : 'bg-green-50 text-green-600'}`}>
                      <FileText size={18} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-800 group-hover:text-green-700">{report.name}</p>
                      <p className="text-[10px] text-slate-400">{report.date} • {report.type}</p>
                    </div>
                  </div>
                  <Download size={16} className="text-slate-300 group-hover:text-green-600" />
                </div>
              ))}
              <button className="w-full py-3 text-xs font-bold text-slate-500 hover:text-green-700 uppercase tracking-widest">View Archives</button>
            </div>
          </div>

          <div className="bg-green-900 rounded-3xl p-8 text-white space-y-6">
            <div className="w-12 h-12 bg-green-500 rounded-2xl flex items-center justify-center shadow-lg">
              <Database size={24} />
            </div>
            <h4 className="text-xl font-bold">API for Researchers</h4>
            <p className="text-slate-300 text-sm leading-relaxed">
              Need programmatic access to historical records? Check out our developer portal for bulk export endpoints.
            </p>
            <button className="w-full py-3 bg-white text-green-900 font-bold rounded-xl hover:bg-green-50 transition-colors flex items-center justify-center gap-2">
              Developer Portal <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
