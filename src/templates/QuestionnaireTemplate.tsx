import QuizCardsOrganism from "../organisms/QuizCardsOrganism";
import { BACKGROUND_THEME_QUESTION } from "../utils/theme";

function QuestionnaireTemplate() {
    // TODO パンくずリストを追加する
    return (
        <>
            <div className={`${BACKGROUND_THEME_QUESTION} flex flex-1 justify-center items-center`}>
                <QuizCardsOrganism />
            </div>
        </>
    );
}

export default QuestionnaireTemplate;