import React from 'react';
import { X, Download, FileText } from 'lucide-react';

const CVModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/90 backdrop-blur-sm"
                onClick={onClose}
            ></div>

            {/* Modal Content */}
            <div className="relative w-full max-w-5xl h-[90vh] bg-zinc-900 border border-zinc-800 rounded-3xl flex flex-col overflow-hidden shadow-2xl animate-fade-in-up">

                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-zinc-800 bg-zinc-900/50 backdrop-blur-md">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-accent/10 rounded-lg">
                            <FileText className="text-accent" size={24} />
                        </div>
                        <div>
                            <h2 className="text-xl font-bold text-white tracking-tight">Currículum Vitae</h2>
                            <p className="text-xs text-zinc-400 font-mono uppercase tracking-wider">Preview Mode</p>
                        </div>
                    </div>

                    <button
                        onClick={onClose}
                        className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-full transition-colors"
                    >
                        <X size={24} />
                    </button>
                </div>

                {/* Body (PDF Preview) */}
                <div className="flex-1 bg-zinc-950 relative">
                    <iframe
                        src="/Josue_Ruiz_CV.pdf"
                        className="w-full h-full"
                        title="CV Preview"
                    >
                        <div className="flex flex-col items-center justify-center h-full text-zinc-500">
                            <p>Tu navegador no soporta la visualización de PDFs.</p>
                            <a href="/Josue_Ruiz_CV.pdf" download className="text-accent hover:underline mt-2">Descargar archivo directamente</a>
                        </div>
                    </iframe>
                </div>

                {/* Footer (Actions) */}
                <div className="p-6 border-t border-zinc-800 bg-zinc-900 flex justify-end gap-4">
                    <button
                        onClick={onClose}
                        className="px-6 py-3 font-bold text-zinc-400 hover:text-white transition-colors"
                    >
                        Cerrar
                    </button>
                    <a
                        href="/Josue_Ruiz_CV.pdf"
                        download="Josue_Ruiz_CV.pdf"
                        className="inline-flex items-center gap-2 px-8 py-3 bg-accent text-white font-bold rounded-full hover:bg-red-700 transition-colors shadow-lg shadow-accent/20"
                    >
                        <Download size={20} />
                        Descargar PDF
                    </a>
                </div>
            </div>
        </div>
    );
};

export default CVModal;
