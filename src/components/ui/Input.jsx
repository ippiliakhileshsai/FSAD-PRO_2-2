import { forwardRef } from 'react';

const Input = forwardRef(({ 
  label, 
  error, 
  type = 'text', 
  id,
  className = '',
  ...props 
}, ref) => {
  return (
    <div className="input-group">
      {label && (
        <label htmlFor={id} className="input-label">
          {label}
        </label>
      )}
      <input
        ref={ref}
        id={id}
        type={type}
        className={`input-field ${error ? 'error' : ''} ${className}`}
        {...props}
      />
      {error && <p className="input-error-text">{error}</p>}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;
