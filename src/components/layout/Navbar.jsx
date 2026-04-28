import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, Search, User, LogOut, X } from 'lucide-react';
import { useAuthStore } from '../../store/authStore';
import { useScroll } from '../../hooks/useScroll';
import { NAV_LINKS } from '../../utils/constants';

export default function Navbar() {
  const { scrolled } = useScroll(50);
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-inner">
          {/* LEFT ZONE */}
          <div className="navbar-left">
            <button 
              className="menu-button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={20} />
              <span>Menu</span>
            </button>
          </div>

          {/* CENTER ZONE */}
          <div className="navbar-center">
            <Link to="/" className="logo">
              AuraWell
            </Link>
          </div>

          {/* RIGHT ZONE */}
          <div className="navbar-right">
            <button className="navbar-icon-button" aria-label="Search">
              <Search size={20} />
            </button>
            
            <div className="user-menu">
              <button className="navbar-icon-button" aria-label="Account">
                <User size={20} />
              </button>
              <div className="user-dropdown">
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/admin">Admin Panel</Link>
                <Link to="/account">Account Settings</Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* SIDE MENU */}
      {menuOpen && (
        <>
          <div className="modal-backdrop" onClick={() => setMenuOpen(false)} />
          <div className="side-menu" style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '360px',
            maxWidth: '85vw',
            height: '100vh',
            background: 'var(--aura-pure-white)',
            zIndex: 'var(--z-modal)',
            padding: 'var(--space-6)',
            animation: 'slideInLeft 0.3s var(--ease-smooth)',
            overflowY: 'auto'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-8)' }}>
              <span className="logo" style={{ color: 'var(--aura-deep-black)' }}>AuraWell</span>
              <button 
                className="modal-close" 
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-1)' }}>
              {NAV_LINKS.map(link => (
                <Link 
                  key={link.path}
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    padding: '14px 16px',
                    fontFamily: 'var(--font-body)',
                    fontSize: 'var(--font-size-body-md)',
                    fontWeight: 'var(--font-weight-medium)',
                    color: 'var(--aura-text-primary)',
                    borderRadius: '8px',
                    transition: 'background 200ms ease'
                  }}
                  onMouseEnter={e => e.target.style.background = 'var(--aura-off-white)'}
                  onMouseLeave={e => e.target.style.background = 'transparent'}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

          </div>
        </>
      )}
    </>
  );
}
