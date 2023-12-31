import Header from "../organisms/Header";

export default function HomeTemplate() {
    return (
        <>
            <Header />
            {/* 心理テストの画面に遷移するボタン */}
            <div className="bg-primary-500">
                <button className="btn btn-primary">心理テストを始める</button>
            </div>
        </>
    );
}