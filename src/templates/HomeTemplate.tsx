import Button from "../elements/Button";
import Header from "../organisms/Header";

export default function HomeTemplate() {
    return (
        <>
            <Header />
            {/* 心理テストの画面に遷移するボタン */}
            <div className="bg-primary-500 min-h-screen">
                <button className="bg-primary-500 hover:bg-secondary-500 text-white px-2 py-4 rounded">心理テストを始める</button>
                <Button type="button" label="心理テストを始める" />
            </div>
        </>
    );
}