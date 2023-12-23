import { useForm, SubmitHandler } from "react-hook-form";
import QuizCard from "../elements/QuizCard";
import { quizItems_ver0 } from "../quiz/Data";
import { Answers, EvaluationCriteria } from "../quiz/Types";
import { calculateScore } from "../utils/CalculateScore";
import { NullCheckArray } from "../utils/NullCheckArray";
import { useRef } from "react";

function QuizCardsOrganism() {
    const { register, handleSubmit, formState:{isSubmitted} } = useForm<Answers>();
    const refs = quizItems_ver0.map(() => useRef<HTMLDivElement>(null)); // 各選択肢に対する参照を作成

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
            refs[NullCheckArray(answersArray)].current!.scrollIntoView({ behavior: 'smooth' }); // 未回答の選択肢までスクロール
        }
    };
    return (
        <>
            <div className="w-[80%] h-auto mx-auto p-5 rounded-2xl  bg-white bg-opacity-20">
                <form onSubmit={handleSubmit(onSubmit)}>
                    {
                        quizItems_ver0.map((quizItem, index) => (
                            <div ref={refs[index]} key={index}> {/* 各選択肢に参照を設定 */}
                                <QuizCard quizItem={quizItem} index={index} register={register} isSubmitted={isSubmitted} />
                            </div>
                        ))
                    }
                    <button type="submit"
                        className="
                        mx-auto
                        block
                        p-2
                        text-white
                        hover:text-primary-600
                        hover:bg-white
                        border-2
                        rounded-lg
                    "
                    >
                        診断！
                    </button>
                </form>
            </div>
        </>
    );
}

export default QuizCardsOrganism;