import Head from "next/head"
import React from "react"
import { StudyGuide } from "../../../packages/site/src/lessons/shared/study-guide"
import content from "../../../packages/site/src/lessons/sw-construction/final-prep/study-guide.md"

export default function FinalStudyGuide() {
    return (
        <>
        <Head>
            <title>Practicum in Software Construction - Final Study Guide</title>
        </Head>
        <StudyGuide content={content} baseUrl={ "/courses/cis-4036" } />
        </>
    )
}