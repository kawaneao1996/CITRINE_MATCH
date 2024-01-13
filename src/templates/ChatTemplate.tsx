import { BACKGROUND_THEME } from "../utils/theme";

export default function ChatTemplate() {
    return (
        <>
            <div className={`${BACKGROUND_THEME} w-full`}>
                <div className="h-full  p-4 border-2 border-white rounded-xl"></div>
            </div>
        </>
    );
}