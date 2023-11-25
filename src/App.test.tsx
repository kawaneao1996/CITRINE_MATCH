// import { expect, test } from 'vitest'
// import App from './App'

// test("何もしないテスト", () => { });

// import { calculateScore } from './App';
// import QuizItem from './App'
// import EvaluationCriteria from './App'

// // 正常系のデータ
// const quizItemsValid: QuizItem[] = [
//     {
//         question: "Question 1",
//         choices: [
//             {
//                 sentence: "Choice 1",
//                 evaluationScore: {
//                     selfEsteemLevel: 0.1,
//                     extroversionLevel: 0.2,
//                     energyEmissionLevel: 0.3
//                 }
//             },
//             {
//                 sentence: "Choice 2",
//                 evaluationScore: {
//                     selfEsteemLevel: 0.1,
//                     extroversionLevel: 0.2,
//                     energyEmissionLevel: 0.3
//                 }
//             },
//             // 必要に応じて他の選択肢を追加
//         ],
//         answer:
//         {
//             sentence: "Choice 1",
//             evaluationScore: {
//                 selfEsteemLevel: 0.1,
//                 extroversionLevel: 0.2,
//                 energyEmissionLevel: 0.3
//             }
//         },
//     },
//     {
//         question: "Question 2",
//         choices: [
//             {
//                 sentence: "Choice 1",
//                 evaluationScore: {
//                     selfEsteemLevel: 0.4,
//                     extroversionLevel: 0.5,
//                     energyEmissionLevel: 0.6
//                 }
//             },
//             // 必要に応じて他の選択肢を追加
//         ],
//         answer:
//         {
//             sentence: "Choice 1",
//             evaluationScore: {
//                 selfEsteemLevel: 0.4,
//                 extroversionLevel: 0.5,
//                 energyEmissionLevel: 0.6
//             }
//         },
//     },
//     {
//         question: "Question 3",
//         choices: [
//             {
//                 sentence: "Choice 1",
//                 evaluationScore: {
//                     selfEsteemLevel: -0.8,
//                     extroversionLevel: 0.8,
//                     energyEmissionLevel: 0.9
//                 }
//             },
//             // 必要に応じて他の選択肢を追加
//         ],
//         answer:
//         {
//             sentence: "Choice 1",
//             evaluationScore: {
//                 selfEsteemLevel: -0.8,
//                 extroversionLevel: 0.8,
//                 energyEmissionLevel: 0.9
//             }
//         },
//     }
// ];
// test('calculateScore correctly calculates scores', () => {

//     const expected: EvaluationCriteria = {
//         // ここに期待される結果を追加します
//         selfEsteemLevel: -0.1,
//         extroversionLevel: 0.5,
//         energyEmissionLevel: 0.6
//     };

//     const result = calculateScore(quizItemsValid);
//     expect(result).toEqual(expected);
// });

// // 異常系のデータ(answerにnull)
// const quizItemsInvalid: QuizItem[] = [
//     {
//         question: "Question 1",
//         choices: [
//             {
//                 sentence: "Choice 1",
//                 evaluationScore: {
//                     selfEsteemLevel: 0.1,
//                     extroversionLevel: 0.2,
//                     energyEmissionLevel: 0.3
//                 }
//             },
//             // 必要に応じて他の選択肢を追加
//         ],
//         answer: null
//     },
//     {
//         question: "Question 2",
//         choices: [
//             {
//                 sentence: "Choice 1",
//                 evaluationScore: {
//                     selfEsteemLevel: 0.4,
//                     extroversionLevel: 0.5,
//                     energyEmissionLevel: 0.6
//                 }
//             },
//             // 必要に応じて他の選択肢を追加
//         ],
//         answer: null
//     },
//     {
//         question: "Question 3",
//         choices: [
//             {
//                 sentence: "Choice 1",
//                 evaluationScore: {
//                     selfEsteemLevel: 0.7,
//                     extroversionLevel: 0.8,
//                     energyEmissionLevel: 0.9
//                 }
//             },
//             // 必要に応じて他の選択肢を追加
//         ],
//         answer: null
//     }
// ];

// test('calculateScore returns false if any answer is null', () => {
//     // const quizItems: QuizItem[] = [
//     //     // ここに、少なくとも1つのanswerがnullのテストデータを追加します
//     // ];

//     // const result = calculateScore(quizItems);
//     // expect(result).toBe(false);
// });