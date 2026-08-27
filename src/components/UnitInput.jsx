export default function UnitInput({ label, value, onChange, placeholder, type = 'number' }) {
  return (
    <div className="unit-input">
      {label && <label className="unit-input-label">{label}</label>}
      <input
        className="unit-input-field"
        type={type}
        inputMode={type === 'number' ? 'decimal' : 'text'}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        autoComplete="off"
      />
    </div>
  )
}
