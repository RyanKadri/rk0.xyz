import React, { ReactElement } from "react";

export const AppBarContext = React.createContext<IAppBarContext>({ 
    settings: {
        title: "Ryan Kadri",
        customAction: null,
    },
    updateAppBar: () => {},
})

export interface AppBarSettings {
    title: string;
    customAction: ReactElement | null;
}

export interface IAppBarContext {
    updateAppBar: (update: Partial<AppBarSettings>) => void;
    settings: AppBarSettings
}