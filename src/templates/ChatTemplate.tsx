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
        {/* TODO gridでここのデザインを指定する */}
            <div className={`${BACKGROUND_THEME} w-full flex flex-col`}>
                <div className="flex-grow-1 flex-shrink-1 overflow-auto border-2 border-white rounded-xl w-full ">
                    <ul className="h-auto min-h-screen w-full p-2 whitespace-pre-wrap break-all text-white">
                        <li className="flex w-full  mb-4">
                            {/* ここにアイコンを表示 */}
                            <div className="max-w-full">
                                <div className="text-sm ">John Doe</div>
                                <div className="text-sm font-bold">
                                    Hey, how are you? I'm fine thank you. Nice to meet you! Shall
                                    we dance?
                                </div>
                            </div>
                        </li>
                        <li className="max-w-full  mb-4">
                            {/* ここにアイコンを表示 */}
                            <div className="max-w-full">
                                <div className="text-sm ">漆黒の堕天使</div>
                                <div className="text-sm font-bold">闇より生まれた死の天使参上</div>
                            </div>
                        </li>
                        <li className="max-w-full  mb-4">
                            {/* ここにアイコンを表示 */}
                            <div className="max-w-full">
                                <div className="text-sm ">漆黒の堕天使</div>
                                <div className="text-sm font-bold">闇より生まれた死の天使参上</div>
                            </div>
                        </li>
                        <li className="max-w-full  mb-4">
                            {/* ここにアイコンを表示 */}
                            <div className="max-w-full">
                                <div className="text-sm ">漆黒の堕天使</div>
                                <div className="text-sm font-bold">闇より生まれた死の天使参上</div>
                            </div>
                        </li>
                        <li className="max-w-full  mb-4">
                            {/* ここにアイコンを表示 */}
                            <div className="max-w-full">
                                <div className="text-sm ">漆黒の堕天使</div>
                                <div className="text-sm font-bold">闇より生まれた死の天使参上</div>
                            </div>
                        </li>
                        <li className="max-w-full  mb-4">
                            {/* ここにアイコンを表示 */}
                            <div className="max-w-full">
                                <div className="text-sm ">漆黒の堕天使</div>
                                <div className="text-sm font-bold">闇より生まれた死の天使参上</div>
                            </div>
                        </li>
                        <li className="max-w-full  mb-4">
                            {/* ここにアイコンを表示 */}
                            <div className="max-w-full">
                                <div className="text-sm ">漆黒の堕天使</div>
                                <div className="text-sm font-bold">闇より生まれた死の天使参上</div>
                            </div>
                        </li>
                        <li className="max-w-full  mb-4">
                            {/* ここにアイコンを表示 */}
                            <div className="max-w-full">
                                <div className="text-sm ">漆黒の堕天使</div>
                                <div className="text-sm font-bold">闇より生まれた死の天使参上</div>
                            </div>
                        </li>
                        <li className="max-w-full  mb-4">
                            {/* ここにアイコンを表示 */}
                            <div className="max-w-full">
                                <div className="text-sm ">漆黒の堕天使</div>
                                <div className="text-sm font-bold">闇より生まれた死の天使参上</div>
                            </div>
                        </li>
                        <li className="max-w-full  mb-4">
                            {/* ここにアイコンを表示 */}
                            <div className="max-w-full">
                                <div className="text-sm ">漆黒の堕天使</div>
                                <div className="text-sm font-bold">闇より生まれた死の天使参上</div>
                            </div>
                        </li>
                    </ul>
                </div>
                {/* テキストフィールドのフォーム */}
                <div className="flex flex-grow-0 flex-shrink-0 w-full mt-1 ">
                    <form onSubmit={handleSubmit}
                        className="flex w-full"
                    >
                        <input
                            type="text"
                            value={message}
                            onChange={handleMessageChange}
                            placeholder="Type your message..."
                            className="flex-grow p-2  border-2 border-white rounded-lg"
                        />
                        <button
                            type="submit"
                            className="flex-grow-0  px-4 py-2 bg-secondary-500 text-white rounded-lg"
                        >
                            Send
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}
