import React, { ComponentType } from "react";

export const AppBarContext = React.createContext<IAppBarContext>({ 
    settings: {
        title: "Ryan Kadri",
        CustomAction: null,
    },
    updateAppBar: () => {},
})

export interface AppBarSettings {
    title: string;
    CustomAction: ComponentType | null;
}

export interface IAppBarContext {
    updateAppBar: (update: Partial<AppBarSettings>) => void;
    settings: AppBarSettings
}