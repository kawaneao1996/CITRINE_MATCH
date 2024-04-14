import { Router } from "@remix-run/router";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { Session } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import { RouterProvider } from "react-router-dom";
import { supabase } from "./supabaseClient";
import { AuthAppLabels } from "./AuthAppLabels";

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

    if (!session) {
        return (
            <Auth
                supabaseClient={supabase}
                appearance={{ theme: ThemeSupa }}
                providers={[]}
                // providers={["google", "twitter"]}
                localization={AuthAppLabels}
            />
        );
    } else {
        console.log(session);
        return <RouterProvider router={props.router} />;
    }
}
