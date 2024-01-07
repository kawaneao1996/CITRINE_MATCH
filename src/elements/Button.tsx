import { BUTTON_THEME } from "../utils/theme";

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
            className={BUTTON_THEME}
        >
            {props.label}
        </button>
    );
}