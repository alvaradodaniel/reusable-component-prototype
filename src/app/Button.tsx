export interface ButtonProps {
  label: string;
  onClick: () => void;
  className?: string;
  disabled?: boolean;
}

export const Button = ({
  label,
  onClick,
  className,
  disabled,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 bg-blue-500 text-white rounded ${
        disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer "
      } ${className}`}
      disabled={disabled}
    >
      {label}
    </button>
  );
};
