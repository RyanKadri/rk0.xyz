import Head from "next/head"
import React from "react"
import content from "../../../packages/site/src/lessons/intro-web-programming/final-prep/study-guide.md"
import { StudyGuide } from "../../../packages/site/src/lessons/shared/study-guide"

export default function FinalStudyGuide() {
    return (
        <>
        <Head>
            <title>Introduction to Web Programming - Final Study Guide</title>
        </Head>
        <StudyGuide content={content} baseUrl={ "/courses/cis-1052" } />
        </>
    )
}