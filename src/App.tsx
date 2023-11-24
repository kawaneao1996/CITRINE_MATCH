import './App.css'

function App() {
  type QuizItem = {
    question: string,
    choices: Choice[],
    answer?: Choice,
  };
  type EvaluationCriteria = {
    // スコアは -1.0 ~ 1.0 で付ける
    // 自己愛・自己嫌悪（プラスが自己愛）
    selfEsteemLevel: null | number,
    // 外交的・内向的の軸（プラスが外交的）
    extroversionLevel: null | number,
    // 発信と受信（プラスが発信）
    energyEmissionLevel: null | number,
  };
  type Choice = {
    // 選択肢の文
    sentence: string,
    // 評価項目の値
    evaluationScore: EvaluationCriteria,
  };
  const quizItems: QuizItem[] = [];

  const onSubmit = () => {
    console.log(quizItems);
  };

  return (
    <>
      {
        quizItems.map((quizItem, index) => (
          <section key={index}>
            <article>{quizItem.question}</article>
            {Object.entries(quizItem.choices).map(([key, value]) => (
              <button key={key} onClick={() => { quizItem.answer = Number(key) }}>{value}</button>
            ))}
          </section>
        ))
      }
      <button type="button" onClick={() => onSubmit()}>診断！</button>
    </>
  );
}

export default App
