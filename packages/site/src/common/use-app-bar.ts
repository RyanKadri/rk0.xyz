import { ReactElement, useContext, useEffect } from "react";
import { AppBarContext } from "../root/app-bar-context";

export function useAppBar(title: string, customAction: ReactElement | null = null) {
    const appbar = useContext(AppBarContext);
    const oldState = appbar.settings;
    const oldTitle = document.title;
    useEffect(() => {
        appbar.updateAppBar({ title, customAction });
        document.title = title;
        return () => {
            appbar.updateAppBar(oldState);
            document.title = oldTitle;
        }
    }, [title, customAction])
}