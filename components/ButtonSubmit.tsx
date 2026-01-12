interface ButtonSubmitProps {
    text: string;
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset'; // defaults to 'submit'
    className?: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function ButtonSubmit({
    text,
    disabled = false,
    type = 'submit',
    className = '',
    onClick,
}: ButtonSubmitProps) {
    return (
        <button
            type={type}
            disabled={disabled}
            onClick={onClick}
            className={`relative inline-block px-4 py-2 font-medium group ${className}`}
        >
            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-light-green group-hover:translate-x-0 group-hover:translate-y-0 group-disabled:opacity-50"></span>
            <span className="absolute inset-0 w-full h-full bg-white border-2 border-light-green group-hover:bg-light-green group-disabled:bg-gray-100 group-disabled:border-gray-300"></span>
            <span className="relative text-light-green group-hover:text-white group-disabled:text-gray-400">
                {text}
            </span>
        </button>
    );
}