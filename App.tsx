
import React, { useState } from 'react';
import { GenerationMode } from './types';
import Header from './components/Header';
import ModeSelector from './components/ModeSelector';
import TextGenerator from './components/TextGenerator';
import ImageGenerator from './components/ImageGenerator';

const App: React.FC = () => {
    const [mode, setMode] = useState<GenerationMode>(GenerationMode.TEXT);

    return (
        <div className="min-h-screen bg-gray-900 flex flex-col items-center p-4 sm:p-6 lg:p-8">
            <div className="w-full max-w-4xl">
                <Header />
                <ModeSelector currentMode={mode} onModeChange={setMode} />
                <main className="mt-8">
                    {mode === GenerationMode.TEXT ? <TextGenerator /> : <ImageGenerator />}
                </main>
            </div>
        </div>
    );
};

export default App;
