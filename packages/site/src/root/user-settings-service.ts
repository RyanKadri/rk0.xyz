const lastCourseKey = "last.course";

export function fetchLastCourse() {
    return localStorage.getItem(lastCourseKey);
}

export function saveCourseSelection(course: string) {
    localStorage.setItem(lastCourseKey, `${course}`);
}