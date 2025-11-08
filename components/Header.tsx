
import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="text-center mb-8">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                Gemini AI Content Generator
            </h1>
            <p className="mt-3 text-lg text-gray-400">
                Create stunning text and images with the power of Google's Gemini.
            </p>
        </header>
    );
};

export default Header;
