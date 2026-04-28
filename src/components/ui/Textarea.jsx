import { forwardRef } from 'react';

const Textarea = forwardRef(({ label, error, id, className = '', ...props }, ref) => {
  return (
    <div className="input-group">
      {label && (
        <label htmlFor={id} className="input-label">{label}</label>
      )}
      <textarea
        ref={ref}
        id={id}
        className={`textarea-field ${error ? 'error' : ''} ${className}`}
        {...props}
      />
      {error && <p className="input-error-text">{error}</p>}
    </div>
  );
});

Textarea.displayName = 'Textarea';

export default Textarea;
