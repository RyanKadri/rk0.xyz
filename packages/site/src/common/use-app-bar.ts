import { ReactElement, useContext, useEffect } from "react";
import { AppBarContext } from "../root/app-bar-context";

export function useAppBar(title: string, customAction: ReactElement | null = null) {
    const appbar = useContext(AppBarContext);
    const oldState = appbar.settings;
    useEffect(() => {
        appbar.updateAppBar({ title, customAction });
        return () => appbar.updateAppBar(oldState);
    }, [])
}