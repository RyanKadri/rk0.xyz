import { useRouter } from "next/router";
import React, { useEffect } from "react";

export default function Redirector() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/courses");
  }, []);

  return <span>Redirecting</span>;
}
