import { StudyGuide } from "../../../packages/site/src/lessons/shared/study-guide"
import content from "../../../packages/site/src/lessons/sw-construction/midterm-prep/study-guide.md"

export default function MidtermStudyGuide() {
    return (
        <StudyGuide content={content} baseUrl={ "/courses/cis-4036" } />
    )
}