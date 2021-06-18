import { RefObject, useEffect, useState } from "react";

export function useComponentSize(componentRef: RefObject<HTMLElement>) {
    const height = typeof window === "undefined" ? 1000 : window.innerHeight;
    const width = typeof window === "undefined" ? 1000 : window.innerWidth;
    const [size, setSize] = useState({ height, width });
    const cb = () => {
        const bb = componentRef.current
            ? componentRef.current.getBoundingClientRect()
            : { height: 0, width: 0 };
        setSize({ height: bb.height, width: bb.width });
    };
    useEffect(() => {
        window.addEventListener("resize", cb);
        return () => window.removeEventListener("resize", cb);
    }, []);
    useEffect(cb, [ componentRef.current ]);
    return size;
}
