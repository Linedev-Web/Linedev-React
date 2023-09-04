import { useState, useEffect } from 'react';

export default function ThemeSwitcherButton() {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setTheme(savedTheme);
        }
    }, []);

    useEffect(() => {
        document.body.className = theme;
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => {
            if (prevTheme === 'light') return 'dark';
            if (prevTheme === 'dark') return 'light';
            return 'light';
        });
    };

    return (
        <button onClick={toggleTheme}>
            Toggle Theme: {theme === 'default' ? 'Light' : theme.charAt(0).toUpperCase() + theme.slice(1)}
        </button>
    );
}
