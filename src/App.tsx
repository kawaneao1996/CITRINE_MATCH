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

  function calculateScore(quizItems: QuizItem[]): EvaluationCriteria | false {
    const notNullScores: Record<keyof EvaluationCriteria, number[]> = {
      selfEsteemLevel: [],
      extroversionLevel: [],
      energyEmissionLevel: [],
    };
    const resultScores: Record<keyof EvaluationCriteria, number | null> = {
      selfEsteemLevel: null,
      extroversionLevel: null,
      energyEmissionLevel: null,
    };
    for (const item of quizItems) {
      if (item.answer === undefined) {
        return false;
      } else {
        Object.keys(item.answer.evaluationScore).forEach(key => {
          const score = item.answer!.evaluationScore[key as keyof EvaluationCriteria];
          if (score !== null) {
            notNullScores[key as keyof EvaluationCriteria].push(score);
          }
        });
        for (const key in notNullScores) {
          const scores = notNullScores[key as keyof EvaluationCriteria];
          if (scores.length > 0) {
            const sum = scores.reduce((a, b) => a + b, 0);
            resultScores[key as keyof EvaluationCriteria] = sum / scores.length;
          }
        }
      }
    }
    return resultScores;
  }
  const onSubmit = () => {
    console.log(calculateScore(quizItems));
  };

  return (
    <>
      {
        quizItems.map((quizItem, index) => (
          <section key={index}>
            <article>{quizItem.question}</article>
            {Object.entries(quizItem.choices).map(([key, value]) => (
              <button key={key} onClick={onSubmit}>{value.sentence}</button>
            ))}
          </section>
        ))
      }
      <button type="button" onClick={() => onSubmit()}>診断！</button>
    </>
  );
}


export default App
