import { BUTTON_THEME, BUTTON_THEME_ACTIVE, GRADATION_ANIMATE_THEME } from "../utils/theme"; import NavButton from "../elements/NavButton";
import { ROUTER_BASE_URL, ROUTER_CHAT_URL } from "../utils/URL";
import { supabase } from "../main";

export default function Header() {
    const generateActiveStyle = ({ isActive }: { isActive: boolean }) => {
        const style = isActive ? BUTTON_THEME_ACTIVE : BUTTON_THEME;
        return style;
    };

    const handleLogout = async () => {
        await supabase.auth.signOut({ scope: 'local' });
    };

    return (
        <>
            {/* 各ページへのリンクをヘッダーに表示する */}
            <header className={`${GRADATION_ANIMATE_THEME} h-header-height`}>
                <div className="flex flex-row justify-between items-center">
                    <div className="flex flex-row items-center center">
                        <div className="text-3xl font-bold text-white p-2">Quiz App</div>
                        <button onClick={handleLogout} className="m-2 p-2 text-white hover:text-primary-600 hover:bg-white border-2 rounded-lg font-bold text-lg">Log out</button>
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