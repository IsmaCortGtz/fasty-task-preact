// Styles and assets
import './Icon.css';

// Component
export default function Icon ({ icon, className, onClick }) {
  return (
    <span onClick={onClick} className={`Icon-component_span-text ${className}`}>{icon}</span>
  );
}
