import { UseFormRegister } from "react-hook-form";
import { Answers, QuizItem } from "../quiz/Types";

type Props = {
    quizItem: QuizItem,
    index: number,
    register: UseFormRegister<Answers>,
};

function QuizCard(props: Props) {
    return (
        <section className="bg-green-400">
            <h2>{props.index + 1}問目</h2>
            <p>{props.quizItem.question}</p>
            <fieldset>
                <legend>選択肢</legend>
                {props.quizItem.choices.map((choice, index) => (
                    <div className="bg-primary-400">
                        <input
                            type="radio"
                            id={`${props.index}.choices.${index}`}
                            value={JSON.stringify(choice.evaluationScore)}
                            // TODO registerの引数の型をneverからstringに変更する
                            // 8行目のregisterの型をAnswersからanyにするとエラーが消える
                            {...props.register(`${props.index}.answer` as never)}
                        />
                        <label
                            htmlFor={`${props.index}.choices.${index}`}
                        >
                            {choice.sentence}
                        </label>
                    </div>
                ))}
            </fieldset>
        </section>
    );
}

export default QuizCard;