
import React from 'react';
import { 
  Building2, CheckCircle2, AlertCircle, Clock, 
  ArrowUpRight, BarChart3, Globe, Database
} from 'lucide-react';
import { 
  PieChart, Pie, Cell, ResponsiveContainer, 
  Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid 
} from 'recharts';
import { StateSummary } from '../types';

const NATIONAL_SUMMARY = [
  { name: 'eNAM Integrated', value: 1522, color: '#15803d' },
  { name: 'State Portals (Non-eNAM)', value: 5499, color: '#b91c1c' },
];

const STATE_COVERAGE: StateSummary[] = [
  { name: 'Punjab', totalAPMCs: 450, covered: 442, eNAM: 425, nonENAM: 17, percentage: 98 },
  { name: 'Haryana', totalAPMCs: 210, covered: 205, eNAM: 198, nonENAM: 7, percentage: 97 },
  { name: 'Maharashtra', totalAPMCs: 850, covered: 720, eNAM: 450, nonENAM: 270, percentage: 84 },
  { name: 'Uttar Pradesh', totalAPMCs: 620, covered: 540, eNAM: 520, nonENAM: 20, percentage: 87 },
  { name: 'Karnataka', totalAPMCs: 510, covered: 410, eNAM: 310, nonENAM: 100, percentage: 80 },
  { name: 'Bihar', totalAPMCs: 480, covered: 58, eNAM: 0, nonENAM: 58, percentage: 12 },
];

