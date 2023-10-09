

interface ButtonProps {
    value: string,
    className?: string,
    onClick: () => void
}


const Button: React.FC<ButtonProps> = ({value, className, onClick}) => {
    return(
        <div className={className + " keypad-button"} onClick={onClick}>
            {value}
        </div>
    )
}

export default Button;