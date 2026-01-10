import { LucideIcon } from "lucide-react";

interface ContactInputProps {
  id: string;
  type: string;
  placeholder: string;
  label: string;
  icon: LucideIcon;
  onFocus: () => void;
  onBlur: () => void;
}

export default function ContactInput({
  id,
  type,
  placeholder,
  label,
  icon: Icon,
  onFocus,
  onBlur,
}: ContactInputProps) {
  const inputClasses =
    "w-full bg-secondary-background/50 border border-white/10 rounded-lg py-3 px-4 outline-none text-text placeholder:text-gray-500 transition-all duration-300 focus:border-brand focus:shadow-[0_0_15px_rgba(255,46,99,0.3)]";
  const labelClasses =
    "flex items-center gap-2 text-sm font-medium text-gray-300 mb-2";
  const iconClasses = "w-4 h-4 text-brand";

  return (
    <div className="space-y-1">
      <label htmlFor={id} className={labelClasses}>
        <Icon className={iconClasses} /> {label}
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className={inputClasses}
        onFocus={onFocus}
        onBlur={onBlur}
      />
    </div>
  );
}
