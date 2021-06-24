import Head from "next/head"
import React from "react"
import { StudyGuide } from "../../../packages/site/src/lessons/shared/study-guide"
import content from "../../../packages/site/src/lessons/sw-construction/midterm-prep/study-guide.md"

export default function MidtermStudyGuide() {
    return (
        <>
        <Head>
            <title>Practicum in Software Construction - Midterm Study Guide</title>
        </Head>
        <StudyGuide content={content} baseUrl={ "/courses/cis-4036" } />
        </>
    )
}