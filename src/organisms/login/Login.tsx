import { useForm, SubmitHandler } from "react-hook-form";
import { Fragment } from "react";
import { BUTTON_THEME_LOGIN, VALIDATION_MESSAGE } from "../../utils/theme";

import { useState } from "react";
import { EyeIcon } from "./EyeIcon";

type TypeMap = {
    'string': string,
    'number': number,
};

export const Login = () => {

    const togglePasswordType = () => {
        setPasswordType(passwordType === 'password' ? 'text' : 'password');
    };

    const [passwordType, setPasswordType] = useState('password');


    const eyeIcon = <EyeIcon onClick={togglePasswordType} />;

    const inputs = {
        'email': {
            valueType: 'string',
            placeholder: 'メールアドレス',
            validation: {
                required: "メールアドレスは必須です",
                pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "invalid email address",
                },
            },
            inputType: 'email',
            icon: undefined,
        },
        'password': {
            valueType: 'string',
            placeholder: 'パスワード',
            validation: {
                required: "パスワードは必須です",
                minLength: {
                    value: 4,
                    message: "パスワードは4文字以上で入力してください",
                },
            },
            inputType: passwordType,
            icon: eyeIcon,
        },
    } as const;
    type Inputs = {
        [K in keyof typeof inputs]: TypeMap[typeof inputs[K]['valueType']]
    };
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        alert('実装中だよ：' + JSON.stringify(data));
    };

    return (
        <>
            <h1 className="text-xl text-secondary-950">ログイン</h1>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col">
                        {Object.entries(inputs).map(([key, input], index) => {
                            const keyAsInputKey = key as keyof Inputs;
                            return (
                                input && (
                                    <Fragment key={index}>
                                        <div className="relative my-2">
                                            <input
                                                placeholder={input.placeholder}
                                                {...register(keyAsInputKey, input.validation)}
                                                className="h-10 p-2 my-2 w-[100%] rounded-md"
                                                type={input.inputType}
                                            />
                                            {input.icon && <span className="absolute top-[50%] -translate-y-1/2 right-5 h-auto">{input.icon}</span>}
                                        </div>
                                        <div className="-mt-4">
                                            {<span className={`${VALIDATION_MESSAGE}`}>{errors[keyAsInputKey]?.message || ' '}</span>}
                                        </div>
                                    </Fragment>
                                )
                            );
                        })}
                        <input type="submit" className={`${BUTTON_THEME_LOGIN}`} />
                    </div>
                </form>
            </div>
        </>
    );
};