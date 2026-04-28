import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <h3>AuraWell</h3>
          <p>
            A premium mental health platform designed for students. 
            Your journey to wellness starts here — with compassion, 
            privacy, and professional support.
          </p>
        </div>

        <div className="footer-column">
          <h4>Features</h4>
          <ul>
            <li><Link to="/feature/mental-health">Mental Health</Link></li>
            <li><Link to="/feature/therapy">Virtual Therapy</Link></li>
            <li><Link to="/feature/support-groups">Support Groups</Link></li>
            <li><Link to="/feature/character">Character Decode</Link></li>
            <li><Link to="/feature/self-healing">Self-Healing</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Resources</h4>
          <ul>
            <li><a href="#articles">Articles</a></li>
            <li><a href="#videos">Video Library</a></li>
            <li><a href="#meditation">Meditation</a></li>
            <li><a href="#journal">Journaling</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Support</h4>
          <ul>
            <li><a href="#help">Help Center</a></li>
            <li><a href="#contact">Contact Us</a></li>
            <li><a href="#crisis">Crisis Resources</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} AuraWell. All rights reserved.</p>
        <div className="footer-bottom-links">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
          <a href="#accessibility">Accessibility</a>
        </div>
      </div>
    </footer>
  );
}
