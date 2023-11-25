import { EvaluationCriteria, QuizItem } from "../quiz/Types";

/**
* クイズアイテムの配列からスコアを計算します。
* 各クイズアイテムのanswerから評価スコアを取得し、それらの平均値を計算します。もし
* 問題に評価項目が含まれていなかったら評価スコアはnullが入ります。
* answerがnullのクイズアイテムが存在する場合、未解答があると判断し処理を中断しfalseを返します。
*
* @param quizItems スコアを計算するためのクイズアイテムの配列
* @returns 計算されたスコアのオブジェクト。ただし、任意のクイズアイテムのanswerがnullの場合はfalseを返します。
*/
export function calculateScore(quizItems: QuizItem[]): EvaluationCriteria | false {
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