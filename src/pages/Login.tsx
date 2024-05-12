import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../supabase/supabaseClient';
import { DataProps, formDataProps } from '../types';

interface LoginProps {
  setToken: (data: DataProps) => void;
}

const Login = ({ setToken }: LoginProps) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<formDataProps>({
    email: '',
    password: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password
      });

      if (error) throw error;
      console.log(data);
      setToken(data);
      navigate('/home');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='container mx-auto'>
      <form
        action=''
        className='flex flex-col w-1/3 gap-3'
        onSubmit={handleSubmit}
      >
        <input
          type='text'
          name='email'
          placeholder='email'
          className='border'
          onChange={handleChange}
          value={formData.email}
        />
        <input
          type='password'
          name='password'
          placeholder='password'
          className='border'
          onChange={handleChange}
          value={formData.password}
        />
        <button
          type='submit'
          className='border bg-blue-500 font-bold border-l text-white'
        >
          Submit
        </button>
      </form>
      <p>
        {' '}
        Don't have an account? <Link to={'/singup'}> Sing Up</Link>{' '}
      </p>
    </div>
  );
};

export default Login;
