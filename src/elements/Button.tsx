type Props = { type: "submit" | "button" | "reset";
    ref?: React.RefObject<HTMLButtonElement>;
    onClick?: () => void;
    label: string;
};

export default function Button(props:Props){
    return (
        <button
            type={props.type}
            ref={props.ref}
            onClick={props.onClick}
            className="
                mx-auto
                block
                p-2
                text-white
                hover:text-primary-600
                hover:bg-white
                border-2
                rounded-lg
                font-bold
                text-lg
            "
        >
            {props.label}
        </button>
    );
}