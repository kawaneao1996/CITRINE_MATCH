import './App.css'

function App() {
  // 選択肢を表す型
  type Choices = { 1: string, 2: string, 3: string, 4: string };
  // 問題文、選択肢、解答を表す型
  type QuizItem = { question: string, choices: Choices, answer?: number };
  const quizItems: QuizItem[] = [
    { question: 'あなたが好きな季節は？', choices: { 1: '春', 2: '夏', 3: '秋', 4: '冬' }, },
    { question: 'あなたが好きな場所は？', choices: { 1: '山', 2: '海', 3: '川', 4: '野原' }, },
    { question: 'あなたが好きな食べ物は？', choices: { 1: '動物の肉', 2: '魚', 3: '野菜・穀物', 4: '乳製品' }, },
  ]

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
      <button type="button" onClick={() => { console.log(quizItems[0].answer) }}>診断！</button>
    </>
  );
}

export default App
