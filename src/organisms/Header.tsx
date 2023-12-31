import { NavLink } from "react-router-dom";

export default function Header() {
    const HOVER_STYLE = "hover:bg-white hover:text-secondary-400";
    const INACTIVE_STYLE = "border-white border-2 rounded-sm  text-white";
    const ACTIVE_STYLE = "bg-white border-white border-2 rounded-sm  text-secondary-400";
    const BASE_STYLE = "mx-1 px-1 text-bold";
    const generateActiveStyle = ({ isActive }: { isActive: boolean }) => {
        let style = isActive ? ACTIVE_STYLE : INACTIVE_STYLE;
        style = style + " " + BASE_STYLE + " " + HOVER_STYLE;
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
                        <HeaderContent path="/questionaire" label="Questionaire" />
                    </div>
                </div>
            </header>
        </>
    );
}