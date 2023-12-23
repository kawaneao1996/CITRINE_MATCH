import QuizCardsOrganism from "../organisms/QuizCardsOrganism";

function QuestionaireTemplate() {
    // TODO パンくずリストを追加する
    return (
        <>
            <div className="
            w-full
            h-full
            p-10
            bg-gradient-to-r 
            from-primary-500
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