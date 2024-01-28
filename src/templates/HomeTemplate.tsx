import { BACKGROUND_THEME_HOME } from "../utils/theme";
import NavButton from "../elements/NavButton";
import { ROUTER_QUIZ_URL } from "../utils/URL";

export default function HomeTemplate() {
    return (
        <div className={`${BACKGROUND_THEME_HOME} flex flex-1 justify-center items-center`}>
            <NavButton path={ROUTER_QUIZ_URL} label="心理テストを始める" />
        </div>
    );
}