import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useAuthStore } from '../../store/authStore';
import { useUIStore } from '../../store/uiStore';
import { authApi } from '../../api/authApi';
import Input from '../ui/Input';
import Button from '../ui/Button';
import GoogleOAuthButton from './GoogleOAuthButton';
import IncognitoButton from './IncognitoButton';

export default function LoginForm() {
  const navigate = useNavigate();
  const { setAuth } = useAuthStore();
  const { showToast } = useUIStore();
  const [loading, setLoading] = useState(false);
  
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await authApi.login(data.email, data.password);
      setAuth(response.user, response.access_token, response.refresh_token);
      showToast('Welcome back!', 'success');
      navigate('/dashboard');
    } catch (error) {
      showToast(error.response?.data?.message || 'Login failed. Please try again.', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <GoogleOAuthButton />
      
      <div className="auth-divider">
        <span>or sign in with email</span>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          id="login-email"
          label="Email"
          type="email"
          placeholder="Enter your email"
          error={errors.email?.message}
          {...register('email', { 
            required: 'Email is required',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'Please enter a valid email'
            }
          })}
        />
        
        <Input
          id="login-password"
          label="Password"
          type="password"
          placeholder="Enter your password"
          error={errors.password?.message}
          {...register('password', { 
            required: 'Password is required',
            minLength: {
              value: 8,
              message: 'Password must be at least 8 characters'
            }
          })}
        />

        <div style={{ textAlign: 'right', marginBottom: 'var(--space-4)' }}>
          <a 
            href="#forgot" 
            style={{ 
              fontSize: 'var(--font-size-body-sm)', 
              color: 'var(--aura-navy-deep)',
              fontWeight: 'var(--font-weight-medium)'
            }}
          >
            Forgot password?
          </a>
        </div>

        <Button 
          type="submit" 
          loading={loading}
          style={{ width: '100%' }}
        >
          Sign In
        </Button>
      </form>

      <IncognitoButton />

      <div className="auth-footer">
        <p>
          Don't have an account?{' '}
          <Link to="/signup">Create one</Link>
        </p>
      </div>
    </div>
  );
}
