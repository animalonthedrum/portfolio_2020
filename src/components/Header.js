import React from 'react';
import useNightMode from '../hooks/use-night-theme';
import ToggleButton from './toggleButton';

function Header() {
  const [nightMode, setNightMode] = useNightMode();

  return (
    <div>
        <ToggleButton nightMode={nightMode} setNightMode={setNightMode} />
    </div>
  );
}

export default Header;