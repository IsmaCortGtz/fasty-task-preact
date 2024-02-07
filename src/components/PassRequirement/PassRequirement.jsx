import './PassRequirement.css';

export default function PassRequirement ({ active, message, className = '' }) {
  return (
    <p className={active ? `PassRequirement-component_p-message ${className}` : 'PassRequirement-component_p-message-hide'}>
      {message}
    </p>
  );
}
