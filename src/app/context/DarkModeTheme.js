'use client'


import React, { createContext, useEffect, useState } from 'react';

export const DarkModeContext = createContext(null);

const DarkModeTheme = (props) => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const storedValue = localStorage.getItem('darkMode');
        return storedValue === 'true';
    });

    const toggleDarkMode = () => {
        const newMode = !isDarkMode;
        setIsDarkMode(newMode);
        localStorage.setItem('darkMode', newMode);
    };

    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    }, [isDarkMode]);

    const valueData = {
        isDarkMode,
        toggleDarkMode,
    };

    return (
        <DarkModeContext.Provider value={valueData}>
            {props.children}
        </DarkModeContext.Provider>
    );
};

export default DarkModeTheme;