import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { User, Mail, Lock, UserPlus } from 'lucide-react';
import ThreeBackground from '../components/ThreeBackground';

const Register = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '', confirmPassword: '' });
  
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(formData.password !== formData.confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    // Frontend mock only
    console.log('Register mock submit', formData);
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
            <h1 className="text-3xl font-display font-bold text-white mb-2">Create Account</h1>
            <p className="text-gray-400">Join to experience the full journey.</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Full Name</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User size={18} className="text-gray-500" />
                </div>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                  className="w-full bg-dark border border-white/10 rounded-lg pl-10 pr-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors interactive"
                  placeholder="John Doe"
                />
              </div>
            </div>
            
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
              <label className="block text-sm font-medium text-gray-400 mb-2">Password</label>
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

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Confirm Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock size={18} className="text-gray-500" />
                </div>
                <input
                  type="password"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                  required
                  className="w-full bg-dark border border-white/10 rounded-lg pl-10 pr-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors interactive"
                  placeholder="••••••••"
                />
              </div>
            </div>
            
            <button
              type="submit"
              className="w-full btn-primary flex justify-center items-center space-x-2 mt-2"
            >
              <span>Create Account</span>
              <UserPlus size={18} />
            </button>
          </form>
          
          <p className="mt-8 text-center text-sm text-gray-400">
            Already have an account?{' '}
            <Link to="/login" className="text-accent hover:underline font-medium interactive">
              Log in
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Register;
