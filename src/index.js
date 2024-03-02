import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/index.css';
import App from './App';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  duration: 900,
  delay: 10,
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Suspense
      fallback={
        <div className="flex w-full h-screen text-primary text-2xl items-center justify-center">
          Loading..
        </div>
      }
    >
      <App />
    </Suspense>
  </React.StrictMode>
);
