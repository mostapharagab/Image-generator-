
import React from 'react';
import { GenerationMode } from '../types';
import { TextIcon, ImageIcon } from './icons';

interface ModeSelectorProps {
    currentMode: GenerationMode;
    onModeChange: (mode: GenerationMode) => void;
}

const ModeSelector: React.FC<ModeSelectorProps> = ({ currentMode, onModeChange }) => {
    const baseClasses = "flex items-center justify-center w-full px-4 py-3 rounded-lg text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900";
    const activeClasses = "bg-purple-600 text-white shadow-lg";
    const inactiveClasses = "bg-gray-700 text-gray-300 hover:bg-gray-600";

    return (
        <div className="flex space-x-4 p-1.5 bg-gray-800 rounded-xl max-w-sm mx-auto">
            <button
                onClick={() => onModeChange(GenerationMode.TEXT)}
                className={`${baseClasses} ${currentMode === GenerationMode.TEXT ? activeClasses : inactiveClasses}`}
            >
                <TextIcon className="w-5 h-5 mr-2" />
                Text Generation
            </button>
            <button
                onClick={() => onModeChange(GenerationMode.IMAGE)}
                className={`${baseClasses} ${currentMode === GenerationMode.IMAGE ? activeClasses : inactiveClasses}`}
            >
                <ImageIcon className="w-5 h-5 mr-2" />
                Image Generation
            </button>
        </div>
    );
};

export default ModeSelector;
