import Head from "next/head"
import React from "react"
import content from "../../../packages/site/src/lessons/intro-web-programming/midterm-prep/study-guide.md"
import { StudyGuide } from "../../../packages/site/src/lessons/shared/study-guide"

export default function MidtermStudyGuide() {
    return (
        <>
        <Head>
            <title>Introduction to Web Programming - Midterm Study Guide</title>
        </Head>
        <StudyGuide content={content} baseUrl={ "/courses/cis-1052" } />
        </>
    )
}