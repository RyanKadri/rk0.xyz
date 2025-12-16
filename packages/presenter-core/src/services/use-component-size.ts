import { RefObject, useEffect, useState } from "react";

export function useComponentSize(componentRef: RefObject<HTMLElement | null>) {
  // This initial setup is for SSR. Going right to the window width screws up rehydration
  const [size, setSize] = useState({ height: 1000, width: 1000 });
  useEffect(() => {
    setSize({ height: window.innerHeight, width: window.innerWidth });
  }, []);

  const cb = () => {
    const bb = componentRef.current ? componentRef.current.getBoundingClientRect() : { height: 0, width: 0 };
    setSize({ height: bb.height, width: bb.width });
  };
  useEffect(() => {
    window.addEventListener("resize", cb);
    return () => window.removeEventListener("resize", cb);
  }, []);
  useEffect(cb, [componentRef.current]);
  return size;
}
