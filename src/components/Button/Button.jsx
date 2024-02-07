import './Button.css';

export default function Button ({ onClick, className = '', children }) {
  const handleButtonPress = (event) => {
    event.preventDefault();
    onClick(event);
  };

  return (
    <button
      onClick={handleButtonPress}
      className={`Button-component_input_button ${className}`}
    >
      {children}
    </button>
  );
}
