"use client";
interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void; 
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button 
      onClick={onClick} 
      className="bg-[#41668F] text-white px-[22px] py-[14px] rounded-xl hover:scale-105 transition-all duration-500 ease-in-out"
    >
      {children}
    </button>
  );
};

export default Button;
