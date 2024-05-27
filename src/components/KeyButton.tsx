interface KeyButtonProps {
    value: string;
    onClick: () => void;
}

const KeyButton: React.FC<KeyButtonProps> = ({ value, onClick }) => {
    return (
        <button className="calculator-keyboard_number_key" type="button" onClick={onClick}>
            {value}
        </button>
    );
}

export default KeyButton;
