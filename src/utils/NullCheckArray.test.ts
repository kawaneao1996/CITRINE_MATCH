import { expect, test } from 'vitest'

test("何もしないテスト", () => { });

import { NullCheckArray } from './NullCheckArray';
import { EvaluationCriteria } from '../quiz/Types';


test("nullなしは0を返す", () => {
    const test: EvaluationCriteria[] = [
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
    const result = NullCheckArray(test);
    expect(0).toEqual(result);
});

test("nullがあるとその最小indexを返す", () => {
    const test = [
        {
            selfEsteemLevel: 0.4,
            extroversionLevel: 0.5,
            energyEmissionLevel: 0.6
        },
        null,
        null,
    ];
    const result = NullCheckArray(test);
    expect(result).toBe(1);
});