import { forwardRef } from 'react';

const Select = forwardRef(({ label, error, id, options = [], placeholder, className = '', ...props }, ref) => {
  return (
    <div className="input-group">
      {label && (
        <label htmlFor={id} className="input-label">{label}</label>
      )}
      <select
        ref={ref}
        id={id}
        className={`input-field ${error ? 'error' : ''} ${className}`}
        {...props}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map(opt => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && <p className="input-error-text">{error}</p>}
    </div>
  );
});

Select.displayName = 'Select';

export default Select;
