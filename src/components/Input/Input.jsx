import './Input.css';

export default function Input ({ onInput, value = '', className = '', placeholder = '', type = 'text', hidePassword = true, wrong = false }) {
  return (
    <input
      className={`Input-component_input_text ${className} ${wrong ? 'Input-component_input_text-red' : ''}`}
      onInput={onInput}
      placeholder={placeholder}
      value={value}
      type={type === 'password' && hidePassword ? 'password' : 'text'}
    />
  );
}
