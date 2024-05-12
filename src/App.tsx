import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import SingUp from './pages/SingUp';
import { DataProps } from './types';

function App() {
  const [token, setToken] = useState<boolean | DataProps>(false);

  if (token) {
    sessionStorage.setItem('token', JSON.stringify(token));
  }

  useEffect(() => {
    if (sessionStorage.getItem('token')) {
      const data = JSON.parse(sessionStorage.getItem('token')!);
      setToken(data);
    }
  }, []);

  return (
    <div>
      <Routes>
        <Route path='/singup' element={<SingUp />} />
        <Route path='/' element={<Login setToken={setToken} />} />
        {token && <Route path='/home' element={<Home token={token} />} />}
      </Routes>
    </div>
  );
}

export default App;
