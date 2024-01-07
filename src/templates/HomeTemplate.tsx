import Button from "../elements/Button";
import Header from "../organisms/Header";
import { BACKGROUND_THEME } from "../utils/theme";

export default function HomeTemplate() {
    return (
        <>
            <Header />
            {/* 心理テストの画面に遷移するボタン */}
            <div className={BACKGROUND_THEME}>
                <Button type="button" label="心理テストを始める" />
            </div>
        </>
    );
}