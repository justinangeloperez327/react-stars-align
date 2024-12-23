import { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, [token]);

  return { isAuthenticated };
};

export default useAuth;