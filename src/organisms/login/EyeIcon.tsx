import { useState } from "react";

export const EyeIcon = (props: {onClick: () => void}) => {
    const [visible, setVisible] = useState(true);
    const toggleVisibility = () => setVisible(!visible);
    const onClick = () =>  {toggleVisibility(); props.onClick();};

    const eye = <button onClick={onClick} type="button" aria-label="show password" className="i-material-symbols-visibility-outline text-xl"></button>;
    const closedEye = <button onClick={onClick} type="button" aria-label="hide password" className="i-material-symbols-visibility-off-outline text-xl"></button>;

    return (
        visible ? eye : closedEye
    );
};