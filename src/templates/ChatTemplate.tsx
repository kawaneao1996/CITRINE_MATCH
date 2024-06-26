import { useEffect, useRef, useState } from "react";
import { BACKGROUND_THEME_CHAT } from "../utils/theme";
import { io } from "socket.io-client";
import { AlwaysScrollToBottom } from "../elements/AlwaysScrollToBottom";

export default function ChatTemplate() {
  console.log("ChatTemplate");
  const URL = import.meta.env.PROD
    ? "https://empty-owl-26-m12j9rvk66cj.deno.dev"
    : "http://localhost:3000";

  console.log("URL", URL);
  console.log("import.meta.env", import.meta.env);
  const socket = io(URL, {
    auth: {
      serveroffset: 0,
    },
  });
  const myId = "1";
  // const myName = "ユーザー１";
  const myName = useRef("ユーザー１");
  useEffect(() => {
    // ユーザー名の取得
    const userName = prompt("ユーザー名を入力してください", "ユーザー１");
    if (userName) {
      myName.current = userName;
    }
  }, []);

  type Message = { userId: string; userName: string; message?: string };

  // const [pendingMessage, setPendingMessage] = useState<Message>({ userId: myId, userName: myName, message: "" });
  const [pendingMessage, setPendingMessage] = useState<Message>({
    userId: myId,
    userName: myName.current,
    message: "",
  });

  const [receivedMessages, setReceivedMessages] = useState<Message[]>([]);

  const [isConnected, setIsConnected] = useState(socket.connected);

  useEffect(() => {
    console.log("ChatTemplate", "useEffect");
    function onConnect() {
      console.log("onConnect");
      setIsConnected(true);
      console.log("socket.connected", socket.connected);
      console.log("socket", socket);
    }
    function onDisconnect() {
      setIsConnected(false);
      setReceivedMessages([]);
    }
    // 複数件のメッセージ受信時の処理
    // 初期画面表示時、再接続時に実行される
    function onMessages(messages: Message[], serveroffset: number) {
      setReceivedMessages(previousMessages => [...previousMessages, ...messages]);
      console.log("Received messages:", messages);
      socket.auth = { serveroffset };
    }
    // 1件のメッセージ受信時の処理
    function onMessage(message: Message, serveroffset: number) {
      setReceivedMessages(previousMessages => [...previousMessages, message]);
      console.log("Received message:", message);
      socket.auth = { serveroffset };
    }

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);
    socket.on("messages", onMessages);
    socket.on("message", onMessage);

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
      socket.off("messages", onMessages);
      socket.off("message", onMessage);
    };
  }, []);

  const handleMessageChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    userId: string,
    userName: string,
  ) => {
    setPendingMessage({
      userId: userId,
      userName: userName,
      message: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // メッセージ送信の処理を実装する
    if (!pendingMessage.message) {
      return;
    }
    socket.emit("message", pendingMessage);
    console.log("Sending message:", pendingMessage);
    // メッセージ入力欄を空にする
    // setPendingMessage({ userId: myId, userName: myName, message: "" });
    setPendingMessage({ userId: myId, userName: myName.current, message: "" });
  };
  return (
    <>
      {isConnected
        ? (
          <div className={`${BACKGROUND_THEME_CHAT} w-full flex flex-col`}>
            <div className="flex-grow-1 flex-shrink-1 overflow-auto border-2 border-white rounded-xl w-full ">
              <ul className="h-auto min-h-screen w-full p-2 whitespace-pre-wrap break-all text-white">
                {receivedMessages.map((message, index) => (
                  <li key={index} className="max-w-full  mb-4">
                    {/* ここにアイコンを表示 */}
                    <div className="max-w-full">
                      <div className="text-sm ">{message.userName}</div>
                      <div className="text-sm font-bold">{message.message}</div>
                    </div>
                  </li>
                ))}
                <AlwaysScrollToBottom />
              </ul>
            </div>
            {/* テキストフィールドのフォーム */}
            <div className="flex flex-grow-0 flex-shrink-0 w-full mt-1 ">
              <form onSubmit={handleSubmit} className="flex w-full">
                <input
                  type="text"
                  value={pendingMessage?.message}
                  // onChange={(e) => handleMessageChange(e, myId, myName)}
                  onChange={(e) => handleMessageChange(e, myId, myName.current)}
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
        )
        : (
          <div className={`${BACKGROUND_THEME_CHAT} w-full flex flex-col`}>
            <div className="text-white text-center">接続中...</div>
          </div>
        )}
    </>
  );
}
