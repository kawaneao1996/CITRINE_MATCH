import { UseFormRegister } from "react-hook-form";
import { Answers, QuizItem } from "../quiz/Types";

type Props = {
    quizItem: QuizItem,
    index: number,
    register: UseFormRegister<Answers>,
};

function QuizCard(props: Props) {
    return (
        <div className="bg-opaity-10  border-2 rounded-xl m-5 p-5">
            <section className="bg-opacity-0 text-white">
                <h2>{props.index + 1}問目</h2>
                <p>{props.quizItem.question}</p>
                <fieldset className="border-2 rounded-lg m-2 p-4 ">
                    <legend className="px-2">選択肢</legend>
                    {props.quizItem.choices.map((choice, index) => (
                            <label
                                htmlFor={`${props.index}.choices.${index}`}
                                className="block rounded-md bg-opacity-0 hover:bg-opacity-50 hover:bg-white hover:text-primary-600  py-2"
                            >
                                <input
                                    type="radio"
                                    id={`${props.index}.choices.${index}`}
                                    value={JSON.stringify(choice.evaluationScore)}
                                    // TODO registerの引数の型をneverからstringに変更する
                                    // 8行目のregisterの型をAnswersからanyにするとエラーが消える
                                    // TODO バリデーションを追加する
                                    {...props.register(`${props.index}.answer` as never)}
                                />
                                {choice.sentence}
                            </label>
                    ))}
                </fieldset>
            </section>
        </div>
    );
}

export default QuizCard;