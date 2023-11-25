import './App.css'

function App() {
  type QuizItem = {
    question: string,
    choices: Choice[],
    // 解答前はnullが入っている
    answer: Choice | null,
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
  const quizItems: QuizItem[] = [
    {
      question: "Question 1",
      choices: [
        {
          sentence: "Choice 1",
          evaluationScore: {
            selfEsteemLevel: 0.1,
            extroversionLevel: 0.2,
            energyEmissionLevel: 0.3
          }
        },
        // 必要に応じて他の選択肢を追加
      ],
      answer: null
    },
    {
      question: "Question 2",
      choices: [
        {
          sentence: "Choice 1",
          evaluationScore: {
            selfEsteemLevel: 0.4,
            extroversionLevel: 0.5,
            energyEmissionLevel: 0.6
          }
        },
        // 必要に応じて他の選択肢を追加
      ],
      answer: null
    },
    {
      question: "Question 3",
      choices: [
        {
          sentence: "Choice 1",
          evaluationScore: {
            selfEsteemLevel: 0.7,
            extroversionLevel: 0.8,
            energyEmissionLevel: 0.9
          }
        },
        // 必要に応じて他の選択肢を追加
      ],
      answer: null
    }
  ];
  /**
  * クイズアイテムの配列からスコアを計算します。
  * 各クイズアイテムのanswerから評価スコアを取得し、それらの平均値を計算します。もし
  * 問題に評価項目が含まれていなかったら評価スコアはnullが入ります。
  * answerがnullのクイズアイテムが存在する場合、未解答があると判断し処理を中断しfalseを返します。
  *
  * @param quizItems スコアを計算するためのクイズアイテムの配列
  * @returns 計算されたスコアのオブジェクト。ただし、任意のクイズアイテムのanswerがnullの場合はfalseを返します。
  */
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
      if (item.answer === null) {
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
