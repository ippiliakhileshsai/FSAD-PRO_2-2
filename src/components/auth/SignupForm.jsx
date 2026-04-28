import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useAuthStore } from '../../store/authStore';
import { useUIStore } from '../../store/uiStore';
import { usePreferenceStore } from '../../store/preferenceStore';
import { authApi } from '../../api/authApi';
import { userApi } from '../../api/userApi';
import Input from '../ui/Input';
import Button from '../ui/Button';
import GoogleOAuthButton from './GoogleOAuthButton';

export default function SignupForm() {
  const navigate = useNavigate();
  const { setAuth } = useAuthStore();
  const { showToast } = useUIStore();
  const { selectedPreferences } = usePreferenceStore();
  const [loading, setLoading] = useState(false);
  
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const password = watch('password');

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await authApi.signup(data.email, data.password);
      setAuth(response.user, response.access_token, response.refresh_token);
      
      // Save preferences if selected before signup
      if (selectedPreferences.length > 0) {
        try {
          await userApi.updatePreferences(selectedPreferences);
        } catch {
          // Non-critical, continue
        }
      }

      showToast('Account created successfully!', 'success');
      navigate('/dashboard');
    } catch (error) {
      showToast(error.response?.data?.message || 'Signup failed. Please try again.', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <GoogleOAuthButton />
      
      <div className="auth-divider">
        <span>or create account with email</span>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          id="signup-email"
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
          id="signup-password"
          label="Password"
          type="password"
          placeholder="Create a password"
          error={errors.password?.message}
          {...register('password', { 
            required: 'Password is required',
            minLength: {
              value: 8,
              message: 'Password must be at least 8 characters'
            }
          })}
        />

        <Input
          id="signup-confirm"
          label="Confirm Password"
          type="password"
          placeholder="Confirm your password"
          error={errors.confirmPassword?.message}
          {...register('confirmPassword', { 
            required: 'Please confirm your password',
            validate: value => value === password || 'Passwords do not match'
          })}
        />

        <Button 
          type="submit" 
          loading={loading}
          style={{ width: '100%', marginTop: 'var(--space-2)' }}
        >
          Create Account
        </Button>
      </form>

      <div className="auth-footer">
        <p>
          Already have an account?{' '}
          <Link to="/login">Sign in</Link>
        </p>
      </div>
    </div>
  );
}
