import { useEffect } from "react";

const defaultTitle = "Ryan Kadri";
export function useTitle(title: string) {
  useEffect(() => {
    document.title = title || defaultTitle;
    return () => {
      document.title = defaultTitle;
    };
  }, [title]);
}
