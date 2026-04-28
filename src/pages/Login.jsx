import AuthLayout from '../components/auth/AuthLayout';
import LoginForm from '../components/auth/LoginForm';

export default function Login() {
  return (
    <AuthLayout subtitle="Welcome back to your wellness journey">
      <LoginForm />
    </AuthLayout>
  );
}
