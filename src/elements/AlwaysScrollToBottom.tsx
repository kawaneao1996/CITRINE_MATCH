import { useEffect, useRef } from "react";

export function AlwaysScrollToBottom() {
    const elementRef = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        if (elementRef.current) {
            elementRef.current.scrollIntoView();
        }
    });
    return <div ref={elementRef} />;
}
