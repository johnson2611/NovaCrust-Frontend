type ButtonProps = {
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
};

const Button = ({ children, disabled, onClick }: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`w-full py-3 rounded-lg text-sm font-medium transition ${
        disabled
          ? "bg-gray-300 text-gray-500 cursor-not-allowed"
          : "bg-[#013941] text-white hover:opacity-90"
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
