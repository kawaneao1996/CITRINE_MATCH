import { BACKGROUND_THEME } from "../utils/theme";
import NavButton from "../elements/NavButton";

export default function HomeTemplate() {
    return (
        <div className={`${BACKGROUND_THEME} flex flex-1 justify-center items-center`}>
            <NavButton path={"/questionnaire"} label="心理テストを始める" />
        </div>
    );
}