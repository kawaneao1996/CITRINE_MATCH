import Header from "../organisms/Header";
import QuizCardsOrganism from "../organisms/QuizCardsOrganism";
import { BACKGROUND_THEME } from "../utils/theme";

function QuestionnaireTemplate() {
    // TODO パンくずリストを追加する
    return (
        <>
            <Header />
            <div className={BACKGROUND_THEME}>
                <QuizCardsOrganism />
            </div>
        </>
    );
}

export default QuestionnaireTemplate;