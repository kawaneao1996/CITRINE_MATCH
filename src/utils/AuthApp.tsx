import { Router } from "@remix-run/router";
import { Session } from "@supabase/supabase-js";
import { useEffect, useRef, useState } from "react";
import { supabase } from "./supabaseClient";
import { RouterProvider } from "react-router-dom";
import { BACKGROUND_THEME_LOGIN, GRADATION_ANIMATE_THEME_LOGIN } from "./theme";

export function AppAuth(props: { router: Router }) {
    const [session, setSession] = useState<Session | null>(null);

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session);
        });

        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
        });

        return () => subscription.unsubscribe();
    }, []);

    const tabContents = {
        '初めての方': 'first',
        'すでにアカウントをお持ちの方': 'login',
    } as const;
    const tabs = Object.keys(tabContents);
    type Tabs = typeof tabs[number];
    const [activeTab, setActiveTab] = useState<Tabs>(tabs[0]);
    // ヘッダーの高さに合わせてコンテンツの高さを調整する
    const headerRef = useRef<HTMLElement>(null);
    const [headerHeight, setHeaderHeight] = useState(0);

    useEffect(() => {
        if (headerRef.current) {
            setHeaderHeight(headerRef.current.clientHeight);
        }
    }, []);

    if (!session) {
        return (
            <>
                <header className={`${GRADATION_ANIMATE_THEME_LOGIN} h-auto`} ref={headerRef}>
                    <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" role="tablist">
                        {tabs.map(tab => {
                            return (
                                <li className="me-2" role="presentation">
                                    <button
                                        className={`inline-block p-4 border-b-2 text-sm rounded-t-lg ${activeTab === tab ? 'text-purple-600 border-purple-600' : 'text-gray-500 border-transparent'}`}
                                        onClick={() => setActiveTab(tab)}
                                        role="tab"
                                    >
                                        {tab}
                                    </button>
                                </li>
                            )
                        })}
                    </ul>
                </header>
                <div className={`${BACKGROUND_THEME_LOGIN}`} style={{ minHeight: `calc(100vh - ${headerHeight}px)` }} id="login-tabs">
                    {Object.entries(tabContents).map(([tab, content]) => {
                        return (
                            <div className={`${activeTab !== tab ? 'hidden' : ''}`} role="tabpanel">
                                {content}
                            </div>
                        )
                    })}
                </div>
            </>
        );
    } else {
        return <RouterProvider router={props.router} />;
    }
}
