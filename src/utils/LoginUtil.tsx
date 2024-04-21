import { useState } from "react";

type TypeMap = {
    'string': string,
    'number': number,
};

export const inputs = {
    'email': {
        type: 'string',
        placeholder: 'メールアドレス',
        validation: {
            required: "メールアドレスは必須です",
            pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "invalid email address",
            },
        },
        icon: undefined,
    },
    'password': {
        type: 'string',
        placeholder: 'パスワード',
        validation: { 
            required: "パスワードは必須です",
            minLength: {
                value: 4,
                message: "パスワードは4文字以上で入力してください",
            },
        },
        icon: <i>aaa</i>,
    },
} as const;
export type Inputs = {
    [K in keyof typeof inputs]: TypeMap[typeof inputs[K]['type']]
};
export const useTogglePasswordVisibility = () => {
    const [visible, setVisible] = useState(false);
    const toggleVisibility = () => setVisible(!visible);
    return { visible, toggleVisibility };
};