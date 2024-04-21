import { useForm, SubmitHandler } from "react-hook-form";
import { Inputs, inputs } from "../../utils/LoginUtil";
import { Fragment } from "react";
import { BUTTON_THEME_LOGIN, VALIDATION_MESSAGE } from "../../utils/theme";

export const Login = () => {
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
            <h1 className="text-xl">ログイン</h1>
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
                                            {<span className={`${VALIDATION_MESSAGE}`}>{errors[keyAsInputKey]?.message || ' '}</span>}
                                        </Fragment>
                                    )
                                );
                            })}
                            <input type="submit" className={`${BUTTON_THEME_LOGIN}`} />
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};