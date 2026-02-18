
import React, { useState } from 'react';
import { 
  Users, UserPlus, MapPin, Tag, IndianRupee, 
  Send, ShieldCheck, Clock, CheckCircle, 
  AlertTriangle, XCircle, Info
} from 'lucide-react';
import { CROPS, STATES } from '../constants';

const Crowdsource: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Crowdsourced Data Submission</h1>
          <p className="text-slate-500 text-sm">Help fellow farmers by reporting prices from your local mandi.</p>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-purple-50 text-purple-700 rounded-xl border border-purple-100 text-xs font-bold">
          <ShieldCheck size={14} />
          Trust Score Enabled
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-8">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-purple-100 text-purple-700 rounded-2xl">
                <UserPlus size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-800">Submit Market Price</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase">Crop</label>
                  <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-purple-500/20 outline-none">
                    {CROPS.map(c => <option key={c}>{c}</option>)}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase">Variety</label>
                  <input type="text" placeholder="e.g. Hybrid, Local" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-purple-500/20 outline-none" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase">State</label>
                  <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-purple-500/20 outline-none">
                    {STATES.map(s => <option key={s}>{s}</option>)}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase">Mandi Name</label>
                  <input type="text" placeholder="e.g. Azadpur" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-purple-500/20 outline-none" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase">Min Price</label>
                  <div className="relative">
                    <IndianRupee className="absolute left-3 top-3.5 text-slate-400" size={14} />
                    <input type="number" className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-4 py-3 text-sm focus:ring-2 focus:ring-purple-500/20 outline-none" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase">Max Price</label>
                  <div className="relative">
                    <IndianRupee className="absolute left-3 top-3.5 text-slate-400" size={14} />
                    <input type="number" className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-4 py-3 text-sm focus:ring-2 focus:ring-purple-500/20 outline-none" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase">Modal Price</label>
                  <div className="relative">
                    <IndianRupee className="absolute left-3 top-3.5 text-slate-400" size={14} />
                    <input type="number" className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-4 py-3 text-sm focus:ring-2 focus:ring-purple-500/20 outline-none" />
                  </div>
                </div>
              </div>

              {isSubmitted ? (
                <div className="bg-green-100 text-green-700 p-4 rounded-2xl border border-green-200 flex items-center gap-3 animate-in zoom-in-95 duration-200">
                  <CheckCircle size={20} />
                  <span className="font-bold">Thank you! Your data has been sent for verification.</span>
                </div>
              ) : (
                <button type="submit" className="w-full py-4 bg-purple-700 text-white font-extrabold rounded-2xl hover:bg-purple-800 transition-all shadow-lg flex items-center justify-center gap-3">
                  Submit Verified Price
                  <Send size={18} />
                </button>
              )}
            </form>
          </div>

          <div className="flex items-start gap-4 p-6 bg-blue-50 text-blue-800 rounded-3xl border border-blue-100">
            <Info className="flex-shrink-0 mt-1" size={20} />
            <div className="text-sm space-y-2">
              <p className="font-bold">Why contribute?</p>
              <p className="opacity-80">eNAM only covers 1,522 mandis. Your contributions help cover the remaining 5,499 APMCs where digital data is missing or stale. Verified contributors earn 'Data Champion' badges.</p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
            <h3 className="font-bold text-slate-800 mb-6 flex items-center gap-2">
              <Clock className="text-slate-400" size={18} />
              Recent Submissions
            </h3>
            <div className="space-y-4">
              {[
                { user: 'Rajesh K.', mandi: 'Mandi A', crop: 'Paddy', status: 'Verified', time: '10m ago', price: '2,150' },
                { user: 'Suneel G.', mandi: 'Nashik', crop: 'Onion', status: 'Pending', time: '45m ago', price: '1,880' },
                { user: 'Manpreet S.', mandi: 'Mansa', crop: 'Wheat', status: 'Verified', time: '2h ago', price: '2,300' },
                { user: 'Priya D.', mandi: 'Pune', crop: 'Tomato', status: 'Rejected', time: '5h ago', price: '5,500' },
              ].map((sub, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center font-bold text-slate-400 shadow-sm border border-slate-100 uppercase text-xs">
                      {sub.user[0]}
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-800">{sub.crop} at {sub.mandi}</p>
                      <p className="text-[10px] text-slate-400">{sub.user} • {sub.time}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-slate-800">₹{sub.price}</p>
                    <div className={`inline-flex items-center gap-1 text-[10px] font-bold uppercase ${
                      sub.status === 'Verified' ? 'text-green-600' : 
                      sub.status === 'Pending' ? 'text-yellow-600' : 'text-red-600'
                    }`}>
                      {sub.status === 'Verified' ? <CheckCircle size={10} /> : 
                       sub.status === 'Pending' ? <Clock size={10} /> : <XCircle size={10} />}
                      {sub.status}
                    </div>
                  </div>
                </div>
              ))}
              <button className="w-full py-3 bg-slate-100 text-slate-500 font-bold rounded-xl text-xs uppercase tracking-widest hover:bg-slate-200">View Global Queue</button>
            </div>
          </div>

          <div className="bg-slate-900 rounded-3xl p-8 text-white text-center space-y-4">
            <h4 className="text-xl font-bold">Community Trust Rating</h4>
            <div className="flex justify-center gap-2">
              {[1, 2, 3, 4, 5].map(i => <div key={i} className={`w-8 h-2 rounded-full ${i <= 4 ? 'bg-green-500' : 'bg-slate-700'}`} />)}
            </div>
            <p className="text-xs text-slate-400">Your current rating: <span className="text-green-400 font-bold">Excellent</span></p>
            <p className="text-[10px] text-slate-500 leading-relaxed uppercase tracking-tighter">Maintain high accuracy to unlock API access and logistics insights.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crowdsource;
