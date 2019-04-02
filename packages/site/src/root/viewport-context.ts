import React from "react";

export const ViewportContext = React.createContext<IViewportContext>({ 
    current: {
        isFullscreen: false,
        requestingFullscreen: false
    },
    updateViewport: () => {}
})

export interface ViewportInfo {
    isFullscreen: boolean;
    requestingFullscreen: boolean;
}

export interface IViewportContext {
    current: ViewportInfo;
    updateViewport: (update: Partial<ViewportInfo>) => void;
}