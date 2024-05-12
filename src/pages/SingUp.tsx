import { useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../supabase/supabaseClient';
import { formDataProps } from '../types';

const SingUp = () => {
  const [formData, setFormData] = useState<formDataProps>({
    first_name: '',
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
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            first_name: formData.first_name
          }
        }
      });

      alert('Check your email for the verification link!');
    } catch (error) {
      console.log(error);
    }

    console.log(formData);
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
          name='first_name'
          placeholder='First name'
          className='border'
          onChange={handleChange}
          value={formData.first_name}
        />
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
        Already have an account? <Link to={'/'}> Login</Link>{' '}
      </p>
    </div>
  );
};

export default SingUp;
