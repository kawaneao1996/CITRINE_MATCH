import Button from "../elements/Button";
import Header from "../organisms/Header";

export default function HomeTemplate() {
    return (
        <>
            <Header />
            {/* 心理テストの画面に遷移するボタン */}
            <div className="bg-primary-500 min-h-screen">
                <Button type="button" label="心理テストを始める" />
            </div>
        </>
    );
}