const CoverageTracker: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">APMC Coverage & Integration Tracker</h1>
          <p className="text-slate-500 text-sm">Monitoring the progress of digital integration across 7,021 mandis.</p>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-xl border border-blue-100 text-xs font-bold">
          <Clock size={14} />
          Refreshed: 15 mins ago
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-6">
          <h3 className="font-bold text-slate-800">Integration Mix</h3>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={NATIONAL_SUMMARY}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {NATIONAL_SUMMARY.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-3">
            {NATIONAL_SUMMARY.map((s, i) => (
              <div key={i} className="flex justify-between items-center text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: s.color }} />
                  <span className="text-slate-600">{s.name}</span>
                </div>
                <span className="font-bold text-slate-800">{s.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2 bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-6">
          <h3 className="font-bold text-slate-800">National Integration Gap</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 bg-green-50 rounded-2xl border border-green-100">
              <p className="text-xs font-bold text-green-700 uppercase mb-1">Total Mapped</p>
              <p className="text-3xl font-extrabold text-green-800">7,021</p>
              <p className="text-[10px] text-green-600 mt-2 flex items-center gap-1"><ArrowUpRight size={10} /> 100% Discovery</p>
            </div>
            <div className="p-4 bg-blue-50 rounded-2xl border border-blue-100">
              <p className="text-xs font-bold text-blue-700 uppercase mb-1">eNAM Live</p>
              <p className="text-3xl font-extrabold text-blue-800">1,522</p>
              <p className="text-[10px] text-blue-600 mt-2">21.6% Integration</p>
            </div>
            <div className="p-4 bg-red-50 rounded-2xl border border-red-100">
              <p className="text-xs font-bold text-red-700 uppercase mb-1">Non-eNAM Gap</p>
              <p className="text-3xl font-extrabold text-red-800">5,499</p>
              <p className="text-[10px] text-red-600 mt-2">78.4% fragmented data</p>
            </div>
          </div>
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-4">
            <h4 className="text-sm font-bold text-slate-700">Recent Integrations</h4>
            <div className="space-y-3">
              {[
                { name: 'Kurali Mandi (Punjab)', date: 'May 18, 2024', status: 'eNAM' },
                { name: 'Aurangabad (Maharashtra)', date: 'May 15, 2024', status: 'eNAM' },
                { name: 'Siwan (Bihar)', date: 'May 12, 2024', status: 'State Portal' },
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center bg-white p-3 rounded-xl shadow-sm border border-slate-100">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 size={16} className="text-green-500" />
                    <div>
                      <p className="text-xs font-bold text-slate-800">{item.name}</p>
                      <p className="text-[10px] text-slate-400">{item.date}</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 bg-slate-100 text-slate-500 rounded-full uppercase">{item.status}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
        <h3 className="font-bold text-slate-800 mb-6">State-wise Integration Status</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="text-[10px] font-bold text-slate-400 uppercase border-b">
                <th className="pb-4 px-2 text-center">State</th>
                <th className="pb-4 px-2 text-center">Total APMCs</th>
                <th className="pb-4 px-2 text-center">Covered</th>
                <th className="pb-4 px-2 text-center">eNAM</th>
                <th className="pb-4 px-2 text-center">Non-eNAM</th>
                <th className="pb-4 px-2 text-center">Coverage %</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {STATE_COVERAGE.map((s, i) => (
                <tr key={i} className="hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-2 font-bold text-slate-800 text-center">{s.name}</td>
                  <td className="py-4 px-2 text-sm text-slate-600 text-center font-medium">{s.totalAPMCs}</td>
                  <td className="py-4 px-2 text-sm text-slate-600 text-center font-bold text-green-700">{s.covered}</td>
                  <td className="py-4 px-2 text-sm text-slate-600 text-center">
                    <span className="bg-blue-50 text-blue-700 px-2 py-0.5 rounded-lg font-bold">{s.eNAM}</span>
                  </td>
                  <td className="py-4 px-2 text-sm text-slate-600 text-center">
                    <span className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded-lg font-bold">{s.nonENAM}</span>
                  </td>
                  <td className="py-4 px-2 text-center">
                    <div className="flex items-center gap-3 justify-center">
                      <div className="w-24 bg-slate-100 h-1.5 rounded-full overflow-hidden">
                        <div 
                          className={`h-full ${s.percentage > 90 ? 'bg-green-500' : s.percentage > 50 ? 'bg-yellow-500' : 'bg-red-500'}`} 
                          style={{ width: `${s.percentage}%` }} 
                        />
                      </div>
                      <span className="text-xs font-bold text-slate-700">{s.percentage}%</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-green-900 rounded-3xl p-8 text-white space-y-4">
          <h4 className="text-xl font-bold flex items-center gap-2">
            <Globe className="text-green-400" />
            Integration Roadmap
          </h4>
          <p className="text-slate-300 text-sm leading-relaxed">
            Mandi-Insights is currently working with state governments in Bihar and West Bengal to digitize local portal data. 
            We expect to bring 200+ additional mandis online by Q3 2024.
          </p>
          <div className="flex gap-4">
            <div className="bg-white/10 p-3 rounded-2xl border border-white/10 flex-1">
              <p className="text-xs font-bold text-green-400 uppercase">Q2 Target</p>
              <p className="text-lg font-bold">120 Mandis</p>
            </div>
            <div className="bg-white/10 p-3 rounded-2xl border border-white/10 flex-1">
              <p className="text-xs font-bold text-blue-400 uppercase">Status</p>
              <p className="text-lg font-bold">On Track</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-6">
          <h4 className="text-lg font-bold flex items-center gap-2 text-slate-800">
            <Database className="text-slate-400" />
            Data Completeness Score
          </h4>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-xs font-bold text-slate-500 mb-1">
                <span>Prices Reported</span>
                <span>94%</span>
              </div>
              <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                <div className="bg-green-500 h-full w-[94%]" />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-xs font-bold text-slate-500 mb-1">
                <span>Variety Detail</span>
                <span>72%</span>
              </div>
              <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                <div className="bg-yellow-500 h-full w-[72%]" />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-xs font-bold text-slate-500 mb-1">
                <span>Arrival Volume</span>
                <span>85%</span>
              </div>
              <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                <div className="bg-blue-500 h-full w-[85%]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoverageTracker;
