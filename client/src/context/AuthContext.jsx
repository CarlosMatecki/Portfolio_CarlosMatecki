import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { authApi } from '../services/api';

const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(() => localStorage.getItem('portfolio_token'));
  const [loadingProfile, setLoadingProfile] = useState(true);
  const [authError, setAuthError] = useState(null);

  useEffect(() => {
    async function fetchProfile() {
      if (!token) {
        setLoadingProfile(false);
        setUser(null);
        return;
      }
      try {
        const { user: profile } = await authApi.me(token);
        setUser(profile);
        setAuthError(null);
      } catch (err) {
        console.error('Failed to load profile', err.message);
        setUser(null);
        setToken(null);
        localStorage.removeItem('portfolio_token');
      } finally {
        setLoadingProfile(false);
      }
    }

    fetchProfile();
  }, [token]);

  const signIn = async (credentials) => {
    const { user: loggedUser, token: receivedToken } = await authApi.signIn(credentials);
    setUser(loggedUser);
    setToken(receivedToken);
    localStorage.setItem('portfolio_token', receivedToken);
    setAuthError(null);
  };

  const signUp = async (payload) => {
    const { user: registeredUser, token: receivedToken } = await authApi.signUp(payload);
    setUser(registeredUser);
    setToken(receivedToken);
    localStorage.setItem('portfolio_token', receivedToken);
    setAuthError(null);
  };

  const signOut = async () => {
    try {
      await authApi.signOut();
    } catch (err) {
      console.error('Signout failed', err.message);
    } finally {
      setUser(null);
      setToken(null);
      localStorage.removeItem('portfolio_token');
    }
  };

  const value = useMemo(
    () => ({
      user,
      token,
      loadingProfile,
      authError,
      setAuthError,
      signIn,
      signUp,
      signOut,
    }),
    [user, token, loadingProfile, authError]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}

