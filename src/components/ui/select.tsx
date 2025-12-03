interface SelectProps {
  label: string;
  name: string;
  value: string;
  options: string[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  error?: string;
}

export function Select({
  label,
  name,
  value,
  options,
  onChange,
  error,
}: SelectProps) {
  return (
    <div className="w-full">
      <label className="text-sm font-medium text-[#182B49]">{label}</label>

      <select
        name={name}
        value={value}
        onChange={onChange}
        className={`
          mt-1 border p-2 rounded-md w-full
          ${error ? "border-red-500" : "border-[#E2E8F0]"}
          ${value ? "text-[#182B49]" : "text-[#8d99aa]"}
        `}
      >
        <option value="">اختر {label}</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>

      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}
