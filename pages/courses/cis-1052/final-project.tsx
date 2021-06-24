import Head from "next/head"
import React from "react"
import { useTitle } from "../../../packages/site/src/common/use-app-bar"
import content from "../../../packages/site/src/lessons/intro-web-programming/final-project/final-project.md"
import { StudyGuide } from "../../../packages/site/src/lessons/shared/study-guide"

export default function MidtermStudyGuide() {
    useTitle("")
    return (
        <>
        <Head>
            <title>Introduction to Web Programming - Final Project</title>
        </Head>
        <StudyGuide content={content} baseUrl={ "/courses/cis-1052" } />
        </>
    )
}