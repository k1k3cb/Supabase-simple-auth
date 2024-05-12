import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabase/supabaseClient';

const Home = ({ token }) => {

    const naigate = useNavigate();
  const handleLogout = () => {
    sessionStorage.removeItem('token');
    naigate('/');
  };

  return (
    <div className='flex flex-col gap-3'>
      <h3>Welcome back, {token.user.user_metadata.first_name} </h3>

      <button className='border w-1/3 bg-green-500 p-1' onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;
