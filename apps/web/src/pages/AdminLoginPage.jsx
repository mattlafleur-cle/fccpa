import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate, useLocation } from 'react-router-dom';
import { Loader2, Lock } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { useAdminAuth } from '@/context/AdminAuthContext.jsx';

const AdminLoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { login, isAdminAuthenticated, loading } = useAdminAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/admin';

  // Redirect if already authenticated
  useEffect(() => {
    if (!loading && isAdminAuthenticated) {
      navigate(from, { replace: true });
    }
  }, [isAdminAuthenticated, loading, navigate, from]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }
    
    setIsSubmitting(true);
    
    const result = await login(email, password);
    
    if (result.success) {
      navigate(from, { replace: true });
    } else {
      setError('Invalid email or password. Please try again.');
      setIsSubmitting(false);
    }
  };

  if (loading || isAdminAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FAFAFA]">
        <Loader2 className="w-8 h-8 animate-spin text-[#477956]" />
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Admin Login - Forest City</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      
      <main className="min-h-screen flex items-center justify-center bg-[#FAFAFA] p-4">
        <div className="max-w-md w-full">
          <div className="text-center mb-10">
            <h1 className="serif-heading text-4xl text-[#0F1820] mb-3">Forest City</h1>
            <p className="text-muted-foreground uppercase tracking-widest text-sm font-medium">Secure Admin Portal</p>
          </div>
          
          <div className="bg-white p-8 sm:p-10 shadow-lg border border-border/50 rounded-sm">
            <div className="flex justify-center mb-8">
              <div className="w-12 h-12 bg-[#477956]/10 flex items-center justify-center rounded-full">
                <Lock className="w-5 h-5 text-[#477956]" />
              </div>
            </div>
            
            {error && (
              <div className="mb-6 p-4 bg-destructive/10 text-destructive text-sm rounded-sm border border-destructive/20 text-center">
                {error}
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-[#0F1820]">Email Address</Label>
                <Input 
                  id="email" 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-[#FAFAFA] focus-visible:ring-[#477956] text-[#0F1820]" 
                  placeholder="admin@forestcity.com"
                  autoComplete="email"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password" className="text-[#0F1820]">Password</Label>
                <Input 
                  id="password" 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-[#FAFAFA] focus-visible:ring-[#477956] text-[#0F1820]" 
                  autoComplete="current-password"
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-[#0F1820] hover:bg-[#477956] text-white h-12 text-base transition-colors"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Authenticating...
                  </>
                ) : (
                  'Sign In'
                )}
              </Button>
            </form>
          </div>
          
          <p className="text-center text-sm text-muted-foreground mt-8">
            &copy; {new Date().getFullYear()} Forest City. All rights reserved.
          </p>
        </div>
      </main>
    </>
  );
};

export default AdminLoginPage;