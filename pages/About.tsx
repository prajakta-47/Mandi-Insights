
import React from 'react';
import { 
  Info, Database, ShieldCheck, Globe, 
  Layers, CheckCircle2, AlertTriangle, Cpu, 
  BarChart3, BrainCircuit 
} from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto space-y-16 py-12 px-4">
      <section className="text-center space-y-6">
        <h1 className="text-5xl font-extrabold text-slate-900 tracking-tight">The Vision for <span className="text-green-700">Mandi-Insights</span></h1>
        <p className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed">
          Unifying India's fragmented agricultural markets to empower farmers with data-driven decision making.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { icon: <Database />, title: "Aggregation", desc: "Scraping over 15+ disparate state portals hourly to provide a single view." },
          { icon: <ShieldCheck />, title: "Normalization", desc: "Removing outliers and reconciling conflicting prices using AI logic." },
          { icon: <Globe />, title: "Access", desc: "Multi-lingual platform accessible to users in even the most remote mandis." },
        ].map((feat, i) => (
          <div key={i} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-green-100 text-green-700 rounded-2xl flex items-center justify-center">
              {feat.icon}
            </div>
            <h3 className="text-xl font-bold text-slate-800">{feat.title}</h3>
            <p className="text-slate-500 text-sm leading-relaxed">{feat.desc}</p>
          </div>
        ))}
      </div>

      <section className="bg-white p-12 rounded-[3rem] border border-slate-200 shadow-sm space-y-12">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-blue-100 text-blue-700 rounded-2xl">
            <Layers size={24} />
          </div>
          <h2 className="text-3xl font-bold text-slate-900">Methodology & Sources</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="space-y-4">
              <h4 className="font-bold text-slate-800 uppercase text-xs tracking-widest flex items-center gap-2">
                <CheckCircle2 className="text-green-500" size={16} /> Data Sources
              </h4>
              <ul className="space-y-3 text-slate-600">
                <li className="flex gap-3"><span className="font-bold text-slate-900">eNAM:</span> Direct integration with the National Agriculture Market API.</li>
                <li className="flex gap-3"><span className="font-bold text-slate-900">Agmarknet:</span> Weekly and daily syncs with govt. historical databases.</li>
                <li className="flex gap-3"><span className="font-bold text-slate-900">State Portals:</span> Specialized scrapers for Bihar, MP, UP, and 12 other states.</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold text-slate-800 uppercase text-xs tracking-widest flex items-center gap-2">
                <Cpu className="text-blue-500" size={16} /> Cleaning Logic
              </h4>
              <p className="text-slate-600 leading-relaxed text-sm">
                Our pipeline identifies duplicates across eNAM and local portals. We use a weighted modal logic where verified crowdsourced data acts as a ground-truth anchor for conflicting reports.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 space-y-4">
              <h4 className="font-bold text-slate-800 flex items-center gap-2">
                <BrainCircuit className="text-green-600" />
                Intelligence Layer
              </h4>
              <p className="text-sm text-slate-500 leading-relaxed">
                We don't just show data; we interpret it. Our AI models analyze arrival volumes vs price trends to detect artificial shortages and arbitrage opportunities.
              </p>
              <div className="flex gap-4">
                 <div className="bg-white p-3 rounded-xl shadow-sm text-xs font-bold text-slate-700">Forecasting</div>
                 <div className="bg-white p-3 rounded-xl shadow-sm text-xs font-bold text-slate-700">Sentiment Analysis</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-red-50 p-8 rounded-3xl border border-red-100 flex items-start gap-4">
        <AlertTriangle className="text-red-500 mt-1 flex-shrink-0" />
        <div className="space-y-2">
          <h4 className="font-bold text-red-900">Accuracy & Limitations</h4>
          <p className="text-sm text-red-800/80 leading-relaxed italic">
            Mandi-Insights is a data aggregation platform. While we strive for 99% accuracy, market prices can change rapidly. 78% of APMCs are not digitally integrated with eNAM, leading to occasional manual reporting delays from state-level sources. Always verify with local traders before large transactions.
          </p>
        </div>
      </section>
      
      <div className="text-center pt-8">
         <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-4">A Prototype Project By</p>
         <div className="flex justify-center items-center gap-2 text-slate-800 font-bold text-xl tracking-tight">
            <div className="bg-green-700 p-1.5 rounded-lg">
               <Layers className="text-white" size={20} />
            </div>
            <span>Mandi-Insights Intelligence Lab</span>
         </div>
      </div>
    </div>
  );
};

export default About;
