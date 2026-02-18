
import React from 'react';
import { 
  Terminal, Code, Copy, Zap, Lock, 
  Globe, Clock, ArrowRight, CheckCircle2 
} from 'lucide-react';

const ApiDocs: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-12 py-8 px-4">
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold uppercase">
          <Terminal size={14} /> Developer Ecosystem
        </div>
        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">Mandi-Insights API Docs</h1>
        <p className="text-xl text-slate-500 leading-relaxed">
          The Mandi-Insights API allows developers to programmatically access cleaned, normalized, and real-time Indian agricultural market data.
        </p>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
          <div className="w-12 h-12 bg-blue-100 text-blue-700 rounded-2xl flex items-center justify-center">
            <Lock size={24} />
          </div>
          <h3 className="text-xl font-bold">Authentication</h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            All requests must include an <code className="bg-slate-100 px-1 rounded text-slate-800 font-mono">X-API-KEY</code> header. You can obtain a production key from the Admin Dashboard.
          </p>
        </div>
        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
          <div className="w-12 h-12 bg-purple-100 text-purple-700 rounded-2xl flex items-center justify-center">
            <Zap size={24} />
          </div>
          <h3 className="text-xl font-bold">Rate Limits</h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            Standard Tier: 1,000 requests / hour.<br />
            Agri-Tech Partner Tier: 50,000 requests / hour.
          </p>
        </div>
      </section>

      <section className="space-y-8">
        <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-3">
          <Code className="text-green-600" />
          Common Endpoints
        </h2>

        <div className="space-y-6">
          <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
            <div className="p-6 bg-slate-50 border-b flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="bg-green-600 text-white px-3 py-1 rounded-lg text-xs font-bold uppercase">GET</span>
                <code className="text-sm font-bold text-slate-700">/api/v1/prices</code>
              </div>
              <button className="text-slate-400 hover:text-slate-600">
                <Copy size={18} />
              </button>
            </div>
            <div className="p-8 space-y-6">
              <p className="text-sm text-slate-600">Fetch real-time prices filtered by crop, state, or district.</p>
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase mb-4 tracking-widest">Parameters</h4>
                <div className="overflow-x-auto">
                   <table className="w-full text-left text-sm">
                      <thead className="bg-slate-50">
                        <tr>
                          <th className="p-2 font-bold text-slate-500">Name</th>
                          <th className="p-2 font-bold text-slate-500">Type</th>
                          <th className="p-2 font-bold text-slate-500">Description</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        <tr><td className="p-2 font-mono text-xs">crop</td><td className="p-2">string</td><td className="p-2 text-slate-500 italic">Optional. e.g. "Potato"</td></tr>
                        <tr><td className="p-2 font-mono text-xs">state</td><td className="p-2">string</td><td className="p-2 text-slate-500 italic">Optional. e.g. "Punjab"</td></tr>
                        <tr><td className="p-2 font-mono text-xs">limit</td><td className="p-2">integer</td><td className="p-2 text-slate-500 italic">Default 50, Max 1000</td></tr>
                      </tbody>
                   </table>
                </div>
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase mb-4 tracking-widest">Sample Response</h4>
                <div className="bg-slate-900 rounded-2xl p-6 font-mono text-xs text-green-400 overflow-x-auto">
<pre>{`{
  "status": "success",
  "data": [
    {
      "mandi": "Ludhiana(F&V)",
      "crop": "Potato",
      "variety": "Hybrid",
      "prices": {
        "min": 1800,
        "max": 2200,
        "modal": 2000
      },
      "source": "eNAM",
      "timestamp": "2024-05-20T10:30:00Z"
    }
  ]
}`}</pre>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
            <div className="p-6 bg-slate-50 border-b flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="bg-green-600 text-white px-3 py-1 rounded-lg text-xs font-bold uppercase">GET</span>
                <code className="text-sm font-bold text-slate-700">/api/v1/trends</code>
              </div>
              <button className="text-slate-400 hover:text-slate-600">
                <Copy size={18} />
              </button>
            </div>
            <div className="p-8">
              <p className="text-sm text-slate-600">Historical trend analytics and volatility scores for a specific commodity.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-green-900 rounded-[3rem] p-12 text-white flex flex-col md:flex-row items-center gap-12">
         <div className="flex-1 space-y-6 text-center md:text-left">
            <h2 className="text-3xl font-extrabold">Ready to integrate?</h2>
            <p className="text-green-100/70">Join 150+ agri-tech platforms already powered by Mandi-Insights.</p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
               <div className="flex items-center gap-2 text-sm font-bold"><CheckCircle2 className="text-green-400" size={18} /> SDKs for Python, JS</div>
               <div className="flex items-center gap-2 text-sm font-bold"><CheckCircle2 className="text-green-400" size={18} /> Postman Collections</div>
            </div>
            <button className="px-8 py-4 bg-white text-green-900 font-extrabold rounded-2xl hover:bg-green-50 transition-all flex items-center justify-center gap-2 mx-auto md:mx-0">
               Get API Key <ArrowRight size={20} />
            </button>
         </div>
         <div className="hidden md:block w-48 h-48 bg-white/10 rounded-full border border-white/20 flex items-center justify-center">
            <Globe size={80} className="text-green-400 opacity-40 animate-pulse" />
         </div>
      </section>
    </div>
  );
};

export default ApiDocs;
