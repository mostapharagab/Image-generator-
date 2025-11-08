
import React, { useState } from 'react';
import { generateText } from '../services/geminiService';
import { LoadingSpinner } from './icons';

const TextGenerator: React.FC = () => {
    const [prompt, setPrompt] = useState<string>('');
    const [result, setResult] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

    const handleGenerate = async () => {
        if (!prompt.trim()) {
            setError('Please enter a prompt.');
            return;
        }
        setIsLoading(true);
        setError('');
        setResult('');

        try {
            const text = await generateText(prompt);
            setResult(text);
        } catch (err: any) {
            setError(err.message || 'An unknown error occurred.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="bg-gray-800 rounded-xl p-6 sm:p-8 shadow-2xl border border-gray-700">
            <div className="w-full min-h-[250px] bg-gray-900 rounded-lg p-4 border border-gray-700 mb-6 flex items-center justify-center">
                {isLoading ? (
                    <LoadingSpinner className="w-12 h-12 text-purple-500" />
                ) : error ? (
                    <p className="text-red-400 text-center">{error}</p>
                ) : result ? (
                    <pre className="text-gray-300 whitespace-pre-wrap font-sans text-left w-full">{result}</pre>
                ) : (
                    <p className="text-gray-500 text-center">Your generated text will appear here.</p>
                )}
            </div>

            <div className="relative">
                <textarea
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="e.g., Write a short story about a robot exploring a new planet..."
                    className="w-full h-28 p-4 pr-32 bg-gray-700 text-gray-200 rounded-lg border-2 border-transparent focus:border-purple-500 focus:ring-0 resize-none transition-colors duration-200"
                    disabled={isLoading}
                />
                <button
                    onClick={handleGenerate}
                    disabled={isLoading}
                    className="absolute right-3 top-1/2 -translate-y-1/2 px-5 py-3 bg-purple-600 text-white font-bold rounded-md hover:bg-purple-700 disabled:bg-gray-500 disabled:cursor-not-allowed transition-all duration-200"
                >
                    {isLoading ? 'Generating...' : 'Generate'}
                </button>
            </div>
        </div>
    );
};

export default TextGenerator;
