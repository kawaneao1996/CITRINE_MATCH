import { EvaluationCriteria } from "../quiz/Types";

/**
 * 渡された配列のnullのインデックスのうち、最小の値を返す。
 * @param answersArray CalculateScoreに渡す配列
 * @returns nullの最小index。nullがなければ0を返す。
 */
export function NullCheckArray(answersArray: (EvaluationCriteria | null)[]): number {
    const nullIndex = answersArray.findIndex(answer => answer === null);
    // nullIndexが-1、つまりnullがなければ0を返す。
    // これはCalculateScoreがfalseの時だけこのメソッドを呼び出すのでそのようにする。
    // このメソッドの戻り値が未解答の選択肢へのスクロール先を示す。
    return nullIndex >= 0 ? nullIndex : 0;
}