import { useRouter } from "next/router";
import React, { ReactNode, useEffect } from "react";
import ReactGA from "react-ga";
import { CourseDefinition } from "../../presenter-core/src/services/types";

interface GAProps {
  children?: ReactNode;
}

export function GAWrapper({ children }: GAProps) {
  const { pathname, events } = useRouter();
  useEffect(() => {
    ReactGA.initialize("UA-146806194-1");
    ReactGA.pageview(pathname);
    events.on("routeChangeComplete", url => ReactGA.pageview(url));
  }, []);

  return <>{children}</>;
}

export enum TrackedCategories {
  LEARNING_TOOLS = "Learning Tools",
}

export enum TrackedActions {
  EDITED_PLAYGROUND = "Tweaked Playground Example",
}

export function courseToStructuredData(course: CourseDefinition) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.title,
    description: course.description,
    provider: {
      "@type": "Organization",
      name: "Ryan Kadri - Adjunct Professor",
    },
  };
}
