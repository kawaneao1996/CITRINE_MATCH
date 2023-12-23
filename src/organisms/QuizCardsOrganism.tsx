import { useForm, SubmitHandler } from "react-hook-form";
import QuizCard from "../elements/QuizCard";
import { quizItems_ver0 } from "../quiz/Data";
import { Answers, EvaluationCriteria } from "../quiz/Types";
import { calculateScore } from "../utils/CalculateScore";
import { NullCheckArray } from "../utils/NullCheckArray";

function QuizCardsOrganism() {
    const { register, handleSubmit } = useForm<Answers>();
    const onSubmit: SubmitHandler<Answers> = (answers: Answers) => {
        const answersArray: (EvaluationCriteria | null)[] = [];
        Object.keys(answers).map((key) => {
            const numKey = Number(key);
            answersArray.push(JSON.parse(answers[numKey].answer))
        })
        const calcResult: EvaluationCriteria | false = calculateScore(answersArray);
        if (calcResult) {
            console.log(calcResult);
        } else {
            console.log("未回答があります");
            console.log(NullCheckArray(answersArray))
        }
    };
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                {
                    quizItems_ver0.map((quizItem, index) => (
                        <QuizCard quizItem={quizItem} index={index} register={register} />
                    ))
                }
                <button type="submit">診断！</button>
            </form>
        </>
    );
}

export default QuizCardsOrganism;