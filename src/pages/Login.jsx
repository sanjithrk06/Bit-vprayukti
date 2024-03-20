import React from 'react';
import { signInWithGoogle } from '../utils/config';

const Login = () => {
  const handleLogin = () => {
    signInWithGoogle();
  };
  return (
    <div className="w-full h-screen flex flex-col gap-5 items-center bg-primary justify-center">
      <button
        onClick={handleLogin}
        className="px-5 py-3 outline-none bg-dimBlue border-2 border-accent text-white rounded-lg text-lg"
      >
        SIGN IN WITH GOOGLE
      </button>
      <p className=' text-red-500'>* Admins only can access</p>
    </div>
  );
};

export default Login;
