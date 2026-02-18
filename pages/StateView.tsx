
import React from 'react';
import { 
  Building2, MapPin, TrendingUp, Download, 
  Search, Info, CheckCircle, AlertTriangle 
} from 'lucide-react';

const StateView: React.FC<{ stateName: string }> = ({ stateName }) => {
  return (
    <div className="space-y-8">
      <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col md:flex-row justify-between items-center gap-6">
         <div className="flex items-center gap-6">
            <div className="h-20 w-20 bg-green-100 rounded-2xl flex items-center justify-center text-green-700 border border-green-200">
               <Building2 size={40} />
            </div>
            <div>
               <h1 className="text-3xl font-extrabold text-slate-800">{stateName}</h1>
               <div className="flex gap-4 mt-2">
                  <span className="text-xs font-bold px-2 py-1 bg-blue-100 text-blue-700 rounded-lg uppercase">450 Mandis</span>
                  <span className="text-xs font-bold px-2 py-1 bg-green-100 text-green-700 rounded-lg uppercase">95% Integration</span>
               </div>
            </div>
         </div>
         <div className="flex gap-3">
            <button className="px-6 py-3 bg-white border border-slate-200 rounded-xl font-bold text-slate-600 hover:bg-slate-50">State Report (PDF)</button>
            <button className="px-6 py-3 bg-green-700 text-white rounded-xl font-bold hover:bg-green-800">Live View</button>
         </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <h4 className="text-xs font-bold text-slate-400 uppercase">Top District (Potato)</h4>
            <div className="flex justify-between items-end">
               <div>
                  <p className="text-xl font-bold">Agra</p>
                  <p className="text-xs text-slate-500">12 Active Mandis</p>
               </div>
               <span className="text-lg font-bold text-green-700">₹1,850</span>
            </div>
         </div>
         <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <h4 className="text-xs font-bold text-slate-400 uppercase">Integration Progress</h4>
            <div className="space-y-2">
               <div className="flex justify-between text-xs font-bold">
                  <span>eNAM Mapped</span>
                  <span>425 / 450</span>
               </div>
               <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="bg-green-500 h-full" style={{ width: '94%' }} />
               </div>
            </div>
         </div>
         <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <h4 className="text-xs font-bold text-slate-400 uppercase">Alerts Active</h4>
            <div className="flex items-center gap-3">
               <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse" />
               <p className="text-sm font-semibold">4 Districts showing stagnant pricing</p>
            </div>
         </div>
      </div>

      <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="flex justify-between items-center mb-6">
           <h3 className="font-bold text-slate-800">District-wise Summaries</h3>
           <div className="relative">
             <Search className="absolute left-3 top-2 text-slate-400" size={16} />
             <input className="bg-slate-50 border border-slate-200 rounded-lg pl-9 pr-4 py-1.5 text-xs outline-none" placeholder="Filter district..." />
           </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="text-[10px] font-bold text-slate-400 uppercase border-b">
                 <th className="pb-4 px-2">District</th>
                 <th className="pb-4 px-2">Total Mandis</th>
                 <th className="pb-4 px-2">Avg Modal Price</th>
                 <th className="pb-4 px-2">Arrivals (MT)</th>
                 <th className="pb-4 px-2">Data Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
               {[
                 { name: 'Amritsar', mandis: 12, avg: 1950, arrivals: 4500, status: 'Fresh' },
                 { name: 'Ludhiana', mandis: 18, avg: 2050, arrivals: 8200, status: 'Fresh' },
                 { name: 'Jalandhar', mandis: 10, avg: 1880, arrivals: 3100, status: 'Stale' },
                 { name: 'Patiala', mandis: 15, avg: 1920, arrivals: 5600, status: 'Fresh' },
                 { name: 'Bathinda', mandis: 22, avg: 2100, arrivals: 9400, status: 'Fresh' },
               ].map((d, i) => (
                 <tr key={i} className="hover:bg-slate-50">
                    <td className="py-4 px-2 font-bold text-slate-700">{d.name}</td>
                    <td className="py-4 px-2 text-sm text-slate-600">{d.mandis}</td>
                    <td className="py-4 px-2 text-sm font-bold text-green-700">₹{d.avg}</td>
                    <td className="py-4 px-2 text-sm text-slate-600 font-medium">{d.arrivals.toLocaleString()}</td>
                    <td className="py-4 px-2">
                       <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${d.status === 'Fresh' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                          {d.status}
                       </span>
                    </td>
                 </tr>
               ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StateView;
