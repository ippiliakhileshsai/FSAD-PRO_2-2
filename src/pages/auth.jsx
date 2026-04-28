import { AuthView } from "@neondatabase/auth-ui";
import AuthLayout from "../components/auth/AuthLayout";

export default function AuthPage() {
  return (
    <AuthLayout subtitle="Welcome back to your wellness journey">
      <div style={{ width: '100%', maxWidth: '400px', margin: '0 auto' }}>
        <AuthView />
      </div>
    </AuthLayout>
  );
}
