import React, { useState } from 'react';
import { Mail, ArrowRight, Loader2, CheckCircle, XCircle } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

const Contact = ({ personalInfo }) => {
    const [status, setStatus] = useState('idle'); // idle, submitting, success, error
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');

        const form = e.target;
        const formData = new FormData(form);

        // This uses Formspree as a free service to send the email directly.
        // The user must configure their own formspree endpoint in production.
        // I will use a placeholder action URL or instruct them.
        formData.append("access_key", "5740aae2-a954-456f-9f79-a67037fc9522"); // Placeholder

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            const data = await response.json();

            if (data.success) {
                setStatus('success');
                form.reset();
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                setErrorMessage(data.message || "Hubo un problema al enviar tu mensaje.");
                setStatus('error');
                setTimeout(() => setStatus('idle'), 5000);
            }
        } catch (error) {
            setErrorMessage("Error de conexión. Intenta nuevamente.");
            setStatus('error');
            setTimeout(() => setStatus('idle'), 5000);
        }
    };

    return (
        <section id="contact" className="py-32 px-6 relative z-10 border-t border-zinc-900/50">
            <div className="max-w-4xl mx-auto text-center mb-16">
                <RevealOnScroll>
                    <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter">
                        ¿Tienes una <span className="text-zinc-600">idea?</span>
                    </h2>
                    <p className="text-xl text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed">
                        Estoy listo para colaborar. Escríbeme y hagamos algo increíble.
                    </p>
                </RevealOnScroll>
            </div>

            <RevealOnScroll>
                <div className="max-w-2xl mx-auto backdrop-blur-md bg-zinc-900/30 p-8 md:p-12 rounded-3xl border border-zinc-800/50 shadow-2xl">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Hidden inputs expected by Web3Forms/Formspree */}
                        <input type="hidden" name="subject" value="Nuevo mensaje desde tu portafolio!" />
                        <input type="hidden" name="from_name" value="Contacto de Portafolio" />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-zinc-400 block text-left">
                                    Nombre
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    placeholder="Tu nombre"
                                    className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all duration-300"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-zinc-400 block text-left">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    placeholder="tu@email.com"
                                    className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all duration-300"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium text-zinc-400 block text-left">
                                Mensaje
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                placeholder="Háblame sobre tu proyecto..."
                                rows={5}
                                className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all duration-300 resize-none"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={status === 'submitting'}
                            className="w-full group inline-flex justify-center items-center gap-3 px-8 py-4 bg-white text-black font-bold rounded-xl transition-all duration-300 hover:bg-accent hover:text-white shadow-lg hover:shadow-accent/25 disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {status === 'submitting' ? (
                                <>
                                    <Loader2 size={20} className="animate-spin" />
                                    Enviando...
                                </>
                            ) : (
                                <>
                                    <Mail size={20} />
                                    Enviar Mensaje
                                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                </>
                            )}
                        </button>
                    </form>
                </div>
            </RevealOnScroll>

            {/* Toast Notification */}
            {(status === 'success' || status === 'error') && (
                <div className={`fixed bottom-8 right-8 z-[100] flex items-center gap-3 px-6 py-4 rounded-xl shadow-2xl animate-in slide-in-from-bottom-5 duration-300 ${status === 'success' ? 'bg-green-500/10 border border-green-500/20 text-green-500' : 'bg-red-500/10 border border-red-500/20 text-red-500'} backdrop-blur-md`}>
                    {status === 'success' ? <CheckCircle className="w-6 h-6" /> : <XCircle className="w-6 h-6" />}
                    <p className="font-medium text-white">
                        {status === 'success' ? '¡Mensaje enviado con éxito!' : errorMessage}
                    </p>
                    <button onClick={() => setStatus('idle')} className="ml-4 hover:opacity-70 transition-opacity">
                        <XCircle className="w-5 h-5 opacity-50 text-white hover:opacity-100" />
                    </button>
                </div>
            )}
        </section>
    );
};

export default Contact;
