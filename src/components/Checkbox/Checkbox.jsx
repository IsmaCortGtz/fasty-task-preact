import './Checkbox.css';

export default function Checkbox ({ onChange, id, label = '' }) {
  return (
    <label className='Checkbox-component_label' for={id}>
      <input
        id={id}
        onChange={onChange}
        className='Checkbox-component_input_checkbox'
        type='checkbox'
      />
      {label}
    </label>
  );
}
