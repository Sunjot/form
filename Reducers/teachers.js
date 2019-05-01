
let teacherIndex = 2;
const initialTeachers = [
  {
    id: 0,
    firstName: "Don",
    lastName: "Cherry",
    gender: "Male",
    course: "Accounting"
  },
  {
    id: 1,
    firstName: "Andrew",
    lastName: "Shaw",
    gender: "Male",
    course: "Calculus"
  },
  {
    id: 2,
    firstName: "Joline",
    lastName: "Hill",
    gender: "Female",
    course: "Chemistry"
  },
]

const teachers = (state = initialTeachers, action) => {

  switch (action.type) {

    case 'ADD_TEACHER':
      teacherIndex++;
      return [
        ...state, { ...action.teacher, id: teacherIndex }
      ];

    case 'REMOVE_TEACHER':
      return state.filter(teacher => teacher.id !== action.id);

    default:
      return state;
  }
}

export default teachers;
