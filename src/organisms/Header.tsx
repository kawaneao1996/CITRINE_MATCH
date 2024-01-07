import { NavLink } from "react-router-dom";
import { BUTTON_THEME, BUTTON_THEME_ACTIVE } from "../utils/theme";

export default function Header() {
    const generateActiveStyle = ({ isActive }: { isActive: boolean }) => {
        let style = isActive ? BUTTON_THEME_ACTIVE : BUTTON_THEME;
        return style;
    };
    const HeaderContent = ({ path, label }: { path: string, label: string }) => {
        return (
            <NavLink to={path} className={generateActiveStyle}>
                {label}
            </NavLink>
        );
    }

    return (
        <>
            {/* 各ページへのリンクをヘッダーに表示する */}
            <header className="bg-secondary-400">
                <div className="flex flex-row justify-between items-center p-5">
                    <div className="flex flex-row items-center center">
                        <div className="text-3xl font-bold text-white">Quiz App</div>
                    </div>
                    <div className="flex flex-row justify-end items-center flex-grow">
                        <HeaderContent path="/" label="Home" />
                        <HeaderContent path="/questionnaire" label="Questionnaire" />
                    </div>
                </div>
            </header>
        </>
    );
}