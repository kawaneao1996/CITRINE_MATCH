import Header from "../organisms/Header";
import { BACKGROUND_THEME } from "../utils/theme";
import NavButton from "../elements/NavButton";

export default function HomeTemplate() {

    return (
        <>
            <Header />
            {/* 心理テストの画面に遷移するボタン */}
            <div className={BACKGROUND_THEME}>
                <NavButton path={"/questionnaire"} label="心理テストを始める" />
            </div>
        </>
    );
}