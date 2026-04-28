export default function GreetingSection({ expertName, expertTitle, greeting }) {
  return (
    <section className="greeting-section">
      <div className="greeting-content">
        <div className="greeting-avatar" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'var(--aura-sage-light)',
          color: 'white',
          fontSize: '40px',
          fontFamily: 'var(--font-heading)'
        }}>
          {expertName?.charAt(0)}
        </div>
        <div className="greeting-text">
          <h2>{greeting || `Welcome. I'm ${expertName}.`}</h2>
          <p>
            {expertTitle} — I'm here to guide you through this journey. 
            Explore the resources below, curated to support your mental wellbeing.
          </p>
        </div>
      </div>
    </section>
  );
}
