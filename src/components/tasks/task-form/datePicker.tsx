import DatePicker from "react-datepicker";
// @ts-ignore
import "react-datepicker/dist/react-datepicker.css";

interface CustomDatePickerProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: any) => void;
  error?: string;
  minDate?: Date;
  maxDate?: Date;
}

export function CustomDatePicker({
  label,
  name,
  value,
  onChange,
  error,
  minDate,
  maxDate
}: CustomDatePickerProps) {
  return (
    <div className="w-full">
      <label className="text-sm font-medium text-[#182B49]">{label}</label>

      <DatePicker
        selected={value ? new Date(value) : null}
        onChange={(date: Date | null) => {
          onChange({
            target: { name, value: date ? date.toISOString() : "" },
          });
        }}
        placeholderText="اختر تاريخا"
        minDate={minDate}
        maxDate={maxDate}
        className={`mt-1 border p-2 rounded-md w-full ${
          error ? "border-red-500" : "border-[#E2E8F0]"
        }`}
      />

      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}
