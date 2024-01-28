import { useState } from "react";
import { BACKGROUND_THEME_CHAT } from "../utils/theme";

export default function ChatTemplate() {
    const myId = "1";
    const myName = "ユーザー１";
    type Message = {userId: string, userName: string, message?:string};

    const [currentMessage, setCurrentMessage] = useState<Message>({userId: myId, userName: myName, message: ""});

    const [Messages, setMessages] = useState<Message[]>([]);



    const handleMessageChange = (e: React.ChangeEvent<HTMLInputElement>, userId:string, userName:string) => {
        setCurrentMessage({userId: userId, userName: userName, message: e.target.value});
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // メッセージ送信の処理を実装する
        console.log("Sending message:", currentMessage);

        setMessages([...Messages, currentMessage]);
        // メッセージ入力欄を空にする
        setCurrentMessage({userId: myId, userName: myName, message: ""});
    };

    return (
        <>
            <div className={`${BACKGROUND_THEME_CHAT} w-full flex flex-col`}>
                <div className="flex-grow-1 flex-shrink-1 overflow-auto border-2 border-white rounded-xl w-full ">
                    <ul className="h-auto min-h-screen w-full p-2 whitespace-pre-wrap break-all text-white">
                        {Messages.map((message, index) => (
                            <li key={index} className="max-w-full  mb-4">
                                {/* ここにアイコンを表示 */}
                                <div className="max-w-full">
                                    <div className="text-sm ">{message.userName}</div>
                                    <div className="text-sm font-bold">{message.message}</div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                {/* テキストフィールドのフォーム */}
                <div className="flex flex-grow-0 flex-shrink-0 w-full mt-1 ">
                    <form onSubmit={handleSubmit}
                        className="flex w-full"
                    >
                        <input
                            type="text"
                            value={currentMessage?.message}
                            onChange={(e) => handleMessageChange(e, myId, myName)}
                            // placeholder="Type your message..."
                            className="flex-grow p-2 mr-1 border-2 border-white rounded-lg"
                        />
                        <button
                            type="submit"
                            className="flex-grow-0  px-4 py-2 bg-secondary-500 text-white rounded-lg"
                        >
                            送信
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}
