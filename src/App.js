import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [user, setUser] = useState('');
  const [refresh, setRefresh] = useState(0);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setUser(params.get('u'));
    setRefresh(params.get('r'));

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
        src={`https://static-cdn.jtvnw.net/previews-ttv/live_user_${user}-440x248.jpg`}
        alt="User Image"
        style={{ maxWidth: '95vw', maxHeight: '95vh' }}
      />
    </div>
  );
}

export default App;
