
// add teacher to list on form submit
export const addTeacher = (teacher) => {
  return {
    type: 'ADD_TEACHER',
    teacher: teacher
  }
}

// remove teacher from list on form submit
export const removeTeacher = (id) => {
  return {
    type: 'REMOVE_TEACHER',
    id: id
  }
}

// switch view between teacher/course forms
export const toggleForm = (id) => {
  return {
    type: 'TOGGLE_FORM',
    id: id
  }
}

// add course to list on form submit
export const addCourse = (course) => {
  return {
    type: 'ADD_COURSE',
    course: course
  }
}

// remove course from list on form submit
export const removeCourse = (id) => {
  return {
    type: 'REMOVE_COURSE',
    id: id
  }
}
