import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Lock, LogIn } from 'lucide-react';
import ThreeBackground from '../components/ThreeBackground';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Frontend mock only
    console.log('Login mock submit', formData);
  };

  return (
    <div className="min-h-screen pt-24 pb-12 flex items-center justify-center relative">
      <ThreeBackground />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md px-6 z-10"
      >
        <div className="glass-card p-8 md:p-10">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-display font-bold text-white mb-2">Welcome Back</h1>
            <p className="text-gray-400">Log in to your account to continue.</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail size={18} className="text-gray-500" />
                </div>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                  className="w-full bg-dark border border-white/10 rounded-lg pl-10 pr-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors interactive"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-sm font-medium text-gray-400">Password</label>
                <a href="#" className="text-xs text-accent hover:underline interactive">Forgot password?</a>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock size={18} className="text-gray-500" />
                </div>
                <input
                  type="password"
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                  required
                  className="w-full bg-dark border border-white/10 rounded-lg pl-10 pr-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors interactive"
                  placeholder="••••••••"
                />
              </div>
            </div>
            
            <button
              type="submit"
              className="w-full btn-primary flex justify-center items-center space-x-2"
            >
              <span>Login</span>
              <LogIn size={18} />
            </button>
            
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/10"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-dark-card text-gray-400">Or continue with</span>
              </div>
            </div>
            
            <button
              type="button"
              className="w-full bg-white text-dark font-medium py-3 rounded-lg flex items-center justify-center space-x-2 hover:bg-gray-200 transition-colors interactive"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <span>Google</span>
            </button>
          </form>
          
          <p className="mt-8 text-center text-sm text-gray-400">
            Don't have an account?{' '}
            <Link to="/register" className="text-accent hover:underline font-medium interactive">
              Create account
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
