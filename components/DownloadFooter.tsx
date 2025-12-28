import React from 'react';
import { Protocol } from '../types';
import { calculateTotalTime } from '../utils';
import { generalSettings } from '../data';

interface DownloadFooterProps {
  data: Protocol[];
}

const DownloadFooter: React.FC<DownloadFooterProps> = ({ data }) => {

  const downloadFile = (content: string, fileName: string, mimeType: string) => {
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleJsonDownload = () => {
    // Combine protocols with general settings
    const exportData = {
        protocols: data,
        general_settings: generalSettings
    };
    const jsonContent = JSON.stringify(exportData, null, 2);
    downloadFile(jsonContent, 'mri-protocols-full.json', 'application/json');
  };

  const handleMarkdownDownload = () => {
    let md = '# MRI Protocols Data\n\nGenerated from MRI Protocol Viewer\n\n';
    
    md += '## Protocols\n\n';
    // Sort data for consistent output
    const sortedData = [...data].sort((a, b) => a.protocol_name.localeCompare(b.protocol_name));

    sortedData.forEach(p => {
        md += `### ${p.protocol_name}\n`;
        md += `**Category:** ${p.additional_info || 'N/A'}\n\n`;
        md += `**Total Time:** ${calculateTotalTime(p.sequences)}\n\n`;
        md += `| # | Sequence Name | Duration | Info |\n`;
        md += `|---|---|---|---|\n`;
        p.sequences.forEach((s, i) => {
            md += `| ${i+1} | ${s.name} | ${s.duration || '-'} | ${s.info || ''} |\n`;
        });
        md += `\n---\n\n`;
    });

    // Add General Settings Section
    md += '# General Sequence Settings\n\n';
    // Deep traverse: Protocol_Parameters -> Routine -> Common -> key:value
    const root = generalSettings.Protocol_Parameters;
    
    Object.entries(root).forEach(([category, subSections]) => {
        md += `## ${category.replace(/_/g, ' ')}\n\n`;
        
        Object.entries(subSections as any).forEach(([subName, settings]) => {
            md += `### ${subName.replace(/_/g, ' ')}\n`;
            
            const keys = Object.keys(settings as any);
            if (keys.length === 0) {
                md += '_No settings configured_\n\n';
            } else {
                md += `| Setting | Value |\n`;
                md += `|---|---|\n`;
                Object.entries(settings as any).forEach(([key, value]) => {
                     let displayValue = '-';
                     if (value !== null && value !== undefined) {
                         if (value === '') displayValue = 'Empty';
                         else if (typeof value === 'object') displayValue = JSON.stringify(value);
                         else displayValue = String(value);
                     }
                     md += `| ${key.replace(/_/g, ' ')} | ${displayValue} |\n`;
                });
                md += '\n';
            }
        });
        md += '---\n\n';
    });

    downloadFile(md, 'mri-protocols.md', 'text/markdown');
  };

  const handleWordDownload = () => {
    // Basic HTML template that Word interprets as a document
    let html = `
      <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
      <head>
        <meta charset="utf-8">
        <title>MRI Protocols</title>
        <style>
          body { font-family: Calibri, Arial, sans-serif; }
          table { border-collapse: collapse; width: 100%; margin-bottom: 20px; }
          th, td { border: 1px solid #000; padding: 8px; text-align: left; }
          th { background-color: #4F46E5; color: white; }
          .sub-th { background-color: #e2e8f0; color: #334155; font-weight: bold; }
          tr:nth-child(even) { background-color: #f9f9f9; }
          .header { font-size: 14pt; font-weight: bold; margin-top: 20px; color: #1e293b; page-break-after: avoid; }
          .section-header { font-size: 16pt; font-weight: bold; margin-top: 30px; margin-bottom: 10px; color: #0f172a; border-bottom: 2px solid #0f172a; }
          .meta { font-size: 11pt; color: #64748b; margin-bottom: 10px; page-break-after: avoid; }
          .protocol-section { page-break-inside: avoid; margin-bottom: 30px; }
        </style>
      </head>
      <body>
      <h1>MRI Protocols Export</h1>
      <p>Generated on ${new Date().toLocaleDateString()}</p>
    `;

    // 1. Protocols Section
    html += `<div class="section-header">Protocols</div>`;
    const sortedData = [...data].sort((a, b) => (a.additional_info || '').localeCompare(b.additional_info || ''));

    sortedData.forEach(p => {
        const totalTime = calculateTotalTime(p.sequences);
        html += `
          <div class="protocol-section">
            <div class="header">${p.protocol_name}</div>
            <div class="meta">Category: ${p.additional_info || 'N/A'} | Total Time: ${totalTime}</div>
            <table>
              <thead>
                <tr>
                  <th style="width: 50px">#</th>
                  <th>Sequence Name</th>
                  <th style="width: 100px">Duration</th>
                  <th>Info</th>
                </tr>
              </thead>
              <tbody>
        `;
        
        p.sequences.forEach((s, i) => {
            html += `
                <tr>
                  <td>${i+1}</td>
                  <td>${s.name}</td>
                  <td>${s.duration || '-'}</td>
                  <td>${s.info || ''}</td>
                </tr>
            `;
        });

        html += `
              </tbody>
            </table>
          </div>
        `;
    });

    // 2. General Settings Section
    html += `<div class="section-header" style="page-break-before: always;">General Settings</div>`;
    const root = generalSettings.Protocol_Parameters;

    Object.entries(root).forEach(([category, subSections]) => {
        html += `<div class="header" style="color: #4338ca; font-size: 14pt; margin-top: 20px;">${category.replace(/_/g, ' ')}</div>`;
        
        Object.entries(subSections as any).forEach(([subName, settings]) => {
             html += `
             <div style="margin-top: 10px; margin-bottom: 5px; font-weight: bold; color: #475569;">${subName.replace(/_/g, ' ')}</div>
             <table>
               <thead>
                 <tr>
                   <th style="background-color: #64748b; width: 50%;">Setting</th>
                   <th style="background-color: #64748b; width: 50%;">Value</th>
                 </tr>
               </thead>
               <tbody>
             `;
             
             const keys = Object.keys(settings as any);
             if (keys.length === 0) {
                 html += `<tr><td colspan="2" style="font-style: italic; color: #94a3b8;">No parameters</td></tr>`;
             } else {
                 Object.entries(settings as any).forEach(([key, value]) => {
                     let displayValue = '-';
                     if (value !== null && value !== undefined) {
                         if (value === '') displayValue = '<span style="color: #cbd5e1; font-style: italic;">Empty</span>';
                         else if (typeof value === 'object') displayValue = JSON.stringify(value);
                         else displayValue = String(value);
                     }
                     html += `
                        <tr>
                            <td>${key.replace(/_/g, ' ')}</td>
                            <td>${displayValue}</td>
                        </tr>
                     `;
                 });
             }
             html += `</tbody></table>`;
        });
    });

    html += `</body></html>`;
    
    downloadFile(html, 'mri-protocols.doc', 'application/vnd.ms-word');
  };

  return (
    <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-4 animate-fadeIn">
      <div className="text-sm text-slate-500">
        <span className="font-medium text-slate-700">{data.length}</span> protocols available for export
      </div>
      <div className="flex flex-wrap gap-3">
        <button 
          onClick={handleWordDownload}
          className="inline-flex items-center px-4 py-2 border border-slate-300 shadow-sm text-sm font-medium rounded-lg text-slate-700 bg-white hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
        >
          <svg className="mr-2 -ml-1 h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Word
        </button>
        <button 
          onClick={handleMarkdownDownload}
          className="inline-flex items-center px-4 py-2 border border-slate-300 shadow-sm text-sm font-medium rounded-lg text-slate-700 bg-white hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
        >
          <svg className="mr-2 -ml-1 h-5 w-5 text-slate-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
          Markdown
        </button>
        <button 
          onClick={handleJsonDownload}
          className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
        >
          <svg className="mr-2 -ml-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          JSON
        </button>
      </div>
    </div>
  );
};

export default DownloadFooter;