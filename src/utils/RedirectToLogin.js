import { Navigate } from 'react-router-dom';

const RedirectToLogin = () => {
  return (
    <Navigate
      to={
        '/admin/login?next=' + window.location.pathname + window.location.search
      }
      replace
    />
  );
};

export default RedirectToLogin;
