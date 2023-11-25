# 設計

## 問題文、選択肢 `quizItem`のデータ構造

```typescript
type QuizItem = {
    question: string,
    choices: Choice[],
    answer?: Choice,
};
type EvaluationCriteria = {
    // スコアは -1.0 ~ 1.0 で付ける
    // 自己愛・自己嫌悪（プラスが自己愛）
    selfEsteemLevel:null|number,
    // 外交的・内向的の軸（プラスが外交的）
    extroversionLevel:null|number,
    // 発信と受信（プラスが発信）
    energyEmissionLevel:null|number,
};
type Choice = {
    // 選択肢の文
    sentence:string,
    // 評価項目の値
    evaluationScore:EvaluationCriteria,
};
```

`userScore:EvaluationCriteria` となる

## 評価の計算方法

評価項目の値`evaluationScore`で非nullの値の平均値を評価値とする。
評価項目の値は絶対値が１以下なので、その平均値である評価値も絶対値が１以下になる。
ならなかったら切り捨てでいいかな。

評価値を求める`calculateScore`の処理の流れは以下のようになる。

1. evaluationScoreの各プロパティ名をプロパティ名に、値としてリストを持つオブジェクトを内部変数として定義
2. 内部変数のリストに`quizItems[i].answer.property`をnullでないならappendする
3. 内部変数のリストについて平均値を求める（以下のメソッドを定義する）
   1. 長さが0ならばnullを入れる
   2. そうでないならば、リストの要素の合計値をリストの長さで割った値を返す
4. 内部変数の各プロパティ名と平均値がセットになったオブジェクトを返す

なので引数は`quizItems`, 戻り値は`EvaluationCriteria`型のオブジェクト。
