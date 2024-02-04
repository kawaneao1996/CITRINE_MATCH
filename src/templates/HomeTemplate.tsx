import { BACKGROUND_THEME_HOME } from "../utils/theme";
import NavButton from "../elements/NavButton";
import { ROUTER_CHAT_URL, ROUTER_QUIZ_URL } from "../utils/URL";

export default function HomeTemplate() {
    return (
        <div className={`${BACKGROUND_THEME_HOME} flex flex-1 flex-col justify-center items-center`}>
            <NavButton path={ROUTER_QUIZ_URL} label="心理テストを始める" />
            <NavButton path={ROUTER_CHAT_URL} label="チャットを始める" />
        </div>
    );
}