import { AccountView } from "@neondatabase/auth-ui";
import Footer from "../components/layout/Footer";

export default function AccountPage() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div 
        className="container" 
        style={{ 
          flex: 1, 
          padding: 'var(--space-12) 0',
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'center'
        }}
      >
        <div style={{ width: '100%', maxWidth: '600px' }}>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--font-size-h2)', marginBottom: 'var(--space-6)' }}>
            Account Settings
          </h1>
          <div className="dashboard-card" style={{ padding: 'var(--space-6)' }}>
            <AccountView />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
