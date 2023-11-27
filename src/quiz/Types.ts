export type QuizItem = {
    question: string,
    choices: Choice[],
};
export type EvaluationCriteria = {
    // スコアは -1.0 ~ 1.0 で付ける
    // 自己愛・自己嫌悪（プラスが自己愛）
    selfEsteemLevel: null | number,
    // 外交的・内向的の軸（プラスが外交的）
    extroversionLevel: null | number,
    // 発信と受信（プラスが発信）
    energyEmissionLevel: null | number,
};
export type Choice = {
    // 選択肢の文
    sentence: string,
    // 評価項目の値
    evaluationScore: EvaluationCriteria,
};