import React from "react";
import { glossaryTerms } from "../../../packages/site/src/lessons/intro-web-programming-f2021/glossary/glossary-terms";
import GlossaryPage from "../../../packages/site/src/lessons/shared/glossary-page";

export default function Glossary() {
  return <GlossaryPage items={glossaryTerms} />;
}
