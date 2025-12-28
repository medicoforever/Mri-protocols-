import React, { useState } from 'react';
import { Protocol } from '../types';
import { calculateTotalTime } from '../utils';

interface ProtocolCardProps {
  protocol: Protocol;
}

const ProtocolCard: React.FC<ProtocolCardProps> = ({ protocol }) => {
  const [isOpen, setIsOpen] = useState(false);
  const totalTime = calculateTotalTime(protocol.sequences);

  // Extract category for potential color coding, fallback to gray
  const category = protocol.additional_info ? protocol.additional_info.split('>')[0].trim() : 'Other';

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow duration-200 flex flex-col">
      <div 
        className="p-5 cursor-pointer bg-slate-50 hover:bg-white transition-colors flex justify-between items-center border-l-4 border-indigo-500"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex-1 pr-4">
          <h3 className="text-lg font-bold text-slate-800">{protocol.protocol_name}</h3>
          <div className="flex flex-wrap gap-2 mt-2">
             <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-50 text-indigo-700">
               {protocol.sequences.length} Sequences
             </span>
             <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700">
               {totalTime}
             </span>
          </div>
        </div>
        <button className={`text-slate-400 transform transition-transform duration-200 flex-shrink-0 bg-white p-2 rounded-full shadow-sm border border-slate-100 ${isOpen ? 'rotate-180 text-indigo-500' : ''}`}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-slate-100 animate-fadeIn">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 text-slate-500 font-medium border-b border-slate-100">
              <tr>
                <th className="px-4 py-2 w-10 text-center">#</th>
                <th className="px-4 py-2">Sequence Name</th>
                <th className="px-4 py-2 w-24 text-right">Duration</th>
                <th className="px-4 py-2">Info</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {protocol.sequences.map((seq, index) => (
                <tr key={index} className="hover:bg-indigo-50/30 transition-colors">
                  <td className="px-4 py-2 text-slate-400 font-mono text-xs text-center">{index + 1}</td>
                  <td className="px-4 py-2 font-medium text-slate-700 break-words">
                    {seq.name.replace(/_/g, ' ')}
                  </td>
                  <td className="px-4 py-2 text-right">
                    {seq.duration && seq.duration.match(/^\d{2}:\d{2}$/) ? (
                       <span className="font-mono text-slate-600 bg-slate-100 px-1.5 py-0.5 rounded text-xs">
                         {seq.duration}
                       </span>
                    ) : (
                        <span className="text-slate-300 text-xs">-</span>
                    )}
                  </td>
                  <td className="px-4 py-2 text-slate-500">
                    {seq.info && (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 text-xs border border-blue-100">
                           {seq.info}
                        </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ProtocolCard;