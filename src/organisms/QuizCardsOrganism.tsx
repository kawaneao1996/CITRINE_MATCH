import { useForm, SubmitHandler } from "react-hook-form";
import QuizCard from "../elements/QuizCard";
import { quizItems_ver0 } from "../quiz/Data";
import { Answers, EvaluationCriteria } from "../quiz/Types";
import { calculateScore } from "../utils/CalculateScore";
import { NullCheckArray } from "../utils/NullCheckArray";
import { useEffect, useRef } from "react";
import Button from "../elements/Button";

function QuizCardsOrganism() {
    const { register, handleSubmit, formState: { isSubmitted }, watch } = useForm<Answers>();
    const refs = quizItems_ver0.map(() => useRef<HTMLDivElement>(null)); // 各選択肢に対する参照を作成
    // 診断ボタンのrefを作成
    const submitButtonRef = useRef<HTMLButtonElement>(null);
    const watchAll = watch();
    useEffect(() => {
        try {
            // watchAllの初期値が{}なので、Object.keys(watchAll).length !== 0を追加
            if (Object.keys(watchAll).length !== 0) {
                // watchAllのnullの値をチェックする
                // nullの値があればそのvalueのkeyを返す
                const NullCheckArrayIndex = Object.values(watchAll).findIndex((value) => value.answer === null);
                if (NullCheckArrayIndex !== -1) {
                    refs[NullCheckArrayIndex].current!.scrollIntoView({ behavior: 'smooth' }); // 未回答の選択肢までスクロール
                } else {
                    submitButtonRef.current!.scrollIntoView({ behavior: 'smooth' }); // 診断ボタンまでスクロール
                }
            }
        } catch (error) {
            console.log(error);
        }
    }, [watchAll]);

    const onSubmit: SubmitHandler<Answers> = (answers: Answers) => {
        const answersArray: (EvaluationCriteria | null)[] = [];
        Object.keys(answers).map((key) => {
            const numKey = Number(key);
            answersArray.push(JSON.parse(answers[numKey].answer))
        })
        const calcResult: EvaluationCriteria | false = calculateScore(answersArray);
        if (calcResult) {
            alert('回答を受け付けました');
        } else {
            // TODO console.logを削除する
            console.log("未回答があります");
            alert("未回答があります");
            console.log(NullCheckArray(answersArray))
            refs[NullCheckArray(answersArray)].current!.scrollIntoView({ behavior: 'smooth' }); // 未回答の選択肢までスクロール
        }
    };
    return (
        <>
            <div className="w-full h-auto mx-auto p-5 ">
                <form onSubmit={handleSubmit(onSubmit)}>
                    {
                        quizItems_ver0.map((quizItem, index) => (
                            <div ref={refs[index]} key={`quizItem.div.${index}`}> {/* 各選択肢に参照を設定 */}
                                <QuizCard key={`quizItem.QuizCard.${index}`} quizItem={quizItem} index={index} register={register} isSubmitted={isSubmitted} />
                            </div>
                        ))
                    }
                    <div className="flex flex-col justify-center items-center">
                        <Button
                            type="submit"
                            ref={submitButtonRef}
                            label="診断！"
                        />
                    </div>
                </form>
            </div>
        </>
    );
}

export default QuizCardsOrganism;