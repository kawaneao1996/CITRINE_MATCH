import { describe, expect, test } from 'vitest'

test("何もしないテスト", () => { });

import { calculateScore } from './CalculateScore';
import { EvaluationCriteria } from '../quiz/Types';


// 全て解答済のデータ
const answersArrayAllAnswered: EvaluationCriteria[] = [
    {
        selfEsteemLevel: 0.1,
        extroversionLevel: 0.2,
        energyEmissionLevel: 0.3
    },
    {
        selfEsteemLevel: 0.4,
        extroversionLevel: 0.5,
        energyEmissionLevel: 0.6
    },

    {
        selfEsteemLevel: -0.8,
        extroversionLevel: 0.8,
        energyEmissionLevel: 0.9
    }
];
describe('calculateScoreの正常系(全問解答済)のテスト', () => {

    // 正常系で期待される結果
    const expected: EvaluationCriteria = {
        selfEsteemLevel: -0.1,
        extroversionLevel: 0.5,
        energyEmissionLevel: 0.6
    };

    test('正常系では戻り値はfalseにならない', () => {
        const result = calculateScore(answersArrayAllAnswered);
        expect(result).not.toEqual(false);
    });

    test('正常系では戻り値のプロパティの値にnullは含まれない', () => {
        const result = calculateScore(answersArrayAllAnswered);
        if (result !== false) {
            Object.keys(result).forEach((key) => {
                const resultValue = result[key as keyof EvaluationCriteria];
                expect(resultValue).not.toBeNull();
            });
        }
    }),
        test('平均値の計算の結果が正しい', () => {
            const result = calculateScore(answersArrayAllAnswered);
            expect(result).not.toEqual(false);
            if (result !== false) {
                Object.keys(result).forEach((key) => {
                    const resultValue = result[key as keyof EvaluationCriteria];
                    const expectedValue = expected[key as keyof EvaluationCriteria];
                    if (resultValue !== null) {
                        expect(resultValue).toBeCloseTo(expectedValue!, 2);
                    }
                });
            }
        });
});

// 未解答のデータ(answerにnull)
const answersStillNotAnswered: (EvaluationCriteria | null)[] = [
    null,
    {
        selfEsteemLevel: 0.4,
        extroversionLevel: 0.5,
        energyEmissionLevel: 0.6
    },
    null,
];
describe('calculateScoreの正常系(未解答)のテスト', () => {

    test('未解答では戻り値がfalseになる', () => {
        const result = calculateScore(answersStillNotAnswered);
        expect(result).toEqual(false);
    });

});

// 解答したが、問題に項目がなく、answer.evaluationScoreにnullが入っている場合
const answersHasScoreNull: (EvaluationCriteria | null)[] = [
    {
        selfEsteemLevel: null,
        extroversionLevel: 0.2,
        energyEmissionLevel: null
    },
    {
        selfEsteemLevel: 0.4,
        extroversionLevel: null,
        energyEmissionLevel: null
    },
    {
        selfEsteemLevel: 0.4,
        extroversionLevel: 0.2,
        energyEmissionLevel: null
    }


];

describe('calculateScoreの正常系(answer.evaluationScoreにnullが入っている場合)のテスト', () => {

    const expected: EvaluationCriteria = {
        selfEsteemLevel: 0.4,
        extroversionLevel: 0.2,
        energyEmissionLevel: null,
    };

    test('戻り値はfalseにならない', () => {
        const result = calculateScore(answersHasScoreNull);
        expect(result).not.toEqual(false);
    });

    test('answer.evaluationScoreにnullが入っていたら平均値は非nullの値の数で求められ、また全てnullならばnullになる', () => {
        const result = calculateScore(answersHasScoreNull);
        expect(result).not.toEqual(false);
        if (result !== false) {
            Object.keys(result).forEach((key) => {
                const resultValue = result[key as keyof EvaluationCriteria];
                const expectedValue = expected[key as keyof EvaluationCriteria];
                if (resultValue !== null) {
                    expect(resultValue).toBeCloseTo(expectedValue!, 2);
                }
            });
        }
    })

})

// const quizItemsAllAnswered: QuizItem[] = [
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
//     }
// ];
