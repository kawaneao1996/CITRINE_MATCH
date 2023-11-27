import { SubmitHandler, useForm } from 'react-hook-form';
import './App.css'
import QuizCard from './elements/QuizCard';
import { quizItems_ver0 } from './quiz/Data';
import { calculateScore } from './utils/CalculateScore';
import { EvaluationCriteria } from './quiz/Types';
import { NullCheckArray } from './utils/NullCheckArray';

export type Answers = { [index: number]: { answer: string } };
function App() {
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


export default App
