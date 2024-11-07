"use client";

interface ButtonProps {
  children?: React.ReactNode;
  onClick?: () => void; 
  className?: string; 
  disabled?: boolean; 
}

const Button1: React.FC<ButtonProps> = ({
  children, 
  onClick,
  className = '',
  disabled = false,
}) => {
  return (
    <div>
      <button
        onClick={onClick}
        disabled={disabled}
        className={`bg-[#41668F] hover:bg-[#0B2B4F] text-sm text-white font-bold py-3 px-6 rounded-xl hover:scale-105 transition-all duration-500 ease-in-out ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        {children || 'Add+'} 
      </button>
    </div>
  );
};

export default Button1; 