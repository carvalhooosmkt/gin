// src/App.tsx (Versão Simplificada)

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import ChatInterface from './components/ChatInterface';
import Footer from './components/Footer';
import AboutPage from './components/AboutPage';
import { User, Child } from './types';
import './lib/i18n';

// Tipos de dados de usuário e criança simulados para o ChatInterface funcionar
const SIMULATED_USER: User = { id: 'anon', email: 'anon@ia.com', name: 'Paciente', gender: 'female', is_premium: true, created_at: '' };
const SIMULATED_CHILD: Child = { id: 'ginecologista', user_id: 'anon', name: 'Dra. Clara Mendes', age: 40, gender: 'female', created_at: '' };

function App() {
    const { t } = useTranslation();
    const [showAbout, setShowAbout] = useState(false);

    // Simplificando o estado: O chat é o estado único e inicial
    const appState = 'chat';

    const getBackgroundClass = () => 'from-white via-pink-50/30 to-rose-50/20'; // Esquema de cores feminino/saúde

    // Funções de manipulação (agora são apenas placeholders, pois não há login)
    const handleMessageLimit = () => { console.log('Simulação: Limite atingido.'); };
    const handleShowAuth = () => { console.log('Simulação: Autenticação desnecessária neste modelo.'); };
    const handleFirstMessage = () => { console.log('Simulação: Primeira mensagem enviada.'); };

    return (
        <div className={`min-h-screen bg-gradient-to-br ${getBackgroundClass()} transition-colors duration-500`}>
            <AnimatePresence mode="wait">
                {appState === 'chat' && (
                    <motion.div
                        key="chat"
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="min-h-screen flex flex-col"
                    >
                        {/* Header simples ou pode ser removido/simplificado para manter o foco */}
                        <header className="py-4 px-6 bg-white/70 backdrop-blur-sm shadow-md">
                            <h1 className="text-xl font-bold text-pink-600 flex items-center gap-2">
                                🩺 Dra. Clara Mendes - Suporte Adenomiose
                            </h1>
                        </header>
                        
                        <div className="flex-1 flex flex-col">
                            {/* O ChatInterface agora recebe dados SIMULADOS */}
                            <ChatInterface 
                                isInitialState={false} // Sempre false para iniciar o chat
                                onFirstMessage={handleFirstMessage}
                                user={SIMULATED_USER} 
                                child={SIMULATED_CHILD}
                                onMessageLimit={handleMessageLimit}
                                onShowAuth={handleShowAuth}
                            />
                        </div>
                        <Footer onAboutClick={() => setShowAbout(true)} />
                    </motion.div>
                )}
            </AnimatePresence>

            <AboutPage
                isOpen={showAbout}
                onClose={() => setShowAbout(false)}
            />
        </div>
    );
}

export default App;
