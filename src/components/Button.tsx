interface ButtonProps {
  label: string;
  onClick: (label: string) => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button
      className="bg-gray-200 p-4 text-xl m-1"
      onClick={() => onClick(label)}
    >
      {label}
    </button>
  );
};

export default Button;
