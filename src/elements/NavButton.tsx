import { NavLink } from "react-router-dom";
import { BUTTON_THEME } from "../utils/theme";

type Props = {
    path: string;
    className?: string | (({isActive}:{isActive:boolean}) => string);
    label: string;
};
export default function NavButton(props: Props) {
    return (
        <NavLink to={props.path} className={props.className ?? BUTTON_THEME} end>
            {props.label}
        </NavLink>
    );
}
