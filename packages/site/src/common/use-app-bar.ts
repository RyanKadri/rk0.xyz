import { ComponentType, useContext, useEffect } from "react";
import { AppBarContext } from "../root/app-bar-context";

const defaultTitle = "Ryan Kadri"
export function useAppBar(title: string, customAction: ComponentType<any> | null = null) {
    const appbar = useContext(AppBarContext);
    useEffect(() => {
        appbar.updateAppBar({ title, CustomAction: customAction });
        document.title = title || defaultTitle;
        return () => {
            appbar.updateAppBar({ title: defaultTitle });
            document.title = defaultTitle;
        }
    }, [title, customAction])
}