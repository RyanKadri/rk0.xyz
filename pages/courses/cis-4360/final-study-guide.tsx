import { StudyGuide } from "../../../packages/site/src/lessons/shared/study-guide"
import content from "../../../packages/site/src/lessons/sw-construction/final-prep/study-guide.md"

export default function FinalStudyGuide() {
    return (
        <StudyGuide content={content} baseUrl={ "/courses/cis-4036" } />
    )
}