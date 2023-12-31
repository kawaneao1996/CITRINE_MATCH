import { UseFormRegister } from "react-hook-form";
import { Answers, QuizItem } from "../quiz/Types";
import { useState } from "react";

type Props = {
    key: string,
    quizItem: QuizItem,
    index: number,
    register: UseFormRegister<Answers>,
    isSubmitted: boolean,
};

function QuizCard(props: Props) {
    // ラジオボタンが入力されたかどうかを表す変数
    const [isInput, setIsInput] = useState(false);
    const { onChange, ...rest } = props.register(`${props.index}.answer` as never);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsInput(true);
        onChange(e);
    };

    return (
        <div className="bg-opaity-10  border-2 rounded-xl m-5 p-5">
            <section className="bg-opacity-0 text-white">
                <h2>{props.index + 1}問目</h2>
                <p className="font-bold">{props.quizItem.question}</p>
                {/* 提出済みでかつ未入力ならメッセージを表示する */}
                {(props.isSubmitted && !isInput) && <p className="text-xl font-bold text-secondary-400 animate-pulse">選択肢を選択してください</p>}
                <fieldset className="border-2 rounded-lg m-2 p-4 ">
                    <legend className="px-2">選択肢</legend>
                    {props.quizItem.choices.map((choice, index) => (
                        <div key={`${props.index}.choices.${index}`} >
                            <input
                                type="radio"
                                id={`${props.index}.choices.${index}`}
                                value={JSON.stringify(choice.evaluationScore)}
                                // TODO registerの引数の型をneverからstringに変更する
                                // 8行目のregisterの型をAnswersからanyにするとエラーが消える
                                // TODO バリデーションを追加する
                                // {...props.register(`${props.index}.answer` as never)}
                                onChange={handleChange}
                                {...rest}
                                className="hidden peer"
                            />
                            <label
                                htmlFor={`${props.index}.choices.${index}`}
                                className="
                                block 
                                rounded-md 
                                bg-opacity-0 
                                hover:bg-opacity-50 
                                hover:bg-white 
                                hover:text-primary-600  
                                py-2
                                peer-checked:bg-secondary-300
                                peer-checked:text-primary-600
                                peer-checked:motion-safe:animate-bounce
                                font-bold
                                "
                            >
                                {choice.sentence}
                            </label>
                        </div>
                    ))}
                </fieldset>
            </section>
        </div>
    );
}

export default QuizCard;