import { useState } from "react";
import { BACKGROUND_THEME } from "../utils/theme";

export default function ChatTemplate() {
    const [message, setMessage] = useState("");

    const handleMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // メッセージ送信の処理を実装する
        console.log("Sending message:", message);
        setMessage("");
    };

    return (
        <>
            <div className={`${BACKGROUND_THEME} w-full`}>
                <div className="h-full  p-4 border-2 border-white rounded-xl">
                    <ul className="w-full whitespace-pre-wrap break-all text-white">
                        <li className="flex w-full  mb-4">
                            {/* ここにアイコンを表示 */}
                            <div className="max-w-full">
                                <div className="text-sm font-bold">John Doe</div>
                                <div className="text-sm ">
                                    Hey, how are you? I'm fine thank you. Nice to meet you! Shall
                                    we dance?
                                </div>
                            </div>
                        </li>
                        <li className="max-w-full  mb-4">
                            {/* ここにアイコンを表示 */}
                            <div className="max-w-full">
                                <div className="text-sm font-bold">漆黒の堕天使</div>
                                <div className="text-sm ">闇より生まれた死の天使参上</div>
                            </div>
                        </li>
                    </ul>
                    {/* テキストフィールドのフォーム */}

                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            value={message}
                            onChange={handleMessageChange}
                            placeholder="Type your message..."
                            className="w-full p-2 mt-4 border-2 border-white rounded-lg"
                        />
                        <button
                            type="submit"
                            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg"
                        >
                            Send
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}
