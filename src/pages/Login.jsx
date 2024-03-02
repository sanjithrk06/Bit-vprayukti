import React from 'react';
import { signInWithGoogle } from '../utils/config';

const Login = () => {
  const handleLogin = () => {
    signInWithGoogle();
  };
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <button
        onClick={handleLogin}
        className="px-5 py-3 outline-none bg-accent text-white rounded-lg text-lg"
      >
        SIGN IN WITH GOOGLE
      </button>
    </div>
  );
};

export default Login;
