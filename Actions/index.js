
export const addTeacher = (teacher) => {
  return {
    type: 'ADD_TEACHER',
    teacher: teacher
  }
}

export const removeTeacher = (id) => {
  return {
    type: 'REMOVE_TEACHER',
    id: id
  }
}

export const toggleForm = (id) => {
  return {
    type: 'TOGGLE_FORM',
    id: id
  }
}

export const addCourse = (course) => {
  return {
    type: 'ADD_COURSE',
    course: course
  }
}

export const removeCourse = (id) => {
  return {
    type: 'REMOVE_COURSE',
    id: id
  }
}
