import content from "../../../packages/site/src/lessons/intro-web-programming/final-project/final-project.md"
import { StudyGuide } from "../../../packages/site/src/lessons/shared/study-guide"

export default function MidtermStudyGuide() {
    return (
        <StudyGuide content={content} baseUrl={ "/courses/cis-1052" } />
    )
}