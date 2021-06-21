import content from "../../../packages/site/src/lessons/intro-web-programming/final-prep/study-guide.md"
import { StudyGuide } from "../../../packages/site/src/lessons/shared/study-guide"

export default function FinalStudyGuide() {
    return (
        <StudyGuide content={content} baseUrl={ "/courses/cis-1052" } />
    )
}