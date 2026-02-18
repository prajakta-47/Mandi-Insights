
import React from 'react';
import { 
  Activity, ShieldAlert, Cpu, Database, 
  Terminal, RefreshCw, CheckCircle, XCircle 
} from 'lucide-react';

const AdminPanel: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Admin Command Center</h1>
          <p className="text-slate-500 text-sm">Monitor scrapers, source health, and manual overrides.</p>
        </div>
        <div className="bg-slate-900 text-green-400 px-4 py-2 rounded-xl font-mono text-xs border border-slate-800 flex items-center gap-2">
           <Terminal size={14} />
           Root Session Active
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
           <div className="flex justify-between items-center">
             <span className="text-[10px] font-bold text-slate-400 uppercase">Active Scrapers</span>
             <Database size={16} className="text-green-500" />
           </div>
           <p className="text-2xl font-bold">142 / 145</p>
           <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
             <div className="bg-green-500 h-full" style={{ width: '97%' }} />
           </div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
           <div className="flex justify-between items-center">
             <span className="text-[10px] font-bold text-slate-400 uppercase">Avg Response Time</span>
             <Cpu size={16} className="text-blue-500" />
           </div>
           <p className="text-2xl font-bold">420ms</p>
           <p className="text-[10px] text-green-600 font-bold uppercase tracking-wider">-12% Optimization</p>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
           <div className="flex justify-between items-center">
             <span className="text-[10px] font-bold text-slate-400 uppercase">Source Failures</span>
             <ShieldAlert size={16} className="text-red-500" />
           </div>
           <p className="text-2xl font-bold text-red-600">3</p>
           <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Bihar State Portal (Down)</p>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
           <div className="flex justify-between items-center">
             <span className="text-[10px] font-bold text-slate-400 uppercase">Data Quality Score</span>
             <Activity size={16} className="text-purple-500" />
           </div>
           <p className="text-2xl font-bold">98.2</p>
           <p className="text-[10px] text-purple-600 font-bold uppercase tracking-wider">Top Percentile</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
         <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
            <div className="flex justify-between items-center mb-6">
               <h3 className="font-bold text-slate-800">Scraper Health Dashboard</h3>
               <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors"><RefreshCw size={18} className="text-slate-400" /></button>
            </div>
            <div className="space-y-4">
               {[
                 { source: 'eNAM Global API', status: 'Online', load: '12%', color: 'text-green-600' },
                 { source: 'Agmarknet Scraper', status: 'Online', load: '45%', color: 'text-green-600' },
                 { source: 'Punjab State Portal', status: 'Online', load: '82%', color: 'text-green-600' },
                 { source: 'Bihar State Portal', status: 'Offline', load: '0%', color: 'text-red-600' },
                 { source: 'MP Mandi Portal', status: 'Degraded', load: '95%', color: 'text-yellow-600' },
               ].map((s, i) => (
                 <div key={i} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <div className="flex items-center gap-4">
                       <div className={`w-3 h-3 rounded-full ${s.status === 'Online' ? 'bg-green-500' : s.status === 'Offline' ? 'bg-red-500' : 'bg-yellow-500'}`} />
                       <div>
                          <p className="font-bold text-sm text-slate-700">{s.source}</p>
                          <p className={`text-[10px] font-bold uppercase ${s.color}`}>{s.status}</p>
                       </div>
                    </div>
                    <div className="text-right">
                       <p className="text-xs font-bold text-slate-400 uppercase">Server Load</p>
                       <p className="text-sm font-bold text-slate-700">{s.load}</p>
                    </div>
                 </div>
               ))}
            </div>
         </div>

         <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
            <h3 className="font-bold text-slate-800 mb-6">Crowdsource Approval Queue</h3>
            <div className="space-y-4">
               {[
                 { user: 'Ram Singh', mandi: 'Agra', crop: 'Potato', price: '₹1,850', time: '5m ago' },
                 { user: 'Sita Devi', mandi: 'Nashik', crop: 'Onion', price: '₹1,920', time: '12m ago' },
                 { user: 'Amit Kumar', mandi: 'Patna', crop: 'Paddy', price: '₹2,050', time: '1h ago' },
               ].map((q, i) => (
                 <div key={i} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <div className="space-y-1">
                       <p className="text-xs font-bold text-slate-400">{q.time}</p>
                       <p className="font-bold text-sm text-slate-800">{q.crop} at {q.mandi}</p>
                       <p className="text-lg font-extrabold text-green-700">{q.price}</p>
                    </div>
                    <div className="flex gap-2">
                       <button className="p-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200"><XCircle size={18} /></button>
                       <button className="p-2 bg-green-100 text-green-600 rounded-lg hover:bg-green-200"><CheckCircle size={18} /></button>
                    </div>
                 </div>
               ))}
               <button className="w-full py-3 bg-slate-100 text-slate-600 text-sm font-bold rounded-xl hover:bg-slate-200">View All Pending Submissions</button>
            </div>
         </div>
      </div>
    </div>
  );
};

export default AdminPanel;
