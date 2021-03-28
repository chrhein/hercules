import { useEffect, useState } from 'react';

export const useDarkMode = () => {
  const [theme, setTheme] = useState('light');
  const [mountedComponent, setMountedComponent] = useState(false);
  const setMode = (mode) => {
    window.localStorage.setItem('theme', mode);
    setTheme(mode);
  };
  const themeToggler = () => {
    if (theme === 'light') {
      setMode('dark');
    } else {
      setMode('light');
    }
  };
  useEffect(() => {
    const chosenTheme = window.localStorage.getItem('theme');
    const localTheme = window.matchMedia('(prefers-color-scheme: dark)');
    if (chosenTheme) {
      setTheme(chosenTheme);
    } else if (localTheme.matches) {
      setMode('dark');
    } else {
      setMode('light');
    }
    setMountedComponent(true);
  }, []);
  return [theme, themeToggler, mountedComponent];
};

export default useDarkMode;
