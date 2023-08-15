interface buttonProps{
    classNames?: string;
    buttonType: string;
    children: any;
    onClick: (arg:any) => void;
}

const Button :React.FC<buttonProps>= ({children, classNames, buttonType, onClick}) => {
    const buttonClass = `${classNames} +
                        ${buttonType && (buttonType = 'submit') 
                         ? "bg-cyan-400 hover:bg-cyan-300" 
                         : "bg-violet-500 hover:bg-violet-300"
                        } w-full flex py-6 items-center justify-center text-white font-bold text-xl`;

    return(
        <div
            className="w-full">
            <button
                className={buttonClass}
                type="button"
                onClick={onClick}>
                {children}
            </button>
        </div>
    )
}

export default Button;