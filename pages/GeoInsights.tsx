
import React from 'react';
import { MapPin, Info, Layers, Maximize2 } from 'lucide-react';

const GeoInsights: React.FC = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-slate-800">Geographic Insights</h1>
        <p className="text-slate-500 text-sm">Visualizing price clusters and market coverage across India.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-4 rounded-3xl border border-slate-200 shadow-sm relative h-[600px] overflow-hidden group">
             {/* Placeholder for Interactive Map */}
             <div className="absolute inset-0 bg-slate-100 flex flex-col items-center justify-center p-12 text-center space-y-4">
                <div className="w-full h-full bg-slate-200 rounded-2xl flex items-center justify-center relative">
                   <img 
                    src="https://picsum.photos/seed/map/800/600" 
                    className="w-full h-full object-cover opacity-50 grayscale mix-blend-multiply" 
                    alt="Map Placeholder"
                   />
                   <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <div className="p-4 bg-white/90 backdrop-blur rounded-2xl shadow-xl border border-slate-200 max-w-xs">
                         <div className="flex items-center gap-2 mb-2">
                            <MapPin className="text-green-700" size={18} />
                            <span className="font-bold text-slate-800">Cluster: Nashik</span>
                         </div>
                         <p className="text-xs text-slate-500 mb-3 text-left">Onion price hotspot. 12 APMCs integrated. Avg rate ₹1,850.</p>
                         <button className="w-full py-2 bg-green-700 text-white text-xs font-bold rounded-lg hover:bg-green-800">Explore Cluster</button>
                      </div>
                   </div>
                </div>
             </div>

             <div className="absolute top-8 left-8 space-y-2">
                <button className="w-10 h-10 bg-white shadow-lg rounded-xl flex items-center justify-center text-slate-600 hover:bg-slate-50 border border-slate-200">
                  <Maximize2 size={18} />
                </button>
                <button className="w-10 h-10 bg-white shadow-lg rounded-xl flex items-center justify-center text-slate-600 hover:bg-slate-50 border border-slate-200">
                  <Layers size={18} />
                </button>
             </div>

             <div className="absolute bottom-8 right-8 bg-white/90 backdrop-blur p-4 rounded-2xl shadow-lg border border-slate-200 space-y-2">
                <h5 className="text-[10px] font-bold text-slate-400 uppercase">Price Heatmap</h5>
                <div className="flex items-center gap-2">
                   <div className="w-full h-2 rounded-full bg-gradient-to-r from-green-500 via-yellow-400 to-red-500" />
                </div>
                <div className="flex justify-between text-[10px] font-bold text-slate-600 uppercase">
                   <span>Low</span>
                   <span>High</span>
                </div>
             </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-6">
            <h3 className="font-bold text-slate-800">Interstate Price Gaps</h3>
            <div className="space-y-4">
               {[
                 { from: 'Punjab', to: 'Delhi', gap: '+12%', color: 'bg-green-100 text-green-700' },
                 { from: 'Maharashtra', to: 'Karnataka', gap: '-5%', color: 'bg-red-100 text-red-700' },
                 { from: 'UP', to: 'Bihar', gap: '+22%', color: 'bg-yellow-100 text-yellow-700' },
                 { from: 'MP', to: 'Gujarat', gap: '+8%', color: 'bg-green-100 text-green-700' },
               ].map((item, i) => (
                 <div key={i} className="flex items-center justify-between p-3 bg-slate-50 rounded-2xl border border-slate-100">
                    <div className="text-xs font-semibold text-slate-600">
                       {item.from} <span className="mx-1">→</span> {item.to}
                    </div>
                    <div className={`px-2 py-1 rounded-lg text-xs font-bold ${item.color}`}>
                       {item.gap}
                    </div>
                 </div>
               ))}
            </div>
            <button className="w-full py-3 border border-slate-200 rounded-xl text-sm font-bold text-slate-600 hover:bg-slate-50">Compare All States</button>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-6">
            <h3 className="font-bold text-slate-800">APMC Distribution</h3>
            <div className="space-y-4">
               <div className="flex justify-between items-end">
                  <div className="text-xs text-slate-500">Highest Coverage</div>
                  <div className="font-bold text-green-700">Punjab (98%)</div>
               </div>
               <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-green-500 h-full" style={{ width: '98%' }} />
               </div>

               <div className="flex justify-between items-end">
                  <div className="text-xs text-slate-500">Lowest Coverage</div>
                  <div className="font-bold text-red-700">Bihar (12%)</div>
               </div>
               <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-red-500 h-full" style={{ width: '12%' }} />
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeoInsights;
