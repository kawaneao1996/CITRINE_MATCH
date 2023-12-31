import Header from "../organisms/Header";
import QuizCardsOrganism from "../organisms/QuizCardsOrganism";

function QuestionaireTemplate() {
    // TODO パンくずリストを追加する
    return (
        <>
            <Header />
            <div className="
            w-full
            h-full
            p-10
            bg-gradient-to-r 
            from-pink-700
            via-primary-600
            to-primary-700
            background-animate
            ">
                <QuizCardsOrganism />
            </div>
        </>
    );
}

export default QuestionaireTemplate;