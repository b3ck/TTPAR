import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [user, setUser] = useState('');
  const [refresh, setRefresh] = useState(0);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setUser(params.get('u'));
    setRefresh(params.get('r'));

    function handleResize() {
      setWidth(window.innerWidth);
      setHeight(Math.round((9 / 16) * window.innerWidth));
    }

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (refresh > 0) {
      const intervalId = setInterval(() => {
        window.location.reload();
      }, refresh * 1000);

      return () => clearInterval(intervalId);
    }
  }, [refresh]);

  return (
    <div className="App" style={{ backgroundColor: 'black' }}>
      <img
        src={`https://static-cdn.jtvnw.net/previews-ttv/live_user_${user}-${width}x${height}.jpg`}
        alt="User Image"
      />
    </div>
  );
}

export default App;
