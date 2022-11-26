import * as types from "./actionTypes";
import * as courseApi from "../../api/courseApi";

// export function createCourse(course) { // not necessary anymore
//     return { type: types.CREATE_COURSE, course }; // object shorthand symtax
// }

export function loadCoursesSuccess(courses) {
    return { type: types.LOAD_COURSES_SUCCESS, courses }; // object shorthand symtax
}

export function createCourseSucces(course) {
    return { type: types.CREATE_COURSE_SUCCESS, course }; // object shorthand symtax
}

export function saveCourseSuccess(course) {
    return { type: types.UPDATE_COURSE_SUCCESS, course }; // object shorthand symtax
}

export function loadCourses() {
    return function (dispatch) {
        return courseApi
            .getCourses()
            .then((courses) => {
                dispatch(loadCoursesSuccess(courses));
            })
            .catch((error) => {
                throw error;
            });
    };
}

export function saveCourse(course) {
    return function (dispatch, getState) {
        return courseApi
            .saveCourse()
            .then((savedCourse) => {
                course.id
                    ? dispatch(saveCourseSuccess(course))
                    : dispatch(createCourseSucces(course));
            })
            .catch((error) => {
                throw error;
            });
    };
}
