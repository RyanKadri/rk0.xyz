import { ComponentType, useContext, useEffect } from "react";
import { AppBarContext } from "../root/app-bar-context";

const defaultTitle = "Ryan Kadri"
export function useAppBar(title: string, customAction: ComponentType<any> | null = null) {
    const appBar = useContext(AppBarContext);
    useEffect(() => {
        appBar.updateAppBar({ title, CustomAction: customAction });
        document.title = title || defaultTitle;
        return () => {
            appBar.updateAppBar({ title: defaultTitle });
            document.title = defaultTitle;
        }
    }, [title, customAction])
}