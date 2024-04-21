import { SubmitHandler, useForm } from "react-hook-form";
import { BUTTON_THEME_LOGIN, VALIDATION_MESSAGE } from "../../utils/theme";
import { Fragment } from "react";
import { Inputs, inputs } from "../../utils/LoginUtil";

export const SignUp = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        alert('実装中だよ：'+JSON.stringify(data));
    };

    return (
        <>
            <h1 className="text-xl text-secondary-950">サインアップ（新規登録）</h1>
            <div className="grid grid-cols-1 divide-y-3 ">
                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex flex-col ">
                            {Object.entries(inputs).map(([key, input], index) => {
                                const keyAsInputKey = key as keyof Inputs;
                                return (
                                    input && (
                                        <Fragment key={index}>
                                            <input placeholder={input.placeholder} {...register(keyAsInputKey, input.validation)} className="h-10 m-4 p-2" />
                                            {input.icon && undefined}
                                            {<span className={`${VALIDATION_MESSAGE}`}>{errors[keyAsInputKey]?.message || ' '}</span>}
                                        </Fragment>
                                    )
                                );
                            })}
                            <input type="submit" className={`${BUTTON_THEME_LOGIN}`} />
                        </div>
                    </form>
                </div>
                <div className="relative flex py-5 items-center">
                    <div className="flex-grow border-t border-gray-400"></div>
                    <span className="flex-shrink mx-4 text-gray-800">または</span>
                    <div className="flex-grow border-t border-gray-400"></div>
                </div>

                <div className="flex flex-col justify-center">
                    <button className={`${BUTTON_THEME_LOGIN}`} onClick={() => { alert('実装中だよ');}}>アカウントを作成せずに試す</button>
                </div>
            </div>
        </>
    );
};