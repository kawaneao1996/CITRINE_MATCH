import { QuizItem } from "./Types";
export const quizItems_ver0: QuizItem[] = [
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