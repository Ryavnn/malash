import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useAuthCheck = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = localStorage.getItem('access_token');
    if (!accessToken) {
      // Redirects to login if access token is not found in local storage
      navigate('/login');
    }
  }, [navigate]);
};

export default useAuthCheck;
