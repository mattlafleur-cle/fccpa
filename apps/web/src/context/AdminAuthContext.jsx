import React, { createContext, useContext, useState, useEffect } from 'react';
import pb from '@/lib/pocketbaseClient.js';

const AdminAuthContext = createContext(null);

export const AdminAuthProvider = ({ children }) => {
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);
  const [adminUser, setAdminUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check initial auth state from localStorage (handled by PocketBase SDK)
    const checkAuth = () => {
      const isValid = pb.authStore.isValid;
      const model = pb.authStore.model;
      
      // Ensure only users from the 'admin' collection are considered authenticated here
      if (isValid && model && model.collectionName === 'admin') {
        setIsAdminAuthenticated(true);
        setAdminUser(model);
      } else {
        setIsAdminAuthenticated(false);
        setAdminUser(null);
      }
      setLoading(false);
    };

    checkAuth();

    // Listen for auth store changes (e.g. logout in another tab)
    const unsubscribe = pb.authStore.onChange((token, model) => {
      if (pb.authStore.isValid && model && model.collectionName === 'admin') {
        setIsAdminAuthenticated(true);
        setAdminUser(model);
      } else {
        setIsAdminAuthenticated(false);
        setAdminUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const login = async (email, password) => {
    try {
      const authData = await pb.collection('admin').authWithPassword(email, password, { $autoCancel: false });
      setIsAdminAuthenticated(true);
      setAdminUser(authData.record);
      return { success: true };
    } catch (error) {
      console.error('Login error:', error);
      return { success: false, error: error.message };
    }
  };

  const logout = () => {
    pb.authStore.clear();
    setIsAdminAuthenticated(false);
    setAdminUser(null);
  };

  const value = {
    isAdminAuthenticated,
    adminUser,
    loading,
    login,
    logout
  };

  return (
    <AdminAuthContext.Provider value={value}>
      {children}
    </AdminAuthContext.Provider>
  );
};

export const useAdminAuth = () => {
  const context = useContext(AdminAuthContext);
  if (context === null) {
    throw new Error('useAdminAuth must be used within an AdminAuthProvider');
  }
  return context;
};