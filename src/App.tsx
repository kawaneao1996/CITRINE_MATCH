import './App.css'
import { quizItems_ver0 } from './quiz/Data';
import { calculateScore } from './utils/CalculateScore';

function App() {
  const onSubmit = () => {
    console.log(calculateScore(quizItems_ver0));
  };

  return (
    <>
      {
        quizItems_ver0.map((quizItem, index) => (
          <section key={index}>
            <article>{quizItem.question}</article>
            {Object.entries(quizItem.choices).map(([key, choice]) => (
              <button key={key} onClick={() => { quizItem.answer = choice }}>{choice.sentence}</button>
            ))}
          </section>
        ))
      }
      <button type="button" onClick={() => onSubmit()}>診断！</button>
    </>
  );
}


export default App
