export default function Header() {
    return (
        <>
            {/* 各ページへのリンクをヘッダーに表示する */}
            <header className="bg-secondary-400">
                <div className="flex flex-row justify-between items-center p-5">
                    <div className="flex flex-row items-center">
                        <div className="text-3xl font-bold text-white">Quiz App</div>
                    </div>
                    <div className="flex flex-row items-center">
                        <a href="/" className="text-white mr-5">Home</a>
                        <a href="/questionaire" className="text-white">Questionaire</a>
                    </div>
                </div>
            </header>
        </>
    );
}