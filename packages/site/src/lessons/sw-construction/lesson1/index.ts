import { BookreadsSlide } from "./slides/bookreads-slide";
import { Assignment, CourseFeatures, CourseGoals, CourseOverviewP1, FairUse, FreeSoftware, Licensing, OpenSourceP1, OpenSourceP2, OpenSourceP3, References, Syllabus, Title } from "./slides/simple";

export const lesson1 = {
    title: "Hello World!",
    description: "Course Expectations, Version Control and Open Source",
    slug: "hello-world",
    slides: [
        Title,
        CourseGoals,
        CourseFeatures,
        CourseOverviewP1,
        Syllabus,
        OpenSourceP1,
        OpenSourceP2,
        OpenSourceP3,
        FreeSoftware,
        Licensing,
        FairUse,
        Assignment,
        BookreadsSlide,
        References
    ],
    examples: [
    ]
}