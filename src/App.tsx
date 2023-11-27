import { SubmitHandler, useForm } from 'react-hook-form';
import './App.css'
import QuizCard from './elements/QuizCard';
import { quizItems_ver0 } from './quiz/Data';
import { calculateScore } from './utils/CalculateScore';
import { EvaluationCriteria } from './quiz/Types';

export type Answers = { [index: string]: { answer: string } };
function App() {
  const { register, handleSubmit } = useForm<Answers>();
  const onSubmit: SubmitHandler<Answers> = (answers: Answers) => {
    const answersArray: EvaluationCriteria[] = [];
    Object.keys(answers).map((key) => answersArray.push(JSON.parse(answers[key].answer)))
    console.log(answersArray);
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
