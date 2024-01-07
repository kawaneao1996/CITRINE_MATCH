import { BUTTON_THEME, BUTTON_THEME_ACTIVE, GRADATION_ANIMATE_THEME } from "../utils/theme"; import NavButton from "../elements/NavButton";
import { ROUTER_BASE_URL, ROUTER_CHAT_URL } from "../utils/URL";

export default function Header() {
    const generateActiveStyle = ({ isActive }: { isActive: boolean }) => {
        let style = isActive ? BUTTON_THEME_ACTIVE : BUTTON_THEME;
        return style;
    };

    return (
        <>
            {/* 各ページへのリンクをヘッダーに表示する */}
            <header className={GRADATION_ANIMATE_THEME}>
                <div className="flex flex-row justify-between items-center">
                    <div className="flex flex-row items-center center">
                        <div className="text-3xl font-bold text-white p-2">Quiz App</div>
                    </div>
                    <div className="flex flex-row justify-end items-center flex-grow">
                        <NavButton path={ROUTER_BASE_URL} className={generateActiveStyle} label="Home" />
                        <NavButton path={ROUTER_CHAT_URL} className={generateActiveStyle} label="chat" />
                    </div>
                </div>
            </header>
        </>
    );
}